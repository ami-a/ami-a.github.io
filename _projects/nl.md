---
title: "Notification Lamp"
is_project: true
ind: 10
year: 2013
sdisc: "An RGB lamp that changes colors and blinks when triggers like a new email or new Facebook notifications / messages are detected."
disc: "This project consists of an ordinary RGB lamp connected to an Arduino Nano that I wired to be able to control the lamp light colour and brightness. I wrote a simple C# program that sends commands to the Arduino via USB when triggers like new email or new Facebook notification were detected. 
<br>For example, when a new mail arrives, the lamp would blink green for a few seconds and then turned solid green. If another event happens the colour of this event would append to the previous ones.<br>&nbsp;"
tag: "C# & Arduino"
c_lang: ["C#","Arduino"]
LOC: "2<i style=\"color:#edff14;\">,</i>700"
parts:
  - lib: ["USER32.DLL",Facebook SDK"]
    con: "used in"
    term: "C#"
  - lib: ["Arduino Nano"]
    con: "used as"
    term: "External Hardware"
tablea: [[".NET Framework","4.0"],["Facebook C# SDK","6.0.10.0"]]
tableb: [["Type","Windows Service"],["Input","Credentials to Accounts"],["Output","Lamp Color & Flickering"],["Special Components","Arduino Nano(ATmega168), Multicolor Lamp"]]
---