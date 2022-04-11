#pragma once

#include "Ports.h"
#include <Servo.h>
#include <user_interface.h>

class EngineController {
private:
    int rotationPosition;
    int activation_dt;
    bool isRunning;
    os_timer_t timer;
    Servo engine;

public:
    EngineController();
    ~EngineController();

    void init();

    void activateEngineClockwise();

    void activateEngineCounterClockwise();

    bool isActivationTime(int hr, int min);
};
