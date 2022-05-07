#pragma once
#include "Serializable.h"
#include "ActivationTime.h"
#include <vector>

namespace Serializables
{
  class FirmwareSettings : public Serializable
  {
  private:
    String id;
    float minHeight;
    int doses;
    std::vector<ActivationTime> activationTimes;

  public:
    FirmwareSettings();
    ~FirmwareSettings();

    String toJson() override;
    void FromJson(String objectStr) override;

    String getId() const;
    float getMinHeight() const;
    int getDoses() const;
    std::vector<ActivationTime> getActivationTimes() const;
  };
}
