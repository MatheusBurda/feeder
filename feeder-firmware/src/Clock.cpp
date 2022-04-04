#include "Clock.h"

Clock::Clock() {
}

Clock::~Clock() {
    delete instance;
}

Clock* Clock::getInstance() {
    if (instance == nullptr)
        instance = new Clock();

    return instance;
}
