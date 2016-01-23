#ifndef SONAR_WORKER_H
#define SONAR_WORKER_H

#include <nan.h>

using Nan::AsyncWorker;
using Nan::Callback;

class SonarWorker : public AsyncWorker 
{
private:
    int sonarPin, duration;
    
public:
    SonarWorker(Callback *callback, int SonarPin);
  
    ~SonarWorker();

    void Execute();
    void HandleOKCallback();
};

#endif