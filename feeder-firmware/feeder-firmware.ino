// ############# LIBRARIES ############### //

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

// ############# VARIABLES ############### //

const char* SSID = ""; 
const char* PASSWORD = ""; 

String BASE_URL = "http://www.google.com.br/";

// ############# PROTOTYPES ############### //

void initSerial();
void initWiFi();
void httpRequest(String path);

// ############### OBJECTS ################# //

WiFiClient client;
HTTPClient http;

// ############## SETUP ################# //

void setup() {
  pinMode (10, OUTPUT);
  initSerial();
  initWiFi();
}

// ############### LOOP ################# //

void loop() {
 
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status

    makeRequest("");
 
  }
 
  delay(30000);
}

// ############# HTTP REQUEST ################ //

String makeRequest(String path)
{
    Serial.println("Making request... " + BASE_URL + path);
  
    http.begin(client, BASE_URL + path);
    int httpCode = http.GET();

    String payload = "";

    if (httpCode > 0) { 
 
      payload = http.getString();
      Serial.println(payload);
      http.end();
      
    }
    else{
      Serial.println("ERROR: " + http.errorToString(httpCode));
      Serial.println();
      //WiFi.printDiag(Serial);
    }
    
    http.end();   
    return payload;
}

// ############### CONFIGS ################## //

void initSerial() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
}

void initWiFi() {
  delay(10);
  Serial.println("Connecting on: " + String(SSID));

  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(100);
    Serial.print(".");
  }

  WiFi.setAutoReconnect(true);
  WiFi.persistent(true);

  http.setTimeout(30000);

  Serial.println();
  Serial.println("Connection established to " + String(SSID));  
  Serial.print("IP address:\t");
  Serial.println(WiFi.localIP());
}
