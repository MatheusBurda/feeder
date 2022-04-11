#include <Esp.h>

extern "C++" {
#include "Connection.h"
#include "Sensors/DistanceSensor.h"
#include "Controllers/EngineController.h"
}

//Connection api;
//DistanceSensor sensor; 
EngineController engine;

void setup() {
    Serial.begin(9600);
    //api.initWiFi("virusgratis2G", "mEWMJowj7A");
    engine.init();
}

void loop() {

   /*  if (api.isConnectedToWifi()) {
        api.makeRequest("");
    } */
    //sensor.read();

    engine.activateEngineClockwise();

    

    delay(15);
}