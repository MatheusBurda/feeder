#include "Serializables/BoolValue.h"

using namespace Serializables;

BoolValue::BoolValue(bool value) : value(value)
{
}

void BoolValue::fromJson(String json)
{

}

String BoolValue::toJson()
{
  StaticJsonDocument<128> doc; // size recommended to max 7 days of array

  doc["value"] = value;
  
  String output;
  serializeJson(doc, output);

  return output;
}