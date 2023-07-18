---
title: "Face Recognition Security System"
is_project: true
ind: 5
year: 2012
sdisc: "A simple face recognition program that compares and matches faces to a database and opens / closes a lock accordingly."
disc: "This project is a face recognition program that was written mainly in C# but also used libraries that I wrote in C++. Using libraries like OpenCV & OpenGL I was able to identify faces and eyes on a picture or video feed and mark them accordingly. Then I could save those as grayscale pictures and assign an id number and compare and match faces from the feed to the saved ones. When a saved face would be identified, the program will send the face’s id throw a USB connection to an Arduino Nano board. I programmed the Arduino to open an electric lock when receiving certain ids via the serial port and close the lock otherwise.<br>&nbsp;"
tag: "C#, C++ & Arduino"
c_lang: ["C#","C++","Arduino"]
LOC: "4<i style=\"color:#edff14;\">,</i>800"
parts:
  - lib: ["Psapi.dll"]
    con: "used in"
    term: "C#"
  - lib: ["OpenCV","OpenGL"]
    con: "used in"
    term: "C++"
  - lib: ["Webcam","Arduino Nano","Electric Lock"]
    con: "used as"
    term: "External Hardware"
tablea: [[".NET Framework","4.0"],["OpenCV",2.3.0],["OpenGL","4.1"]]
tableb: [["Type","Windows Form Application"],["Input","Camera Feed/Video File"],["Output","Mark Faces in Image + Id, Open/Close a Lock"],["Special Components","Webcam, Aduino Nano(ATmega168), Electric Lock"]]
img: [["frs.jpg","When detecting faces that are not in the DB."],["frs1.jpg","After some faces were added to the DB."]]
---
