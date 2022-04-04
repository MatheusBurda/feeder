#include <Esp.h>

extern "C++" {
#include "Connection.h"
}

Connection api;

void setup() {
    Serial.begin(115200);
    api.initWiFi("teupai", "pedropastel");
}


void loop() {
    
    if (api.isConnectedToWifi()) {
        api.makeRequest("");
    }
    delay(3000);
    
}