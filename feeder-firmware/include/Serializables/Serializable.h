#pragma once
#include <ArduinoJson.h>

#include <Esp.h>

class Serializable
{
public:
  virtual String toJson() = 0;
  virtual void fromJson(String objectStr) = 0;
};
