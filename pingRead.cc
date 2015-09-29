#include <node.h>
#include <stdio.h>
#include <unistd.h>
#include <pthread.h>
#include <v8.h>
#include <wiringPi.h>
#include <nan.h>
#include "pingRead.h"

using v8::FunctionTemplate;


NAN_METHOD(pingRead) {
    v8::Local<v8::Function> callbackHandle = info[1].As<v8::Function>();
    Nan::Callback callback(callbackHandle);
    callback.Call(0, 0);
}

NAN_MODULE_INIT(InitAll) {
    Nan::Set(target, Nan::New("pingRead").ToLocalChecked(),
        Nan::GetFunction(Nan::New<FunctionTemplate>(pingRead)).ToLocalChecked());
}

NODE_MODULE(raspPingRead, InitAll);