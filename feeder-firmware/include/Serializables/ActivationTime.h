#pragma once
#include "./Serializable.h"
#include <vector>

using namespace std;

namespace Serializables
{
  class ActivationTime : public Serializable
  {
  private:
    String id;
    String weekDay;
    int hour;
    int minutes;

  public:
    ActivationTime();
    ~ActivationTime();

    String getId() const;
    String getWeekDay() const;
    int getHour() const;
    int getMinutes() const;

    String toJson() override;
    void FromJson(String objectStr) override;

    JsonObject getJsonObject();
  };
}
