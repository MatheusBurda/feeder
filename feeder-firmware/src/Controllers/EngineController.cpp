#include "Controllers/EngineController.h"
#include <ESP8266WiFi.h>

EngineController::EngineController() {
    this->rotationPosition = 0;
}

EngineController::~EngineController() { }

void EngineController::init() {
    engine.attach(ENGINE_PIN);
    engine.write(0);
}

void EngineController::activateEngineClockwise() {

    for (rotationPosition = 0; rotationPosition < 180; rotationPosition++) {
        engine.write(rotationPosition);
        delay(10);
        Serial.println(rotationPosition);
    }

}

void EngineController::activateEngineCounterClockwise() {

    for (rotationPosition = 180; rotationPosition >= 0; rotationPosition--) {
        engine.write(rotationPosition);
        delay(10);
        Serial.println(rotationPosition);
    }
    
}

bool EngineController::isActivationTime(int hr, int min) {
    return true;
}