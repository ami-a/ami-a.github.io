---
title: "Independent Quadcopter Flight Prototype"
is_project: true
ind: 2
year: 2013
visibility: archive
sdisc: "A self-flying quadcopter prototype with predefined navigation and obstacle avoidance."
disc: "This project is a self-flying quadcopter prototype that follows a predetermined route and avoids obstacles using a sonic distance sensor. It combined Python and C# control code with Arduino and RF hardware. The prototype demonstrated navigation logic and stabilization for lightweight drone hardware.<br>&nbsp;"
tag: "C#, C++, Python & Arduino"
c_lang: ["C#","C++","Python","Arduino"]
LOC: "28<i style=\"color:#edff14;\">,</i>500"
parts:
  - lib: ["LibUsbDotNet","IronPython"]
    con: "used in"
    term: "C#"
  - lib: ["Crazyflie"]
    con: "used in"
    term: "Python"
  - lib: ["Quadcopter","Arduino Nano","Distance Sensor"]
    con: "used as"
    term: "External Hardware"
tablea: [[".NET Framework","4.5"],["Python",3.3.7],["LibUsbDotNet",2.2.8.104],["IronPython",2.7],["Crazyflie",1.0]]
tableb: [["Type","Windows Form Application"],["Input",".csv file with Coordinates"],["Output","Transmit & Receive Data Packets via RF Dongle"],["Special Components","Open Source Quadcopter, RF Dongle, Arduino Nano(ATmega168), Distance Sensor"]]
---
