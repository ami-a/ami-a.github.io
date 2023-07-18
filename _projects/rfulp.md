---
title: "Range Finder Through a Laser Pointer"
is_project: true
ind: 6
year: 2012
sdisc: "A system that is composed of a webcam and a laser pointer that can estimate distance."
disc: "This project uses the simple geometry principles of light to measure the distance between a webcam and an object. By placing a laser-pointer in a fixed, known horizontal position from a camera and knowing the laser dot position in the image, it is possible to calculate the distance between the laser dot and the camera's focal plane. Using the computer vision library AForge in C#, it is easy to find the laser dot in the image by brightness, shape and color.<br>&nbsp;"
tag: "C#"
c_lang: ["C#"]
LOC: "1<i style=\"color:#edff14;\">,</i>200"
parts:
  - lib: ["AForge.NET"]
    con: "used in"
    term: "C#"
tablea: [[".NET Framework","4.0"],["AForge.NET",2.1.2.0]]
tableb: [["Type","Windows Form Application"],["Input","Camera Feed"],["Output","Text/.txt FIle"],["Special Components","Webcam, Laser Pointer"]]
---
