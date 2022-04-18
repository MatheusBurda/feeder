#include "Serializables/ActivationTime.h"
using namespace Serializables;

#include <ArduinoJson.h>

ActivationTime::ActivationTime() :
id(""),
weekDay(""),
hour(0),
minutes(0)
{

}

ActivationTime::~ActivationTime()
{

}

void ActivationTime::FromJson(String json)
{
  StaticJsonDocument<128> doc;
  deserializeJson(doc, json);

  JsonObject object = doc.as<JsonObject>();
  
  id = object["id"].as<String>();
  weekDay = object["weekDay"].as<String>();
  hour = object["hour"];
  minutes = object["minutes"];
}

String ActivationTime::toJson()
{
  JsonObject object = getJsonObject();
  
  String output;
  serializeJson(object, output);

  return output;
}


JsonObject ActivationTime::getJsonObject()
{
  StaticJsonDocument<128> doc;

  doc["id"] = id;
  doc["weekDay"] = weekDay;
  doc["hour"] = hour;
  doc["minutes"] = minutes;

  return doc.createNestedObject();
}

String ActivationTime::getId() const
{
  return id;
}

String ActivationTime::getWeekDay() const
{
  return weekDay;
}

int ActivationTime::getHour() const
{
  return hour;
}

int ActivationTime::getMinutes() const
{
  return minutes;
}
