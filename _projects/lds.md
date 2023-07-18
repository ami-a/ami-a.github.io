---
title: "Lockdown Screen"
is_project: true
ind: 8
year: 2011
sdisc: "A loginscreen for Windows with time depended password and encryption fail-safe."
disc: "This project is a cool program that locks you out of Windows until you provide a password. The password changes every two minutes or so, and using numbers that run in the background it can be calculated. Failing to enter the correct password three times will result in file encryption and in the addition of another password layer to go through. This program disables every way to shut it down and locks out the mouse and command keys like ctrl+alt+del. It was designed to run on Windows 7, but I tried it in Windows 10, and I could not find a way to bypass it without a restart.<br>&nbsp;"
tag: "C# & Flash"
c_lang: ["C#"]
LOC: "1<i style=\"color:#edff14;\">,</i>250"
parts:
  - lib: ["KERNEL32.DLL","USER32.DLL"]
    con: "used in"
    term: "C#"
tablea: [[".NET Framework","4.0"]]
tableb: [["Type","Windows Form Application"],["Input","Keyboard-only legitimate keys"],["Output","Log Screen"],["Special Components","None"]]
img: [["lds.jpg","Screenshot after one faild login attempt."],["lds.gif","Screenshot of three faild login attempts."]]
---