#include <wiringPi.h>
#include <nan.h>
#include "sonarWorker.h"

using v8::Function;
using v8::Local;
using v8::Number;
using v8::Value;
using v8::String;
using v8::Isolate;
using Nan::AsyncQueueWorker;
using Nan::AsyncWorker;
using Nan::Callback;
using Nan::HandleScope;
using Nan::New;
using Nan::Null;

//constructor
SonarWorker::SonarWorker(Callback *callback, int SonarPin)
        : AsyncWorker(callback), sonarPin(SonarPin) {

    //init variables
    result = new char[80];            
}
        
//destructor
SonarWorker::~SonarWorker() {
    result = NULL;
 }

//async method
void SonarWorker::Execute() {
    pinMode(sonarPin, OUTPUT);
    //update code to use the same pin for trigger and signal
    
    unsigned int pinTrigger = 28, pinSignal = 29;
    pinMode(pinTrigger, OUTPUT);
    pinMode(pinSignal, INPUT);
    
    //set high for 10microseconds to trigger
    digitalWrite(pinTrigger, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinTrigger, LOW);
    
    //wait for high
    unsigned int start = 0;
    unsigned int end = 0;
    for(;;) {
        int value = digitalRead(pinSignal);
        if (value != 0) {
            start = micros();
            break;
        }
    }
    
    //time taken for high to switch to low
    for(;;) {
        int value = digitalRead(pinSignal);
        if (value != 1) {
            end = micros();
            break;
        }
    }
    
    sprintf(result, "%d", end - start);
}

//expected to be called once execute is completed
void SonarWorker::HandleOKCallback() {
    Isolate* isolate = Isolate::GetCurrent();
    
    const unsigned argc = 1;
    Local<Value> argv[argc] = { String::NewFromUtf8(isolate, result) };
    
    //callback with the result
    callback->Call(isolate->GetCurrentContext()->Global(), 1, argv);
}