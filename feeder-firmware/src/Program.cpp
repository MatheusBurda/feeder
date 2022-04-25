#include "Program.h"
#include "ESP8266WiFi.h"

void Program::init()
{
  loadedSettings = false;
  clock = Clock::getInstance();

  engine.init();

  connection.initWiFi("teupai", "pedropastel");
}

void Program::feed()
{
  int doses = firmwareSettings.getDoses();

  // TODO: Engine must work to feed based on doses
}

void Program::execute()
{
  if (connection.isConnectedToWifi())
  {
    if (!loadedSettings)
    {
      connection.loadFirmwareSettings(&firmwareSettings);
      loadedSettings = true;
    }
  }

  if (loadedSettings)
  {
    vector<ActivationTime> times = firmwareSettings.getActivationTimes();

    for (ActivationTime time : times)
    {
      if (time.getHour() >= clock->getHour())
      {
        feed();
      }
    }

    if (sensor.getDistance() >= firmwareSettings.getMinHeight())
    {
      feed();
    }
  }
}