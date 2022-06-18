#include "Program.h"
#include "ESP8266WiFi.h"

void Program::init() {
    lastNotificationHour = 0;
    loadedSettings = false;
    clock = Clock::getInstance();
    engine.init();
    connection.initWiFi("", "");
}

void Program::feed() {
    int doses = firmwareSettings.getDoses();

    for (int i = 0; i < doses; i++) {
        engine.open();
        delay(500);
        engine.close();
        delay(500);
    }

    sensor.read();

    if (sensor.getDistance() >= firmwareSettings.getMinHeight())
    {
        connection.notifyRecharge();
    }
}

void Program::execute() {

    if (connection.isConnectedToWifi()) {

        if (!loadedSettings) {
            connection.loadFirmwareSettings(&firmwareSettings);
            Serial.println("Conectado");
            loadedSettings = true;
        }
    } 
    else {
        connection.initWiFi("", "");
    }

    clock->update(&connection);
    Serial.println(clock->toString());

    if (loadedSettings) {
        std::vector<ActivationTime> times = firmwareSettings.getActivationTimes();

        for (ActivationTime time : times) {
            if (time.getHour() == clock->getHour() && time.getMinutes() == clock->getMinutes()) {
                Serial.println("It's time to feed!!!");
                feed();
                delay(60000);
            }
        }
    }
}
