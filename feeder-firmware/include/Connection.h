#pragma once

#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <Esp.h>
#include "Ajax/AjaxClient.h"
#include "Serializables/FirmwareSettings.h"
#include "Ajax/ApiUtils.h"
using namespace Serializables;

#define BASE_URL "http://jsonplaceholder.typicode.com/todos/1"

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
};
