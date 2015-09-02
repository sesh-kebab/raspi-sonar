//hello
 
#include <node.h>
#include <stdio.h>
#include <unistd.h>
#include <pthread.h>
#include <v8.h>
#include <wiringPi.h>
 
using namespace v8;
 
void Method(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
}
 
void RunCallback(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = Isolate::GetCurrent();
    HandleScope scope(isolate);
    
    unsigned int pinSignal = -1;
    unsigned int pinTrigger = -1;
               
    //Check for the right number of arguments
    if (args.Length() < 2) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "Wrong number of arguments")
        ));                          
        return;
    }
               
    //Check for the correct type
    if (!args[0]->IsFunction()) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "1st argument is not a valid function.")
        ));
        return;
    }
    Local<Function> cb = Local<Function>::Cast(args[0]);
    
    //Check for the correct type
    if (!args[1]->IsObject()) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "2nd argument is not a valid object.")
        ));
        return;
    }
    
    //Check for pinSignal property on the object argument
    Handle<Value> pinSignalKey = String::NewFromUtf8(isolate, "pinSignal");
    if (!args[1]->ToObject()->Has(pinSignalKey)) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "pinSignal not a property of the object argument.")
        ));
        return;
    }
    
    //Check for pulseOut property on the object argument
    Handle<Value> pulseOutKey = String::NewFromUtf8(isolate, "pulseOut");
    if (!args[1]->ToObject()->Has(pulseOutKey)) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate, "pulseOut not a property of the object argument.")
        ));
        return;
    }
    
    pinSignal = args[1]->ToObject()->Get(pinSignalKey)->Uint32Value();
    pinTrigger = pinSignal;
    
    //Check for pinTriggerKey property on the object argument
    Handle<Value> pinTriggerKey = String::NewFromUtf8(isolate, "pinTrigger");
    if (args[1]->ToObject()->Has(pinTriggerKey)) {
        pinTrigger = args[1]->ToObject()->Get(pinTriggerKey)->Uint32Value();
    }
    
                    
    unsigned int sleepFor = 500000;
    sleepFor = args[1]->ToObject()->Get(pulseOutKey)->Uint32Value();     
                    
    for (int i = 0; i < 5; i++) {
        pinMode(pinTrigger, OUTPUT);
        pinMode(pinSignal, INPUT);
        
        digitalWrite(pinTrigger, HIGH);
        delayMicroseconds(10);
        digitalWrite(pinTrigger, LOW);
        
        unsigned int start = 0;
        unsigned int end = 0;
        for(;;) {
            int value = digitalRead(pinSignal);
            if (value != 0) {
                start = micros();
                break;
            }
        }
        
        for(;;) {
            int value = digitalRead(pinSignal);
            if (value != 1) {
                end = micros();
                break;
            }
        }
        
        char result[2];
        //float distance = 343.0 * (end - start) / 1000000 * .5;
        sprintf(result, "%d", end - start);
        
        const unsigned argc = 1;
        Local<Value> argv[argc] = { String::NewFromUtf8(isolate, result) };
        cb->Call(isolate->GetCurrentContext()->Global(), 1, argv);
        
        usleep(sleepFor);
    }
}
 
void init(Handle<Object> exports, Handle<Object> module) {
    wiringPiSetup ();
    
    NODE_SET_METHOD(module, "exports", RunCallback);
}
 
NODE_MODULE(addon, init);