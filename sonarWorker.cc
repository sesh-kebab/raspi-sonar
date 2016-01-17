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

SonarWorker::SonarWorker(Callback *callback, int SonarPin)
        : AsyncWorker(callback), sonarPin(SonarPin) { }
        
SonarWorker::~SonarWorker() { }

void SonarWorker::Execute() {
    pinMode(sonarPin, OUTPUT);
    int i = 0;
    for(;;) {
        i++;

        digitalWrite(sonarPin, HIGH); delay(100);
        digitalWrite(sonarPin, LOW); delay(100);

        if (i > 10) { break; }
    }
    
    delay(1000);
    
    //calculate duration in microseconds
    duration = 0;
}

void SonarWorker::HandleOKCallback() {
    HandleScope scope;

    Local<Value> argv[] = {
        Null(),
        New<Number>(duration)
    };

    callback->Call(2, argv);
}