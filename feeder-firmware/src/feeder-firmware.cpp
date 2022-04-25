#include <Esp.h>

extern "C++" {
#include "Program.h"
}

Program program;

void setup() {
    Serial.begin(9600);
    program.init();
}

void loop() {
    program.execute();
    delay(15);
}