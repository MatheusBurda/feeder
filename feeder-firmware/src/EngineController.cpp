#include <ESP8266WiFi.h>
#include "EngineController.h"

EngineController::EngineController(int activation_dt) :
activation_dt(activation_dt),
isRunning(false) {
    /* os_timer_setfn(&timer, (os_timer_func_t*)activateEngine, NULL);
    os_timer_arm(&timer, activation_dt, true); */

    pinMode(ENGINE_PIN_CLOCKWISE, OUTPUT);
    digitalWrite(ENGINE_PIN_CLOCKWISE, LOW);
}

EngineController::~EngineController() {
}

void EngineController::activateEngine(void* param) {
    if (isRunning)
        digitalWrite(ENGINE_PIN_CLOCKWISE, HIGH);

    if (digitalRead(D0)) {
        digitalWrite(D0, LOW);
        digitalWrite(D1, HIGH);
    } //
    else {
        digitalWrite(D1, LOW);
        digitalWrite(D0, HIGH);
    }
}

void EngineController::deactivateEngine(void* param) {
    if (!isRunning)
        digitalWrite(ENGINE_PIN_CLOCKWISE, LOW);
}

bool EngineController::isActivationTime(int hr, int min) {
    return true;
}