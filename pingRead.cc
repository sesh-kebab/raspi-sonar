#include <nan.h>
#include "pingRead.h"
#include "raspiSonar.cc"

using v8::FunctionTemplate;
using namespace Nan;

NAN_MODULE_INIT(InitAll) {
    //Export RaspiSonar constructor via the sonarFactory constructor function
    v8::Local<v8::FunctionTemplate> tpl = Nan::New<v8::FunctionTemplate>(RaspiSonar::New);
    tpl->SetClassName(Nan::New("RaspiSonar").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    SetPrototypeMethod(tpl, "getHandle", RaspiSonar::GetHandle);
    SetPrototypeMethod(tpl, "read", RaspiSonar::Read);

    RaspiSonar::constructor().Reset(Nan::GetFunction(tpl).ToLocalChecked());
    Nan::Set(target, Nan::New("sonarFactory").ToLocalChecked(),
      Nan::GetFunction(tpl).ToLocalChecked());
}

NODE_MODULE(raspPingRead, InitAll);