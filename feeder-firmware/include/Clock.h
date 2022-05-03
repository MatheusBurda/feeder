#pragma once
#include <chrono>
#include <Arduino.h>
#include "Connection.h"
using namespace std::chrono;

class Clock {
private:
    static Clock* instance;
    Clock();
    steady_clock::time_point last;

    bool loaded;

    int hours;
    int minutes;
    int seconds;

public:
    static Clock* getInstance();
    ~Clock();

    int getHour() const;
    int getMinutes() const;
    int getSeconds() const;
    void update(Connection* connection);

    String toString() const;    
};

Clock* Clock::instance = nullptr;
