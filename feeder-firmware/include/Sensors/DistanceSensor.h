#pragma once

#include <Esp.h>
#include <HCSR04.h>
#include "Ports.h"

class DistanceSensor {
private:
    UltraSonicDistanceSensor distanceSensor;
    float distance;

public:
    DistanceSensor();
    ~DistanceSensor();

    void read();
    float getDistance() const;
};

