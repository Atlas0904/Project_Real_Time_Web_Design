﻿// define a factory for chart demo
web_app
.service('app_config', function () {
    this.mqtt_broker_url = 'localhost';  //mqtt broker uri (make sure this mqtt broker enable WebSocket support)
    this.mqtt_broker_port = 9001; //mqtt broker WebSocket connection port

    this.http_host = 'localhost'; //this setting is for iot_smartphone_collector QR code
});