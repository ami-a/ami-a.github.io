---
title: "Independent Quadcopter Security System"
is_project: true
ind: 2
year: 2013
sdisc: "An independent flying and landing quadcopter that uses a sonic distance sensor and a pre-loaded patrol map."
disc: "This project is a self-flying patrol quadcopter (drone) that follows a predetermined path and can avoid obstacles. I used an open-sourced tiny drone and an RF USB dongle to control it remotely. I also added a small RF transmitter, an Arduino Nano and a sonic distance sensor. The main control protocols were written in Python using the drone’s libraries. The program itself was written in C# and used some libraries I wrote in C++, as well as IronPython to use the Python libraries. As this drone stabilization capabilities were deficient, a lot of physics was applied to stabilize it. Unfortunately, due to some crashes, I couldn’t finish the project to the fullest. But up until this point, the drone was able to fly a predetermined path and avoid obstacles that are on the X-Y plane. I also planned to add a camera, substitute the distance sensor for a LIDAR and add wireless charging, all are very heavy and beyond this current drone lift capabilities.<br>&nbsp;"
tag: "C#, C++, Python & Arduino"
lang: ["C#","C++","Python","Arduino"]
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
