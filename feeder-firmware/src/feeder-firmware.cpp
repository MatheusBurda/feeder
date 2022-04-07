#include <Esp.h>

extern "C++" {
#include "Connection.h"
#include "DistanceSensor.h"
}

/* Connection api; */
DistanceSensor sensor; 

void setup() {
    Serial.begin(9600);
    // api.initWiFi("teupai", "pedropastel");
}

void loop() {

    /* if (api.isConnectedToWifi()) {
        api.makeRequest("");
    } */
    Serial.println("PASTEL");
    sensor.read();

    delay(3000);
}