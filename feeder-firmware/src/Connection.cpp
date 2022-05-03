#include "Connection.h"

Connection::Connection() :
api(BASE_URL, &wifi)
{
}

String Connection::makeRequest(String path)
{
    return api.makeGet(path);
}


void Connection::initWiFi(String ssid, String password) {
    delay(10);
    Serial.println("Connecting on: " + String(ssid));
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(100);
        Serial.print(".");
    }

    WiFi.setAutoReconnect(true);
    WiFi.persistent(true);


    Serial.println();
    Serial.println("Connection established to " + String(ssid));
    Serial.print("IP address:\t");
    Serial.println(WiFi.localIP());
}

bool Connection::isConnectedToWifi() {
    return WiFi.status() == WL_CONNECTED;
}

void Connection::loadFirmwareSettings(FirmwareSettings* output)
{
    String response = api.makeGet(FIRMWARE_SETTINGS_GET);
    output->FromJson(response);
}

void Connection::getCurrentTime(CurrentTime* output)
{
    String response = api.makeGet(CURRENT_TIME_GET);
    output->FromJson(response);
}
