#pragma once

#include "Ports.h"
#include <Servo.h>
#include <user_interface.h>

class EngineController {
private:
    int rotationPosition;
    int activation_dt;
    bool isRunning;
    Servo engine;

public:
    EngineController();
    ~EngineController();

    void init();

    void open();
    void close();
};
