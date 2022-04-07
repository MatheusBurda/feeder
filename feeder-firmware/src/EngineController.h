#include <user_interface.h> 
#include "Ports.h"

class EngineController {
private:
    int activation_dt;
    bool isRunning;
    os_timer_t timer;
    bool rotateClockwise;

    // TODO: Clock to get current time
public:
    EngineController(int activation_dt);
    ~EngineController();

    void activateEngine(void* param);
    void deactivateEngine(void* param);

    bool isActivationTime(int hr, int min);
};
