#include <wiringPi.h>
#include <nan.h>
#include "sonarWorker.h"

using v8::Function;
using v8::Local;
using v8::Number;
using v8::Value;
using Nan::AsyncQueueWorker;
using Nan::AsyncWorker;
using Nan::Callback;
using Nan::HandleScope;
using Nan::New;
using Nan::Null;
using Nan::To;

using namespace Nan;

class RaspiSonar : public Nan::ObjectWrap {
private:
    //destructor
    ~RaspiSonar() {
    }

public:
    int Pin;

    static NAN_METHOD(New) { 
        if (info.IsConstructCall()) {
            double value = info[0]->IsUndefined() ? 0 : Nan::To<double>(info[0]).FromJust();
            RaspiSonar *obj = new RaspiSonar(value);
            obj->Wrap(info.This());
            info.GetReturnValue().Set(info.This());
        } else {
            const int argc = 1;
            v8::Local<v8::Value> argv[argc] = {info[0]};
            v8::Local<v8::Function> cons = Nan::New(constructor());
            info.GetReturnValue().Set(cons->NewInstance(argc, argv));
        }
    }
    
    static NAN_METHOD(GetHandle) { 
        RaspiSonar* obj = Nan::ObjectWrap::Unwrap<RaspiSonar>(info.Holder());
        info.GetReturnValue().Set(obj->handle());
    }
    
    static NAN_METHOD(Read) {
        RaspiSonar* obj = Nan::ObjectWrap::Unwrap<RaspiSonar>(info.Holder());
        Callback* callback = new Callback(info[0].As<Function>());
        
        AsyncQueueWorker(new SonarWorker(callback, obj->Pin));
    }
    
    static inline Nan::Persistent<v8::Function> & constructor() {
        static Nan::Persistent<v8::Function> my_constructor;
        return my_constructor;
    }

    RaspiSonar(int SonarPin) {
        Pin = SonarPin;
        wiringPiSetup();
    }
};

