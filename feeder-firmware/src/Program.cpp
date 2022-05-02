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

  for (int i = 0; i < doses; i++)
  {
    delay(500);
    engine.open();
    delay(500);
    engine.close();
  }
}

void Program::execute()
{
  clock->update(&connection);

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