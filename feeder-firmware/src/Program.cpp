#include "Program.h"
#include "ESP8266WiFi.h"


void Program::init() {
  lastNotificationHour = 0;
  loadedSettings = false;
  clock = Clock::getInstance();
  engine.init();
  connection.initWiFi("Burda", "qwertyuiop");
}

void Program::feed() {
    int doses = firmwareSettings.getDoses();

    for (int i = 0; i < doses; i++) {
        engine.open();
        delay(500);
        engine.close();
    }
}


void Program::execute() {
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
    std::vector<ActivationTime> times = firmwareSettings.getActivationTimes();

    for (ActivationTime time : times)
    {
      if (time.getHour() == clock->getHour() && time.getMinutes() == clock->getMinutes())
      {
        feed();
      }
    }

    if (sensor.getDistance() >= firmwareSettings.getMinHeight() &&
      (lastNotificationHour < clock->getHour() ||
      (lastNotificationHour == 23 && clock->getHour() == 0)))
    {
      lastNotificationHour = clock->getHour();
      connection.notifyRecharge();
    }
  }
}
