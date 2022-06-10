#include "Serializables/CurrentTime.h"
using namespace Serializables;

CurrentTime::CurrentTime() :
hours(0),
minutes(0),
seconds(0)
{
  
}

CurrentTime::~CurrentTime()
{

}

int CurrentTime::getHours() const
{
  return hours;
}

int CurrentTime::getMinutes() const
{
  return minutes;
}

int CurrentTime::getSeconds() const
{
  return seconds;
}

String CurrentTime::toJson()
{
  return "";
}

void CurrentTime::fromJson(String objectStr)
{
  StaticJsonDocument<96> doc;
  deserializeJson(doc, objectStr);

  JsonObject object = doc.as<JsonObject>();
  
  hours = object["hours"].as<int>();
  minutes = object["minutes"].as<int>();
  seconds = object["seconds"].as<int>();
}
