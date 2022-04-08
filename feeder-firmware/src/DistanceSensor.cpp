#include "DistanceSensor.h"

DistanceSensor::DistanceSensor() :
distanceSensor(DISTANCE_SENSOR_TRIGGER, DISTANCE_SENSOR_ECHO) { }

DistanceSensor::~DistanceSensor() { }

void DistanceSensor::read() {
    distance = distanceSensor.measureDistanceCm();
    Serial.println("Distance: " + String(distance) + "cm");
}

float DistanceSensor::getDistance() const {
    return distance;
}
