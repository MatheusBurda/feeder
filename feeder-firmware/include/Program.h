#pragma once

#include "Connection.h"
#include "Ajax/AjaxClient.h"
#include "Ajax/ApiUtils.h"
#include "Sensors/DistanceSensor.h"
#include "Serializables/FirmwareSettings.h"
#include "Controllers/EngineController.h"
#include "Clock.h"
using namespace Serializables;

class Program
{
private:
  Connection connection;
  DistanceSensor sensor;
  FirmwareSettings firmwareSettings;
  EngineController engine;
  Clock* clock;

  void feed();
  
  bool loadedSettings;
  int lastNotificationHour;

public:
  Program() { };
  ~Program() { };

  void init();
  void execute();
};
