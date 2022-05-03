#pragma once
#include "./Serializable.h"

using namespace std;

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
    void FromJson(String objectStr) override;
  };
}
