/**
 * Micro Controller and Internet of Things Lab (GR24A3095)
 * Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)
 * Interactive Application & Simulation Portal
 */

const tasksData = [
  {
    id: "task1",
    taskNumber: "Task 1",
    title: "Smart Street Light Management System",
    topic: "Light Dependent Resistor (LDR)",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/446697471894949889",
    page: 15,
    manualPage: 10,
    category: "arduino",
    image: "images/page_15.png",
    aim: "Write an ARDUINO Program for Smart street light management system using LDR and LED.",
    components: ["Arduino UNO", "LED (Pin 8)", "LDR (Photo Resistor)", "10kΩ Resistor", "Connecting Wires", "Breadboard"],
    pinout: [
      { pin: "LDR Terminal 1", connectedTo: "5V Supply" },
      { pin: "LDR Terminal 2", connectedTo: "Arduino Analog A0 + 10kΩ to GND" },
      { pin: "LED Anode (+)", connectedTo: "Arduino Digital Pin 8 (via resistor)" },
      { pin: "LED Cathode (-)", connectedTo: "GND" }
    ],
    theory: "LDR works on the principle of photo conductivity: when ambient light falls on the LDR, its internal resistance drops drastically. When light levels fall below threshold (ADC < 60), the Arduino automatically turns ON the street light LED.",
    code: `void setup() { 
  pinMode(A0, INPUT); 
  Serial.begin(9600); 
  pinMode(8, OUTPUT);
}

void loop() {
  // Serial.print("LDR=");
  int i = analogRead(A0); 
  Serial.println(i); 
  if(i > 60) {
    digitalWrite(8, 1);
  } else {
    digitalWrite(8, 0); 
  }
  delay(500);
}`
  },
  {
    id: "task2",
    taskNumber: "Task 2",
    title: "Smart Reserve Break Monitoring System",
    topic: "HC-SR04 Ultrasonic Distance Sensor",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/446698333867651073",
    page: 18,
    manualPage: 13,
    category: "arduino",
    image: "images/page_18.png",
    aim: "To Write an Arduino program for measuring distance using ultrasonic sensor (Smart reserve break monitoring system).",
    components: ["Arduino UNO", "HC-SR04 Ultrasonic Sensor", "Connecting Wires", "Breadboard"],
    pinout: [
      { pin: "Sensor VCC", connectedTo: "5V" },
      { pin: "Sensor Trig", connectedTo: "Digital Pin 11" },
      { pin: "Sensor Echo", connectedTo: "Digital Pin 12" },
      { pin: "Sensor GND", connectedTo: "GND" }
    ],
    theory: "HC-SR04 emits high frequency sound waves at 40 kHz. It measures the echo travel time and calculates distance using: Distance = (Travel Time × Speed of Sound 340m/s) / 2.",
    code: `#include <Ultrasonic.h>

Ultrasonic ultrasonic(11, 12); // Init Ultrasonic object (Trig: 11, Echo: 12)
int Distance;

void setup() { 
  Serial.begin(9600);
}

void loop() {
  Distance = ultrasonic.read(); // Get current distance in cm
  delay(100);
  Serial.print("the distance is: "); 
  Serial.println(Distance); 
  delay(1000);
}`
  },
  {
    id: "task3",
    taskNumber: "Task 3",
    title: "Smart Soil State Monitoring System",
    topic: "Soil Moisture Sensor",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/446699975541728257",
    page: 20,
    manualPage: 15,
    category: "arduino",
    image: "images/page_20.png",
    aim: "To write an Arduino program for measuring wetness of soil using soil moisture sensor.",
    components: ["Arduino UNO", "Soil Moisture Sensor Probe & Module", "Indicator LED", "Connecting Wires", "Breadboard"],
    pinout: [
      { pin: "Sensor VCC", connectedTo: "5V" },
      { pin: "Sensor GND", connectedTo: "GND" },
      { pin: "Sensor AO (Analog Out)", connectedTo: "Arduino Analog Pin A4" },
      { pin: "Indicator LED", connectedTo: "Digital Pin 13" }
    ],
    theory: "Soil moisture varies inversely with the electrical resistance between two conductive probes. The 10-bit ADC provides values from 0 to 1023. When soil is dry (ADC < 500), the warning LED is triggered.",
    code: `#include <SoftwareSerial.h>

void setup() {
  // Put your setup code here, to run once:
  pinMode(A4, INPUT); 
  pinMode(13, OUTPUT);
  Serial.begin(9600);
}

void loop() { 
  int sensorvalue = analogRead(A4); 
  Serial.println(sensorvalue); 
  if (sensorvalue < 500) {
    Serial.println("ledison"); 
    digitalWrite(13, HIGH); 
    delay(1000);
  } else {
    digitalWrite(13, LOW); 
    delay(1000);
  }
}`
  },
  {
    id: "task4",
    taskNumber: "Task 4",
    title: "Microcontroller-Activator Interface using DC Motor",
    topic: "L293D H-Bridge Motor Driver IC",
    platform: "tinkercad",
    platformName: "Tinkercad Simulation",
    link: "https://www.tinkercad.com/things/iSPGqIA0fK1-dcmotor?sharecode=Bsh991VNwWH73V-V3X2ROHGGIv-rQJQVxHQ5d3Th72s",
    page: 23,
    manualPage: 18,
    category: "arduino",
    image: "images/page_23.png",
    aim: "To write an Arduino program for rotating motor in clockwise and anticlockwise directions using L293D driver.",
    components: ["Arduino UNO", "DC Motor", "L293D Motor Driver IC", "Connecting Wires", "External Power Supply (optional 9V-12V)"],
    pinout: [
      { pin: "L293D Enable 1,2 (Pin 1)", connectedTo: "5V (Logic HIGH)" },
      { pin: "L293D Input 1 (Pin 2)", connectedTo: "Arduino Digital Pin 10" },
      { pin: "L293D Output 1 (Pin 3)", connectedTo: "DC Motor Lead 1" },
      { pin: "L293D Output 2 (Pin 6)", connectedTo: "DC Motor Lead 2" },
      { pin: "L293D Input 2 (Pin 7)", connectedTo: "Arduino Digital Pin 9" },
      { pin: "L293D GND (Pins 4, 5)", connectedTo: "Arduino GND" },
      { pin: "L293D VCC1 / VCC2 (Pins 16, 8)", connectedTo: "5V / External Motor Power" }
    ],
    theory: "L293D is a dual H-bridge motor driver. Controlling IN1 and IN2 determines rotational polarity: IN1=0, IN2=1 rotates clockwise; IN1=1, IN2=0 rotates counter-clockwise; identical logic levels stop the motor.",
    code: `void setup() { 
  pinMode(10, OUTPUT); 
  pinMode(9, OUTPUT);
}

void loop() { 
  // 1. Clockwise rotation (3 seconds)
  digitalWrite(10, LOW); 
  digitalWrite(9, HIGH); 
  delay(3000); 

  // 2. Counter-clockwise rotation (3 seconds)
  digitalWrite(9, LOW); 
  digitalWrite(10, HIGH); 
  delay(3000); 

  // 3. Stop motor (3 seconds)
  digitalWrite(9, LOW); 
  digitalWrite(10, LOW); 
  delay(3000);
}`
  },
  {
    id: "task5",
    taskNumber: "Task 5",
    title: "Moving Curtain Display using LCD",
    topic: "16x2 Liquid Crystal Display Shield",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/447250584681122817",
    page: 26,
    manualPage: 21,
    category: "arduino",
    image: "images/page_26.png",
    aim: "To write an Arduino program for moving curtain display using LCD.",
    components: ["Arduino UNO", "16×2 LCD Keypad Shield", "Connecting Wires", "Breadboard"],
    pinout: [
      { pin: "RS (Register Select)", connectedTo: "Arduino Pin 8" },
      { pin: "Enable (EN)", connectedTo: "Arduino Pin 9" },
      { pin: "Data Pin D4", connectedTo: "Arduino Pin 4" },
      { pin: "Data Pin D5", connectedTo: "Arduino Pin 5" },
      { pin: "Data Pin D6", connectedTo: "Arduino Pin 6" },
      { pin: "Data Pin D7", connectedTo: "Arduino Pin 7" }
    ],
    theory: "The LiquidCrystal library controls the Hitachi HD44780 compatible LCD. Characters are written to DDRAM and scrolled across row 0 and row 1 using setCursor and clear functions.",
    code: `#include <LiquidCrystal.h>

// RS, Enable, D4, D5, D6, D7
LiquidCrystal lcd(8, 9, 4, 5, 6, 7); 
int i = 0; 
char ch; 
char s[] = "Welcome to MCLAB!"; 

void setup() {
  lcd.begin(16, 2);
}

void loop() {
  lcd.setCursor(0, 0); 
  ch = '!';
  lcd.print(ch); 
  delay(1000); 
  lcd.clear(); 
  
  lcd.setCursor(3, 0); 
  for(i = 0; s[i] != '\\0'; i++) {
    lcd.print(s[i]); 
    if(i == 10) {
      lcd.setCursor(5, 1);
    }
  }
  delay(2000); 
  lcd.clear(); 
}`
  },
  {
    id: "task6",
    taskNumber: "Task 6",
    title: "Sound Sensor & Pitch Follower",
    topic: "Analog Audio Tone Follower",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/447147116511380481",
    page: 30,
    manualPage: 25,
    category: "arduino",
    image: "images/page_30.png",
    aim: "Write an Arduino Program for Sound Sensor / Pitch follower (generates pitch that tracks analog light/sound input).",
    components: ["Arduino Board", "8-ohm Speaker on Pin 9", "Photoresistor / Sound sensor on Pin A0", "4.7kΩ Resistor", "Connecting Wires"],
    pinout: [
      { pin: "Speaker (+)", connectedTo: "Digital Pin 9 (PWM)" },
      { pin: "Speaker (-)", connectedTo: "GND" },
      { pin: "Sensor Signal", connectedTo: "Analog Pin A0 (with 4.7kΩ to GND)" }
    ],
    theory: "The pitch follower maps analog input readings from 0-1023 to a musical frequency spectrum using exponential scale (pow(2.0, ...)) and outputs square waves with the tone() function.",
    code: `/*
  Pitch follower
  Plays a pitch that changes based on a changing analog input
  Circuit:
  * 8-ohm speaker on digital pin 9
  * photoresistor/sensor on analog A0 to 5V
  * 4.7K resistor on analog A0 to ground
*/

int sensorReading = 0;

void setup() {
  pinMode(A0, INPUT);
  Serial.begin(9600);
  pinMode(9, OUTPUT);
}

void loop() {
  // Read analog input
  sensorReading = analogRead(A0);
  Serial.println(sensorReading);
  
  // Map the sensor reading to musical frequency for speaker
  tone(9, 440 * pow(2.0, (constrain(int(map(sensorReading, 0, 1023, 36, 84)), 35, 127) - 57) / 12.0), 1000);
  delay(10); // Simulation performance delay
}`
  },
  {
    id: "task7a",
    taskNumber: "Task 7a",
    title: "Mobile App - Location Sensor Interface",
    topic: "Kodular Creator App Development",
    platform: "kodular",
    platformName: "Kodular Creator",
    link: "https://creator.kodular.io/#6164201635577856",
    page: 54,
    manualPage: 49,
    category: "mobile",
    image: "images/page_54.png",
    aim: "Write an ARDUINO / Mobile Program to Develop a Mobile App for simple interface: Location Sensor.",
    components: ["Kodular Creator Online Studio", "Kodular Companion App (Android)", "Location Sensor Component", "UI Buttons & Labels"],
    pinout: [
      { pin: "Platform", connectedTo: "Kodular Creator Cloud" },
      { pin: "Component 1", connectedTo: "Location_Sensor1 (Sensors palette)" },
      { pin: "Component 2", connectedTo: "Button1 ('Get My Address')" },
      { pin: "Component 3", connectedTo: "Label1 (Display current GPS street address)" }
    ],
    theory: "Kodular visual drag-and-drop block interface compiles an Android APK. LocationSensor fetches latitude, longitude, and reverses geocodes to a readable street address.",
    code: `// Kodular Visual Block Logic:
when Button1.Click do
  set Label1.Text to Location_Sensor1.Current Address`
  },
  {
    id: "task7b",
    taskNumber: "Task 7b",
    title: "Mobile App - Text to Speech Converter",
    topic: "Kodular Speech Synthesis",
    platform: "kodular",
    platformName: "Kodular Creator",
    link: "https://creator.kodular.io/#5207490087092224",
    page: 55,
    manualPage: 50,
    category: "mobile",
    image: "images/page_55.png",
    aim: "Write an ARDUINO / Mobile Program to Develop a Mobile App for simple interface: Text to Speech Converter.",
    components: ["Kodular Creator", "Text_To_Speech Component", "TextBox1 (Input)", "Button1 (Translate/Speak)", "Kodular Companion"],
    pinout: [
      { pin: "Platform", connectedTo: "Kodular Creator Cloud" },
      { pin: "Component 1", connectedTo: "Text_To_Speech1 (Media palette)" },
      { pin: "Component 2", connectedTo: "TextBox1 (User text entry)" },
      { pin: "Component 3", connectedTo: "Button1 ('Speak / Translate')" }
    ],
    theory: "Leverages Android's built-in TextToSpeech engine. When the button is clicked, the text from the input field is synthesized into spoken audio.",
    code: `// Kodular Visual Block Logic:
when Button1.Click do
  call Text_To_Speech1.Speak
    message: Text_Box1.Text`
  },
  {
    id: "task7c",
    taskNumber: "Task 7c",
    title: "Mobile App - Cloud & Firebase Interface (DHT11)",
    topic: "Kodular + Firebase Realtime Database Integration",
    platform: "kodular",
    platformName: "Kodular Creator",
    link: "https://creator.kodular.io/#4722664582152192",
    page: 51,
    manualPage: 46,
    category: "mobile",
    image: "images/page_51.png",
    aim: "Design a Mobile app to receive, parse and display cloud IoT sensor data (Temperature & Humidity) from Firebase in real time.",
    components: ["Kodular Creator", "Google Firebase Realtime Database", "Clock Component (1s interval)", "Firebase_Database Component", "Labels for Temp & Humidity"],
    pinout: [
      { pin: "Firebase URL", connectedTo: "https://your-project-rtdb.firebaseio.com" },
      { pin: "Firebase Secret", connectedTo: "Project Settings -> Service Accounts -> Database Secrets" },
      { pin: "Tag 1", connectedTo: "IOTLAB/Ambient_Parameters/Temperature" },
      { pin: "Tag 2", connectedTo: "IOTLAB/Ambient_Parameters/Humidity" }
    ],
    theory: "The app registers a timer tick every second to poll Firebase Realtime Database. When values arrive in GotValue, labels update dynamically to reflect live environmental conditions.",
    code: `// Kodular Visual Block Logic:
when Clock1.Timer do
  call Firebase_Database1.GetValue(tag: "IOTLAB/Ambient_Parameters/Temperature")
  call Firebase_Database1.GetValue(tag: "IOTLAB/Ambient_Parameters/Humidity")

when Firebase_Database1.GotValue(tag, value) do
  if tag contains "Temperature" then
    set Label2.Text to format as decimal number(value, places: 2)
  else if tag contains "Humidity" then
    set Label6.Text to format as decimal number(value, places: 2)`
  },
  {
    id: "task8",
    taskNumber: "Task 8",
    title: "Sensor/Actuator Interfacing using ESP32 with MPU6050 & Reed Switch",
    topic: "ESP32 GISMO VI Board + MPU 6050 & Magnetic Reed Switch",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/447151567891194881",
    page: 57,
    manualPage: 52,
    category: "esp32",
    image: "images/page_57.png",
    aim: "To Write an Arduino program for Sensor/Activator Interfacing using ESP32 (MPU 6050 Accelerometer/Gyro and Reed Switch).",
    components: ["GISMO VI Board (ESP32)", "MPU 6050 Sensor (I2C)", "Reed Switch (Magnetic)", "Firebase Realtime DB"],
    pinout: [
      { pin: "Reed Switch", connectedTo: "ESP32 GPIO 5 (INPUT_PULLUP)" },
      { pin: "MPU6050 SDA", connectedTo: "ESP32 GPIO 21" },
      { pin: "MPU6050 SCL", connectedTo: "ESP32 GPIO 22" },
      { pin: "Firebase Destination", connectedTo: "IOTLAB/Magnetic_Switch" }
    ],
    theory: "ESP32 connects via Wi-Fi station mode to Firebase Realtime Database. The magnetic reed switch uses internal pull-up on GPIO 5 and synchronizes state (Open/Closed) over the cloud.",
    code: `#define FIREBASE_HOST "soil-test-bd5b2-default-rtdb.asia-southeast1.firebasedatabase.app/" 
#define FIREBASE_AUTH "ywbGPCbl9w2G56X8URbTyZUsFDjWVUVNAkfF2IS9" 
#define WIFI_SSID "CSE MC IOT"
#define WIFI_PASSWORD "griet7788"

#include <Wire.h> 
#include <WiFi.h>
#include "FirebaseESP32.h"

FirebaseData firebaseData;
FirebaseConfig firebaseConfig;
FirebaseAuth firebaseAuth;

const int reedSwitchPin = 5; // Reed switch connected to GPIO5
bool reedSwitchState;
String tagMagSwitch = "IOTLAB/Magnetic_Switch";

void WiFiInit();
void FirebaseInit();
void FirebaseWrite();

void setup() { 
  Serial.begin(115200); 
  Wire.begin(); 
  WiFiInit(); 
  FirebaseInit();
  pinMode(reedSwitchPin, INPUT_PULLUP);
}

void loop() {
  reedSwitchState = digitalRead(reedSwitchPin); // HIGH = Open, LOW = Closed
  Serial.print("Reed Switch: "); 
  Serial.println(reedSwitchState ? "Open" : "Closed");
  FirebaseWrite(); 
  delay(1000);
}

void WiFiInit() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED && attempts < 20) {
    Serial.print(".");
    delay(1000); 
    attempts++;
  }
  if(WiFi.status() == WL_CONNECTED) { 
    Serial.println("\\nConnected!"); 
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("\\nFailed to connect. Restarting ESP..."); 
    delay(5000);
    ESP.restart();
  }
}

void FirebaseInit() {
  firebaseConfig.host = FIREBASE_HOST;
  firebaseConfig.signer.tokens.legacy_token = FIREBASE_AUTH;
  Firebase.begin(&firebaseConfig, &firebaseAuth); 
  Firebase.reconnectWiFi(true);
}

void FirebaseWrite() {
  Firebase.setBool(firebaseData, tagMagSwitch, reedSwitchState);
}`
  },
  {
    id: "task9",
    taskNumber: "Task 9",
    title: "Remote Range Indicator",
    topic: "ESP32 + HC-SR04 Ultrasonic Sensor + Firebase",
    platform: "wokwi",
    platformName: "ESP32 Cloud",
    link: "",
    page: 60,
    manualPage: 55,
    category: "esp32",
    image: "images/page_60.png",
    aim: "To implement Internet enabled remote range indicator using HC-SR04 ultrasonic sensor and ESP32 with Firebase.",
    components: ["GISMO VI Board (ESP32)", "HC-SR04 Ultrasonic Sensor", "USB Cable", "FirebaseESP32"],
    pinout: [
      { pin: "Sensor Trigger", connectedTo: "ESP32 GPIO 22" },
      { pin: "Sensor Echo", connectedTo: "ESP32 GPIO 23" },
      { pin: "Sensor VCC", connectedTo: "5V" },
      { pin: "Sensor GND", connectedTo: "GND" }
    ],
    theory: "ESP32 sends 10 microsecond pulses on Trig pin, measures the sound wave transit time via pulseIn(echoPin), calculates distance in cm, and publishes to IOTLAB/Range_Meter/Range.",
    code: `#define FIREBASE_HOST "soil-test-bd5b2-default-rtdb.asia-southeast1.firebasedatabase.app/" 
#define FIREBASE_AUTH "ywbGPCbl9w2G56X8URbTyZUsFDjWVUVNAkfF2IS9" 
#define WIFI_SSID "CSE MC IOT"
#define WIFI_PASSWORD "griet7788" 

#include <Wire.h>
#include <WiFi.h>
#include "FirebaseESP32.h"

FirebaseData firebaseData;
FirebaseConfig firebaseConfig; 
FirebaseAuth firebaseAuth;

const int trigPin = 22; // Trigger
const int echoPin = 23; // Echo
long duration;
int distance; 
String tag = "IOTLAB/Range_Meter/Range"; 

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("\\nWiFi Connected!");
  firebaseConfig.host = FIREBASE_HOST; 
  firebaseConfig.signer.tokens.legacy_token = FIREBASE_AUTH;
  Firebase.begin(&firebaseConfig, &firebaseAuth); 
  Firebase.reconnectWiFi(true);
}

void loop() {
  digitalWrite(trigPin, LOW); 
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10); 
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.034 / 2;

  Serial.print("Distance: "); 
  Serial.println(distance);
  Firebase.setInt(firebaseData, tag, distance); 
  delay(1000);
}`
  },
  {
    id: "task10",
    taskNumber: "Task 10",
    title: "Internet Enabled IR Sensor",
    topic: "ESP32 + IR Obstacle Sensor + Firebase",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/447302364359157761",
    altLink: "https://wokwi.com/projects/458349113673828353",
    page: 64,
    manualPage: 59,
    category: "esp32",
    image: "images/page_64.png",
    aim: "Implement Internet Enabled IR Sensor using ESP32 with state-change push to Firebase Realtime Database.",
    components: ["GISMOVI Board (ESP32)", "IR Obstacle Sensor Breakout", "USB Cable", "Firebase Realtime Database"],
    pinout: [
      { pin: "IR Sensor OUT", connectedTo: "ESP32 GPIO 15 (INPUT_PULLUP)" },
      { pin: "IR Sensor VCC", connectedTo: "3.3V / 5V" },
      { pin: "IR Sensor GND", connectedTo: "GND" },
      { pin: "Firebase Node", connectedTo: "/Home/Sensors/IR_Sensor" }
    ],
    theory: "IR sensor is Active LOW (0 = Obstacle Detected, 1 = Clear). To conserve bandwidth and prevent redundant writes, the ESP32 only pushes data to Firebase when a transition in state occurs.",
    code: `#include <WiFi.h>
#include <FirebaseESP32.h>

#define WIFI_SSID "Wokwi-GUEST" 
#define WIFI_PASSWORD "" 
#define FIREBASE_HOST "project url" 
#define FIREBASE_AUTH "secret key"
#define IR_SENSOR_PIN 15

FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;
int lastSensorState = -1; 

void setup() {
  Serial.begin(115200);
  pinMode(IR_SENSOR_PIN, INPUT_PULLUP);
  Serial.print("Connecting to WiFi");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("\\nConnected to WiFi!");

  config.database_url = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
  Serial.println("Firebase Initialized. Monitoring Custom IR Sensor...");
}

void loop() {
  int currentState = digitalRead(IR_SENSOR_PIN);
  if (currentState != lastSensorState) {
    String sensorStatus = "";
    if (currentState == LOW) {
      Serial.println("IR Sensor: Obstacle Detected! (Pushed to Firebase)");
      sensorStatus = "Obstacle Detected";
    } else {
      Serial.println("IR Sensor: Clear! (Pushed to Firebase)");
      sensorStatus = "Clear";
    }
    Firebase.setString(firebaseData, "/Home/Sensors/IR_Sensor", sensorStatus);
    lastSensorState = currentState;
  }
  delay(10); 
}`
  },
  {
    id: "task11",
    taskNumber: "Task 11",
    subTitle: "SM G Task11 (Smart Garden)",
    title: "Smart Garden Maintenance",
    topic: "ESP32 + Soil Moisture Sensor + Relay Actuator + Firebase Cloud",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/447302364359157761",
    page: 68,
    manualPage: 63,
    category: "esp32",
    image: "images/page_68.png",
    aim: "Implement Internet enabled Smart Garden Maintenance: read soil moisture, fetch threshold from cloud, automatically toggle water pump relay and upload statuses.",
    components: ["Soil Moisture Sensor (AO Pin 34)", "Relay Module (GPIO 13)", "ESP32 GISMO-VI Board", "Connecting Wires", "Firebase Cloud"],
    pinout: [
      { pin: "Soil Moisture AO", connectedTo: "ESP32 GPIO 34" },
      { pin: "Relay Pin", connectedTo: "ESP32 GPIO 13" },
      { pin: "Sensor VCC", connectedTo: "3.3V" },
      { pin: "Sensor GND", connectedTo: "GND" }
    ],
    theory: "ESP32 reads moisture from GPIO 34 (0-4095 inverted: 4095 - analogRead). It queries the cloud threshold 'xxx/IOTLAB/Smart_Garden/SM_Threshold'. If moisture drops below the threshold, it triggers the relay (Motor ON) and pushes real-time status to Firebase.",
    code: `/* Soil Moisture sensor pin: GPIO34
 * Relay pin : GPIO13 
 */
#include "FirebaseESP32.h"

#define FIREBASE_HOST "your-firebase-host"
#define FIREBASE_AUTH "your-firebase-auth"
#define WIFI_SSID "WIFI_SSID" 
#define WIFI_PASSWORD "WIFI_PASSWORD"

FirebaseData firebaseData;
#define smPin 34 
#define relayPin 13

int smValue;
int smLimit = 3000; 
int delayTime = 2000; 
String smValueCloud;

void setup() {
  pinMode(relayPin, OUTPUT);
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD); 
  Serial.print("Connecting to Wi-Fi");
  while(WiFi.status() != WL_CONNECTED) {
    Serial.print("."); 
    delay(300);
  }
  Serial.println("\\nConnected with IP: " + WiFi.localIP().toString());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH); 
  Firebase.reconnectWiFi(true);
}

void loop() {
  String smCloudFull;
  String smCloud;
  if (Firebase.getString(firebaseData, "xxx/IOTLAB/Smart_Garden/SM_Threshold", smCloudFull)) {
    smCloud = smCloudFull.substring(2, smCloudFull.length() - 2);
    smLimit = smCloud.toInt(); 
    Serial.println(smLimit);
  }

  smValue = 4095 - analogRead(smPin); 
  Serial.print("Soil Moisture = "); 
  Serial.println(smValue);
  Firebase.setInt(firebaseData, "IOTLAB/Smart_Garden/Soil_Moisture", smValue);

  if (smValue < smLimit) { 
    digitalWrite(relayPin, HIGH); 
    Serial.println("Motor turned ON"); 
    Firebase.setString(firebaseData, "IOTLAB/Smart_Garden/Motor_Status", "ON");
  } else {
    digitalWrite(relayPin, LOW); 
    Serial.println("Motor turned OFF");
    Firebase.setString(firebaseData, "IOTLAB/Smart_Garden/Motor_Status", "OFF");
  }
  delay(delayTime);
}`
  },
  {
    id: "task12",
    taskNumber: "Task 12",
    title: "Internet Enabled Display of Ambient Parameter",
    topic: "BMP280 Barometric Pressure/Temperature + SSD1306 OLED + Firebase",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/446601917061437441",
    page: 73,
    manualPage: 68,
    category: "esp32",
    image: "images/page_73.png",
    aim: "Implement Internet Enabled Display of Ambient Parameter: Read temperature and pressure from BMP280, display live on 128x64 OLED, and upload to Firebase Cloud.",
    components: ["GISMOVI Board (ESP32)", "BMP 280 Sensor (SPI/I2C)", "SSD1306 128x64 OLED Display (I2C 0x3C)", "Connecting Wires"],
    pinout: [
      { pin: "OLED SDA / SCL", connectedTo: "ESP32 GPIO 21 / GPIO 22" },
      { pin: "BMP SCK", connectedTo: "ESP32 GPIO 18" },
      { pin: "BMP MISO", connectedTo: "ESP32 GPIO 19" },
      { pin: "BMP MOSI", connectedTo: "ESP32 GPIO 23" },
      { pin: "BMP CS", connectedTo: "ESP32 GPIO 5" }
    ],
    theory: "BMP280 measures atmospheric pressure and ambient temperature with high precision. Readings are formatted and displayed on the I2C OLED screen while simultaneously transmitted to Firebase Cloud.",
    code: `#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Adafruit_Sensor.h>
#include <SPI.h>
#include <Adafruit_BMP280.h>
#include <WiFi.h>
#include "FirebaseESP32.h"

#define FIREBASE_HOST "project url" 
#define FIREBASE_AUTH "secret key"
#define WIFI_SSID "Wokwi-GUEST"
#define WIFI_PASSWORD ""

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define BMP_SCK (18)
#define BMP_MISO (19)
#define BMP_MOSI (23)
#define BMP_CS (5)

Adafruit_BMP280 bmp(BMP_CS, BMP_MOSI, BMP_MISO, BMP_SCK);
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);
FirebaseData firebaseData;

void setup() {
  Serial.begin(115200);
  bmp.begin();
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(300);
  }
  display.clearDisplay();
  display.setTextColor(WHITE);
}

void loop() {
  display.clearDisplay();
  float currentTemp = bmp.readTemperature();
  float currentPressure = bmp.readPressure();

  display.setTextSize(1);
  display.setCursor(0, 0);
  display.print("Temperature: ");
  display.setTextSize(2);
  display.setCursor(0, 10);
  display.print(currentTemp);
  display.print(" C");

  display.setTextSize(1);
  display.setCursor(0, 35);
  display.print("Pressure: ");
  display.setTextSize(2);
  display.setCursor(0, 45);
  display.print(currentPressure);
  display.print(" Pa"); 
  display.display(); 

  Firebase.setFloat(firebaseData, "IOTLAB/Environment_Monitor/Temperature", currentTemp);
  Firebase.setFloat(firebaseData, "IOTLAB/Environment_Monitor/Pressure", currentPressure);
  delay(1000);
}`
  },
  {
    id: "task13",
    taskNumber: "Task 13",
    title: "Home Safety and Security System",
    topic: "ESP32 + Magnetic Reed Switch + Firebase",
    platform: "wokwi",
    platformName: "ESP32 Cloud",
    link: "",
    page: 77,
    manualPage: 72,
    category: "esp32",
    image: "images/page_77.png",
    aim: "Internet Enabled Home Safety and security system using magnetic switch.",
    components: ["GISMOVI Board", "Magnetic Sensor", "USB Cable", "FirebaseESP32"],
    pinout: [
      { pin: "Sensor Contact 1", connectedTo: "ESP32 GPIO 16 (INPUT_PULLUP)" },
      { pin: "Sensor Contact 2", connectedTo: "GND" },
      { pin: "VCC", connectedTo: "3.3V" }
    ],
    theory: "Magnetic reed switch consists of two ferromagnetic blades separated by a few microns. When an authorized door or window closes, magnetic flux bridges the blades. Opening breaks the circuit, generating a security trigger.",
    code: `#define magSW 16 

void setup() {
  pinMode(magSW, INPUT_PULLUP); 
  Serial.begin(115200);
}

void loop() {
  int sw_status = digitalRead(magSW);
  if (sw_status) {
    Serial.println("Switch open");
  } else {
    Serial.println("Switch closed"); 
  }
  delay(1000);
}`
  },
  {
    id: "task14",
    taskNumber: "Task 14",
    title: "Ambient Light Proximity & Gesture Sensor",
    topic: "APDS-9960 Gesture Detection + Potentiometer + Firebase",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/458179839392048129",
    page: 80,
    manualPage: 75,
    category: "esp32",
    image: "images/page_80.png",
    aim: "Implement Internet Enabled Ambient light Proximity Digital and Gesture Sensor (APDS-9960) using ESP32.",
    components: ["GISMOVI Board", "APDS-9960 Sensor / Mock Push Buttons + Potentiometer", "Firebase Realtime DB"],
    pinout: [
      { pin: "Potentiometer (Light/Prox)", connectedTo: "ESP32 GPIO 34" },
      { pin: "Button UP", connectedTo: "ESP32 GPIO 12" },
      { pin: "Button DOWN", connectedTo: "ESP32 GPIO 14" },
      { pin: "Button LEFT", connectedTo: "ESP32 GPIO 27" },
      { pin: "Button RIGHT", connectedTo: "ESP32 GPIO 26" }
    ],
    theory: "Detects directional gestures (UP, DOWN, LEFT, RIGHT) using debounced digital inputs and translates analog potentiometer angles to proximity (0-255) and ambient light (0-10000 lux) before streaming to Firebase.",
    code: `#include <WiFi.h>
#include <FirebaseESP32.h>

#define WIFI_SSID "Wokwi-GUEST" 
#define WIFI_PASSWORD "" 
#define FIREBASE_HOST "project url"
#define FIREBASE_AUTH "secret key"

#define POT_PIN 34 
#define BTN_UP 12 
#define BTN_DOWN 14 
#define BTN_LEFT 27 
#define BTN_RIGHT 26 

FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;

void checkGesture(int pin, int &lastState, String gestureName) {
  int currentState = digitalRead(pin);
  if (currentState == LOW && lastState == HIGH) {
    Serial.print("Simulated Gesture: ");
    Serial.println(gestureName);
    Firebase.setString(firebaseData, "/Ambient/Last_Gesture", gestureName);
    delay(50);
  }
  lastState = currentState;
}

void setup() {
  Serial.begin(115200);
  pinMode(BTN_UP, INPUT_PULLUP);
  pinMode(BTN_DOWN, INPUT_PULLUP);
  pinMode(BTN_LEFT, INPUT_PULLUP);
  pinMode(BTN_RIGHT, INPUT_PULLUP);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  config.database_url = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}`
  },
  {
    id: "task15",
    taskNumber: "Task 15",
    title: "Internet Enabled PIR Sensor",
    topic: "ESP32 + Passive Infrared (PIR) Motion Detection + Firebase",
    platform: "wokwi",
    platformName: "Wokwi Simulation",
    link: "https://wokwi.com/projects/458174275852346369",
    page: 84,
    manualPage: 79,
    category: "esp32",
    image: "images/page_84.png",
    aim: "Implement Internet Enabled PIR Sensor using ESP32: detect infrared radiation from human motion, illuminate warning LED, and instantly update Firebase cloud.",
    components: ["GISMOVI Board", "PIR Motion Sensor", "LED (GPIO 5)", "Connecting Wires", "Firebase Realtime DB"],
    pinout: [
      { pin: "PIR Sensor Pin", connectedTo: "ESP32 GPIO 15 (INPUT)" },
      { pin: "Alert LED Pin", connectedTo: "ESP32 GPIO 5 (OUTPUT)" },
      { pin: "Sensor VCC", connectedTo: "5V" },
      { pin: "Sensor GND", connectedTo: "GND" }
    ],
    theory: "PIR sensors sense variations in infrared radiation emitted by warm bodies across dual pyroelectric slots. On detection, output goes HIGH, turning on LED Pin 5 and publishing 'Motion Detected' to /Home/Sensors/Current_State.",
    code: `#include <WiFi.h>
#include <FirebaseESP32.h>

#define WIFI_SSID "Wokwi-GUEST" 
#define WIFI_PASSWORD "" 
#define FIREBASE_HOST "project url" 
#define FIREBASE_AUTH "secret key"
#define SENSOR_PIN 15 
#define LED_PIN 5 

FirebaseData firebaseData;
FirebaseAuth auth;
FirebaseConfig config;
int lastSensorState = -1; 

void setup() {
  Serial.begin(115200);
  pinMode(SENSOR_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  config.database_url = FIREBASE_HOST;
  config.signer.tokens.legacy_token = FIREBASE_AUTH;
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  int currentState = digitalRead(SENSOR_PIN);
  if (currentState != lastSensorState) {
    String sensorStatus = "";
    if (currentState == HIGH) {
      digitalWrite(LED_PIN, HIGH);
      Serial.println("Motion detected! LED ON (1)");
      sensorStatus = "Motion Detected";
    } else {
      digitalWrite(LED_PIN, LOW);
      Serial.println("Motion ended! LED OFF (0)");
      sensorStatus = "Clear";
    }
    Firebase.setString(firebaseData, "/Home/Sensors/Current_State", sensorStatus);
    lastSensorState = currentState;
  }
  delay(10); 
}`
  }
];

// Highlight C++ Code
function highlightCpp(code) {
  const keywords = /\b(void|int|float|double|char|long|bool|const|unsigned|if|else|while|for|return|delay|delayMicroseconds|digitalWrite|digitalRead|pinMode|analogRead|analogWrite|tone|pow|map|constrain|pulseIn|Serial|begin|print|println|read|clear|setCursor|write|display|setSampling|readTemperature|readPressure|isnan|substring|toInt|setString|setInt|setFloat|setBool|getString|reconnectWiFi|restart)\b/g;
  const preprocessor = /(#include|#define)\b[^\n]*/g;
  const strings = /("[^"]*")/g;
  const comments = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g;
  const numbers = /\b(\d+)\b/g;

  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(comments, '<span class="tok-comment">$1</span>')
    .replace(preprocessor, '<span class="tok-prep">$1</span>')
    .replace(strings, '<span class="tok-string">$1</span>')
    .replace(keywords, '<span class="tok-keyword">$1</span>')
    .replace(numbers, '<span class="tok-number">$1</span>');
}

// Render Quick Launch Grid
function renderQuickLaunch() {
  const container = document.getElementById("quickLaunchGrid");
  if (!container) return;

  // Filter user's priority tasks: 1, 2, 3, 4, 5, 6, 7a, 7b, 7c, 8, 10, 11, 12, 14, 15
  const launchTasks = tasksData.filter(t => t.link && t.link.length > 0);

  container.innerHTML = launchTasks.map(task => {
    let glowClass = "glow-" + task.platform;
    let badgeClass = "badge-" + task.platform;
    let actionLabel = task.platform === "kodular" ? "Open in Kodular ↗" : (task.platform === "tinkercad" ? "Open in Tinkercad ↗" : "Launch Simulation ↗");
    let displayBadge = task.subTitle ? task.subTitle : task.taskNumber;

    return `
      <div class="quick-card" data-platform="${task.platform}">
        <div class="quick-card-header">
          <span class="quick-card-badge ${badgeClass}">${task.platformName}</span>
          <span class="quick-card-task-no">${displayBadge}</span>
        </div>
        <div>
          <h4 class="quick-card-title">${task.title}</h4>
          <p class="quick-card-desc">${task.topic}</p>
        </div>
        <a href="${task.link}" target="_blank" rel="noopener noreferrer" class="quick-launch-btn ${glowClass}">
          <span>${actionLabel}</span>
        </a>
      </div>
    `;
  }).join("");
}

// Render Experiment Cards
function renderExperiments(filteredTasks = tasksData) {
  const container = document.getElementById("experimentsList");
  if (!container) return;

  if (filteredTasks.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--border-color);">
        <p style="font-size: 1.2rem; color: var(--text-muted); font-weight: 600;">No tasks match your search or filter.</p>
        <button onclick="resetFilters()" style="margin-top: 14px; padding: 8px 18px; border-radius: var(--radius-md); background: var(--primary); color: #fff; border: none; cursor: pointer; font-weight: 600;">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredTasks.map(task => {
    const launchBtnClass = "btn-" + task.platform;
    const actionLabel = task.platform === "kodular" ? "Open Project in Kodular ↗" : (task.platform === "tinkercad" ? "Open Circuit in Tinkercad ↗" : "Launch Wokwi Simulation ↗");
    const highlightedCode = highlightCpp(task.code);

    let pinoutRows = "";
    if (task.pinout && task.pinout.length > 0) {
      pinoutRows = `
        <table class="custom-table">
          <thead>
            <tr>
              <th>Component Pin / Signal</th>
              <th>MCU / Board Connection</th>
            </tr>
          </thead>
          <tbody>
            ${task.pinout.map(p => `<tr><td>${p.pin}</td><td>${p.connectedTo}</td></tr>`).join("")}
          </tbody>
        </table>
      `;
    }

    return `
      <article class="experiment-card" id="${task.id}" data-category="${task.category}" data-platform="${task.platform}">
        <div class="exp-header">
          <div class="exp-title-area">
            <div class="exp-meta-badges">
              <span class="task-tag">${task.taskNumber}</span>
              ${task.subTitle ? `<span class="pill-badge green">${task.subTitle}</span>` : ""}
              <span class="pill-badge blue">${task.topic}</span>
              <a href="#manualViewer" onclick="jumpToPage(${task.page})" class="pdf-page-tag" title="Jump to page in lab manual">
                📄 Manual Page ${task.manualPage} (PDF p.${task.page})
              </a>
            </div>
            <h4>${task.title}</h4>
            <p class="exp-aim"><strong>Aim:</strong> ${task.aim}</p>
          </div>
          <div class="exp-actions-area">
            ${task.link ? `
              <a href="${task.link}" target="_blank" rel="noopener noreferrer" class="exp-btn-launch ${launchBtnClass}">
                <span>${actionLabel}</span>
              </a>
            ` : `
              <span class="pill-badge red">Hardware Lab Task</span>
            `}
            <a href="#manualViewer" onclick="jumpToPage(${task.page})" class="exp-btn-secondary">
              <span>View in PDF</span>
            </a>
          </div>
        </div>

        <div class="exp-body">
          <div class="exp-info-col">
            <div class="info-block">
              <h5>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Components Required
              </h5>
              <ul>
                ${task.components.map(c => `<li>${c}</li>`).join("")}
              </ul>
            </div>

            <div class="info-block">
              <h5>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                Circuit Diagram & Schematic
              </h5>
              <div class="circuit-preview-wrapper" onclick="openLightbox('${task.image}', '${task.taskNumber} - ${task.title}')">
                <img src="${task.image}" alt="${task.taskNumber} Circuit" class="circuit-preview-img" loading="lazy" />
                <div class="circuit-overlay">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span>Click to Expand Diagram</span>
                </div>
              </div>
            </div>

            <div class="info-block">
              <h5>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                Pin Connections & Interfacing
              </h5>
              ${pinoutRows}
            </div>

            <div class="info-block">
              <h5>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Working Principle & Notes
              </h5>
              <p>${task.theory}</p>
            </div>
          </div>

          <div class="exp-code-col">
            <div class="code-editor-frame">
              <div class="code-header">
                <div class="code-header-dots">
                  <span class="code-dot red"></span>
                  <span class="code-dot yellow"></span>
                  <span class="code-dot green"></span>
                  <span class="code-file-name" style="margin-left: 8px;">${task.id}.ino</span>
                </div>
                <button class="btn-copy-code" onclick="copyCode(this, \`${task.id}\`)" title="Copy source code">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span>Copy Code</span>
                </button>
              </div>
              <div class="code-content-wrapper">
                <pre id="code-${task.id}"><code>${highlightedCode}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Copy Code function
function copyCode(btn, taskId) {
  const task = tasksData.find(t => t.id === taskId);
  if (!task) return;

  navigator.clipboard.writeText(task.code).then(() => {
    const originalText = btn.innerHTML;
    btn.classList.add("copied");
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Copied!</span>
    `;
    showToast(`Code for ${task.taskNumber} copied to clipboard!`);
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy code: ", err);
    showToast("Failed to copy code to clipboard.");
  });
}

// Toast notification
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// PDF Jump Page
function jumpToPage(pageNumber) {
  const iframe = document.getElementById("pdfIframe");
  const select = document.getElementById("pdfPageSelect");
  if (!iframe) return;

  iframe.src = `lab_manual.pdf#page=${pageNumber}`;
  if (select) {
    select.value = pageNumber;
  }

  // Smooth scroll to manual viewer
  const manualElem = document.getElementById("manualViewer");
  if (manualElem) {
    manualElem.scrollIntoView({ behavior: "smooth" });
  }
}

// Toggle manual iframe fullscreen
function togglePdfFullscreen() {
  const container = document.getElementById("manualFrameContainer");
  if (!container) return;

  if (!document.fullscreenElement) {
    container.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Open Lightbox
function openLightbox(imgSrc, title) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalTitle) modalTitle.textContent = title;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Lightbox
function closeLightbox() {
  const modal = document.getElementById("imgModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Search & Filter
let currentCategory = "all";
let currentSearch = "";

function filterTasks() {
  let filtered = tasksData;

  if (currentCategory !== "all") {
    if (currentCategory === "wokwi" || currentCategory === "tinkercad" || currentCategory === "kodular") {
      filtered = filtered.filter(t => t.platform === currentCategory);
    } else {
      filtered = filtered.filter(t => t.category === currentCategory);
    }
  }

  if (currentSearch.trim() !== "") {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(t =>
      t.taskNumber.toLowerCase().includes(q) ||
      t.title.toLowerCase().includes(q) ||
      t.topic.toLowerCase().includes(q) ||
      t.aim.toLowerCase().includes(q) ||
      t.code.toLowerCase().includes(q) ||
      t.components.some(c => c.toLowerCase().includes(q))
    );
  }

  renderExperiments(filtered);
}

function setCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  filterTasks();
}

function resetFilters() {
  currentCategory = "all";
  currentSearch = "";
  const input = document.getElementById("taskSearchInput");
  if (input) input.value = "";
  document.querySelectorAll(".filter-btn").forEach(b => {
    if (b.dataset.filter === "all") b.classList.add("active");
    else b.classList.remove("active");
  });
  filterTasks();
}

// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  // Restore Theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }

  // Render components
  renderQuickLaunch();
  renderExperiments();

  // Search input event
  const searchInput = document.getElementById("taskSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      filterTasks();
    });
  }

  // Escape key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
    // Ctrl+K or / focuses search
    if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement !== searchInput)) {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });
});

