#pragma once
#include <chrono>
#include <Arduino.h>
using namespace std::chrono;

class Clock {
private:
    static Clock* instance;
    Clock();
    steady_clock::time_point last;

    int hours;
    int minutes;
    int seconds;

public:
    static Clock* getInstance();
    ~Clock();

    int getHour() const;
    int getMinutes() const;
    int getSeconds() const;
    void update();

    String toString() const;    
};

Clock* Clock::instance = nullptr;
