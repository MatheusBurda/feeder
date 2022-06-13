#include "Connection.h"
#include "Serializables/BoolValue.h"
using namespace Serializables;

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
    WiFi.setAutoReconnect(true);
    WiFi.persistent(true);

    while (WiFi.status() != WL_CONNECTED) {
        delay(100);
        Serial.print(".");
    }

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
    Serial.println(" Conectando carregando settings");
    String response = api.makeGet(String(FIRMWARE_SETTINGS_GET) + FIRMWARE_ID);
    output->fromJson(response);
    Serial.println("Carregado!");

}

void Connection::getCurrentTime(CurrentTime* output)
{
    String response = api.makeGet(CURRENT_TIME_GET);
    output->fromJson(response);
}

void Connection::notifyRecharge()
{
    BoolValue value = BoolValue(true);
    api.makePatch(String(NOTIFY_RECHARGE_PATCH) + FIRMWARE_ID, &value);
    Serial.println("> Notified Recharge!");
}
