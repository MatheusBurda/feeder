#pragma once
#include <chrono>
#include "Connection.h"

class Clock {
private:
    static Clock* instance;
    Clock();
    std::chrono::steady_clock::time_point last;

    bool loaded;

    int hours;
    int minutes;
    int seconds;
    int microsseconds;

public:
    static Clock* getInstance();
    ~Clock();

    int getHour() const;
    int getMinutes() const;
    int getSeconds() const;
    void update(Connection* connection);

    String toString() const;    
};
