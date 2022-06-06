#include "Ajax/AjaxClient.h"
#include "Ajax/ApiUtils.h"

AjaxClient::AjaxClient(String baseUrl, WiFiClient* wifiClient)
{
  this->baseUrl = baseUrl;
  this->wifiClient = wifiClient;

  Serial.println(baseUrl);

  if (!this->baseUrl.endsWith("/"))
    this->baseUrl += "/";

  client.setTimeout(30000);

  String jwt = String(USER_JWT);
  String headerName = String("Authorization");

  client.addHeader(headerName, jwt);
}

String AjaxClient::makeRequest(
  HttpMethod methodName, String path, Serializable* body)
{

  if (path.startsWith("/"))
    path.remove(0);

  String url = baseUrl + path;

  client.begin(*wifiClient, url);

  int httpCode = 0;
  String response = "",
    bodyStr = body != nullptr ? body->toJson() : "";

  switch (methodName)
  {
  case (HttpMethod::GET):
    httpCode = client.GET();
    break;
  
  case (HttpMethod::POST):
    httpCode = client.POST(bodyStr);
    break;

  case (HttpMethod::PATCH):
    httpCode = client.PATCH(bodyStr);
    break;

  case (HttpMethod::PUT):
    httpCode = client.PUT(bodyStr);
    break;
  }

  if (httpCode > 0) {
    response = client.getString();
    Serial.println(response);
  }
  else {
    Serial.println("ERROR: " + client.errorToString(httpCode));
    Serial.println();
  }

  client.end();
  return response;
}

String AjaxClient::makeGet(String path)
{
  return makeRequest(HttpMethod::GET, path, nullptr);
}

void AjaxClient::makeGet(String path, Serializable* response)
{
  String objString = makeGet(path);
  
  if (response != nullptr && objString != "")
    response->FromJson(objString);
}

String AjaxClient::makePost(String path, Serializable* body)
{
  return makeRequest(HttpMethod::POST, path, body);
}

void AjaxClient::makePost(String path, Serializable* response, Serializable* body)
{
  String objString = makePost(path, body);
  
  if (response != nullptr && objString != "")
    response->FromJson(objString);
}

String AjaxClient::makePut(String path, Serializable* body)
{
  return makeRequest(HttpMethod::PUT, path, body);
}

void AjaxClient::makePut(String path, Serializable* response, Serializable* body)
{
  String objString = makePut(path, body);
  
  if (response != nullptr && objString != "")
    response->FromJson(objString);
}

String AjaxClient::makePatch(String path, Serializable* body)
{
  return makeRequest(HttpMethod::PATCH, path, body);
}

void AjaxClient::makePatch(String path, Serializable* response, Serializable* body)
{
  String objString = makePatch(path, body);
  
  if (response != nullptr && objString != "")
    response->FromJson(objString);
}
