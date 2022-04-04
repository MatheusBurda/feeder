
//#include "Connection.h"

#define LED 2

void initSerial();

// *******************************************************************************
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#define BASE_URL "http://jsonplaceholder.typicode.com/todos/1"

class Connection {
private:
  WiFiClient client;
  HTTPClient http;
  
public:
  Connection(){
      initWiFi("MFS B wifi", "flasil201182");
  }

  String makeRequest(String path) {
      Serial.println(String("Making request... ") + BASE_URL + path);
    
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
// *******************************************************************************


Connection api;


void setup() {
  pinMode (LED, OUTPUT);
  digitalWrite(LED, 0);
  initSerial();
}

void loop() {
 
//  if (api.isConnectedToWifi()) { //Check WiFi connection status
//    api.makeRequest("");
//    digitalWrite(LED, 1);
//  }
//  else{
//    digitalWrite(LED, 0);
//  }

  Serial.println("huehue");
  delay(30000);
}

void initSerial() {
  Serial.begin(115200);
  Serial.setDebugOutput(true);
}
