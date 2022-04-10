#include <Esp.h>

extern "C++" {
#include "Connection.h"
#include "Sensors/DistanceSensor.h"
}

Connection api;
//DistanceSensor sensor; 

void setup() {
    Serial.begin(9600);
    api.initWiFi("virusgratis2G", "mEWMJowj7A");
}

void loop() {

    if (api.isConnectedToWifi()) {
        api.makeRequest("");
    }
    //sensor.read();

    delay(2000);
}