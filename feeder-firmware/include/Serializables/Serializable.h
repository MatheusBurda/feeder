#pragma once

#include <Esp.h>

class Serializable
{
public:
  virtual String toJson() = 0;
  virtual void FromJson(String objectStr) = 0;
};
