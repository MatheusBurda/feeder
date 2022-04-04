#include <ESP8266WiFi.h>

#include "EngineController.h"

EngineController::EngineController(int activation_dt) :
activation_dt(activation_dt),
isRunning(false) {
    os_timer_setfn(&timer, (os_timer_func_t*)activateEngine, NULL);
    os_timer_arm(&timer, activation_dt, true);

    pinMode(ENGINE_PIN, OUTPUT);
    digitalWrite(ENGINE_PIN, LOW);
}

EngineController::~EngineController() {
}

void EngineController::activateEngine(void* param) // subroutine param
{
    if (!isRunning)
        digitalWrite(ENGINE_PIN, HIGH);
}

void EngineController::deactivateEngine(void* param) // subroutine param
{
    if (isRunning)
        digitalWrite(ENGINE_PIN, LOW);
}

bool EngineController::isActivationTime() {
}