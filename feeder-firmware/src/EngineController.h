#include <user_interface.h> // needs for the timers


#define D0    16
#define D1    5
#define D2    4
#define D3    0
#define D4    2
#define D5    14
#define D6    12
#define D7    13
#define D8    15

#define ENGINE_PIN    D0

class EngineController
{
private:
    int activation_dt;
    bool isRunning;
    os_timer_t timer;

    // TODO: Clock to get current time
public:
    EngineController(int activation_dt);
    ~EngineController();

    void activateEngine(void *param);
    void deactivateEngine(void *param);

    bool isActivationTime(int hr, int min);
};
