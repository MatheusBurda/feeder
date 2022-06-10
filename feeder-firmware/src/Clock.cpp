#include "Clock.h"

Clock* Clock::instance = nullptr;

Clock::Clock() {
    loaded = false;

    hours = 0;
    minutes = 0;
    seconds = (int64_t)0;

    last = std::chrono::steady_clock::now();
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

void Clock::update(Connection* connection)
{
    if (!loaded) {
        CurrentTime time;
        connection->getCurrentTime(&time);
        hours = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        loaded = true;
        last = std::chrono::steady_clock::now();
    }
    delay(1000);
    std::chrono::steady_clock::time_point now = std::chrono::steady_clock::now();

    auto microsseconds = std::chrono::duration_cast<std::chrono::microseconds>(now - last).count();
    seconds += microsseconds / ((int64_t)1000000);
    last = now;

    if (seconds >= 60)
    {
        minutes++;
        seconds = 0;
        microsseconds = 0;
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
