#pragma once

#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <Esp.h>

#define BASE_URL "http://jsonplaceholder.typicode.com/todos/1"

class Connection {
private:
    WiFiClient client;
    HTTPClient http;

public:
    Connection() { }
	~Connection() { }

    String makeRequest(String path) {
        Serial.println(String("Making request... ") + BASE_URL + path);

        http.begin(client, BASE_URL + path);
        int httpCode = http.GET();

        String payload = "";

        if (httpCode > 0) {

            payload = http.getString();
            Serial.println(payload);
            http.end();

        } else {
            Serial.println("ERROR: " + http.errorToString(httpCode));
            Serial.println();
        }

        http.end();
        return payload;
    }

    void initWiFi(String ssid, String password) {
        delay(10);
        Serial.println("Connecting on: " + String(ssid));

        WiFi.begin(ssid, password);
        while (WiFi.status() != WL_CONNECTED) {
            delay(100);
            Serial.print(".");
        }

        WiFi.setAutoReconnect(true);
        WiFi.persistent(true);

        http.setTimeout(30000);

        Serial.println();
        Serial.println("Connection established to " + String(ssid));
        Serial.print("IP address:\t");
        Serial.println(WiFi.localIP());
    }

    bool isConnectedToWifi() {
        return WiFi.status() == WL_CONNECTED;
    }
};