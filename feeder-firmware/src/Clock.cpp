#include "Clock.h"

Clock::Clock() {
    hours = 0;
    minutes = 0;
    seconds = 0;

    last = steady_clock::now();
}

Clock::~Clock() {
    delete instance;
}

Clock* Clock::getInstance() {
    if (instance == nullptr)
        instance = new Clock();

    return instance;
}

int Clock::getHour() const
{
    return hours;
}

int Clock::getMinutes() const
{
    return minutes;
}

int Clock::getSeconds() const
{
    return seconds;
}

void Clock::update()
{
    steady_clock::time_point now = steady_clock::now();

    seconds += duration_cast<std::chrono::seconds>(now - last).count();

    last = now;

    if (seconds >= 60)
    {
        minutes++;
        seconds = 0;
    }

    if (minutes >= 60)
    {
        hours++;
        minutes = 0;
    }

    if (hours >= 24)
    {
        hours = 0;
    }
}

String Clock::toString() const
{
    return String(hours) + ":" + String(minutes) + ":" + String(seconds);
}
