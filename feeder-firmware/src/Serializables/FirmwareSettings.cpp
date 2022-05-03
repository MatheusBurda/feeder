#include "Serializables/FirmwareSettings.h"
using namespace Serializables;

#include <ArduinoJson.h>

FirmwareSettings::FirmwareSettings() :
id(""),
minHeight(-1),
doses(-1),
activationTimes()
{

}
FirmwareSettings::~FirmwareSettings()
{

}

String FirmwareSettings::toJson()
{
  StaticJsonDocument<1024> doc; // size recommended to max 7 days of array

  doc["id"] = id;
  doc["minHeight"] = minHeight;
  doc["doses"] = doses;
  
  JsonArray jsonActivationTimes = doc.createNestedArray("activationTimes");

  for (auto it = activationTimes.begin(); it != activationTimes.end(); it++)
  {
    jsonActivationTimes.add(it->getJsonObject());
  }

  String output;
  serializeJson(doc, output);
}
void FirmwareSettings::FromJson(String objectStr)
{
  StaticJsonDocument<1024> doc;
  deserializeJson(doc, objectStr);

  JsonObject object = doc.as<JsonObject>();
  
  id = object["id"].as<String>();
  minHeight = object["minHeight"];
  doses = object["doses"];

  JsonArray jsonActivationTimes = object["activationTimes"].to<JsonArray>();
  
  for(JsonVariant time : jsonActivationTimes) {
    ActivationTime activationTime;

    String json;
    serializeJson(time, json);

    activationTime.FromJson(json);

    activationTimes.push_back(activationTime);
  }
}

String FirmwareSettings::getId() const
{
  return id;
}

float FirmwareSettings::getMinHeight() const
{
  return minHeight;
}

int FirmwareSettings::getDoses() const
{
  return doses;
}

vector<ActivationTime> FirmwareSettings::getActivationTimes() const
{
  return activationTimes;
}
