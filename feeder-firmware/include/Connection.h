#pragma once

#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <Esp.h>
#include "Ajax/AjaxClient.h"
#include "Serializables/FirmwareSettings.h"
#include "Serializables/CurrentTime.h"
#include "Ajax/ApiUtils.h"
using namespace Serializables;

class Connection {
private:
    AjaxClient api;
    WiFiClient wifi;

public:
    Connection();
    ~Connection() { }

    String makeRequest(String path);

    void initWiFi(String ssid, String password);

    bool isConnectedToWifi();

    void loadFirmwareSettings(FirmwareSettings* output);

    void getCurrentTime(CurrentTime* output);

    void notifyRecharge();
};
