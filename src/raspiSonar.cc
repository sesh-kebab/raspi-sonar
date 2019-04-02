#include <wiringPi.h>
#include <nan.h>
#include "sonarWorker.h"

using v8::Context;
using v8::Function;
using v8::Local;
using v8::Number;
using v8::Value;
using v8::Object;
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
            Local<v8::Object> parameterObject = info[0]->ToObject();
            Local<v8::Value> pinValue = parameterObject->Get(Nan::New<v8::String>("config").ToLocalChecked());
            Local<v8::Value> skipCallToSetup = parameterObject->Get(Nan::New<v8::String>("callWiringPiSetup").ToLocalChecked());

            int pin = To<uint32_t>(pinValue).FromJust();
            bool callWiringPiSetup = To<bool>(skipCallToSetup).FromMaybe(true);

            RaspiSonar *obj = new RaspiSonar(pin, callWiringPiSetup);

            obj->Wrap(info.This());
            info.GetReturnValue().Set(info.This());
        } else {
            const int argc = 1;
            v8::Local<v8::Value> argv[argc] = {info[0]};
            v8::Local<v8::Function> cons = Nan::New(constructor());
            Local<Context> context = info.GetIsolate()->GetCurrentContext();
            info.GetReturnValue().Set(cons->NewInstance(context, argc, argv).ToLocalChecked());
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

    RaspiSonar(int SonarPin, bool CallWiringPiSetup) {
        Pin = SonarPin;

        if (CallWiringPiSetup) {
            wiringPiSetup();
        }
    }
};
