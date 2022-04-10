#pragma once

#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <Esp.h>
#include "Serializables/Serializable.h"

enum HttpMethod
{
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
};

class AjaxClient
{
private:
  HTTPClient client;
  WiFiClient* wifiClient;
  String baseUrl;

  String makeRequest(HttpMethod methodName, String path,
    Serializable* body);

public:
  AjaxClient(String baseUrl, WiFiClient* wifiClient);
  ~AjaxClient() { };

  String makeGet(String path);
  void makeGet(String path, Serializable* response);

  String makePost(String path, Serializable* body);
  void makePost(String path, Serializable* response, Serializable* body);
  
  String makePut(String path, Serializable* body);
  void makePut(String path, Serializable* response, Serializable* body);
  
  String makePatch(String path, Serializable* body);
  void makePatch(String path, Serializable* response, Serializable* body);
};
