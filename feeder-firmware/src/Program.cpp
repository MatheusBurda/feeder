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
    }
    engine.open();
    delay(500);
    engine.close();
}

void Program::execute() {

    if (connection.isConnectedToWifi()) {
        Serial.println("Conectado");

        if (!loadedSettings) {
            connection.loadFirmwareSettings(&firmwareSettings);
            loadedSettings = true;
        }
    } 
    else {
        connection.initWiFi("", "");
    }

    clock->update(&connection);
    Serial.println(clock->toString());
    Serial.println(loadedSettings);

    if (loadedSettings) {
        std::vector<ActivationTime> times = firmwareSettings.getActivationTimes();

        for (ActivationTime time : times) {
            Serial.println("Hour:");
            Serial.println(time.getHour());
            Serial.println("Minutes:");
            Serial.println(time.getMinutes());
            Serial.println("==================");
            if (time.getHour() == clock->getHour() && time.getMinutes() == clock->getMinutes()) {
                feed();
                delay(6000);
            }
        }
        if (15 == clock->getHour() && 15 == clock->getMinutes()) {
            feed();
            delay(6000);
        }

        if (sensor.getDistance() >= firmwareSettings.getMinHeight() &&
          (lastNotificationHour < clock->getHour() ||
          (lastNotificationHour == 23 && clock->getHour() == 0)))
        {
          lastNotificationHour = clock->getHour();
          connection.notifyRecharge();
        }
    }

    if (0 == clock->getHour() && 1 == clock->getMinutes()) {
        feed();
        delay(60000);
    }

    delay(1000);
}
