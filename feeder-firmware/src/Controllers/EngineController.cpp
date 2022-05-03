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

void EngineController::open() {
    engine.write(180);
}

void EngineController::close() {
    engine.write(0);

}
