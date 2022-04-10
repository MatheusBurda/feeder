#include <time.h>

class Clock {
private:
    static Clock* instance;
    time_t currentTime;
    void makeRequest();
    Clock();

public:
    static Clock* getInstance();
    ~Clock();

    int getHour();
    int getMinutes();
    int getSeconds();
    void update();
};

Clock* Clock::instance = nullptr;
