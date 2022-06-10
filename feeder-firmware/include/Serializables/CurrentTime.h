#pragma once
#include "./Serializable.h"

namespace Serializables
{
  class CurrentTime : public Serializable
  {
  private:
    int hours;
    int minutes;
    int seconds;

  public:
    CurrentTime();
    ~CurrentTime();

    int getHours() const;
    int getMinutes() const;
    int getSeconds() const;

    String toJson() override;
    void fromJson(String objectStr) override;
  };
}
