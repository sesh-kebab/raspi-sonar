#ifndef SONAR_WORKER_H
#define SONAR_WORKER_H

#include <nan.h>

class SonarWorker : public AsyncWorker {
public:
    SonarWorker(Callback *callback, int SonarPin);
  
    ~SonarWorker();

    void Execute();
    void HandleOKCallback();

private:
    int sonarPin;
    int duration;
};

#endif