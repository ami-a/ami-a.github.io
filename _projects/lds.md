---
title: "Legacy Windows Access Control Prototype"
is_project: true
ind: 8
year: 2011
visibility: archive
sdisc: "A legacy Windows access control prototype with time-based password handling."
disc: "This project was a Windows access control prototype that required a time-based password to unlock. It demonstrated password state handling and desktop access flow control. The implementation was designed for Windows 7 and tested on Windows 10.<br>&nbsp;"
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