#pragma once
#include "Serializable.h"
#include "ActivationTime.h"
#include <vector>

using namespace std;

namespace Serializables
{
  class FirmwareSettings : public Serializable
  {
  private:
    String id;
    float minHeight;
    int doses;
    vector<ActivationTime> activationTimes;

  public:
    FirmwareSettings();
    ~FirmwareSettings();

    String toJson() override;
    void FromJson(String objectStr) override;

    String getId() const;
    float getMinHeight() const;
    int getDoses() const;
    vector<ActivationTime> getActivationTimes() const;
  };
}
