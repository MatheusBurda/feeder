#pragma once

#include "./Serializable.h"

namespace Serializables
{
    class BoolValue : public Serializable
    {
    private:
        bool value;
    public:
        BoolValue(bool);

        String toJson();
        void fromJson(String objectStr);
    };
}