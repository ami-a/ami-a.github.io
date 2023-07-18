---
title: "Browser Based Hand Position Tracking"
is_project: true
ind: -1
year: "2020"
sdisc: "A simple program that can track your hand and fingers position and gestures in real-time on camera, and doing it all in the browser (available to run here!)."
disc: "This project, though simple and only took me a few hours to do, is still very cool. This project tracks a hand (only one at a time) in a video stream from your webcam and recognizes some simple gestures (touching your thumb with one of the other fingers) and outputs a message accordingly. But the cool part is that it does all of that using only the resources available to your browser locally, and does not send any data outside of your computer. It uses models form the MediaPipe & TensorFlow JavaScript projects for the tracking data, and the GSAP library combined with some CSS for some relatively smooth markings and effects. You can test this project right here below, just press 'Start!' and allow access to your camera (don't worry the video will not leave your computer).<br>&nbsp;"
tag: "TensorFlow & MediaPipe via JS"
c_lang: ["JavaScript","CSS","HTML5"]
LOC: "350"
parts:
  - lib: ["MediaPipe","TensorFlow","GSAP"]
    con: "used in"
    term: "JavaScript"
tablea: [["MediaPipe","Handpose Model"],["TensorFlow","TFLite model, TF.js model"],["GSAP","3.0"]]
tableb: [["Type","Web Script"],["Input","Webcam & Hands Gestures"],["Output","Hand Position & Gestures Interpretation"],["Special Components","Webcam"]]
img: [["dh1.gif","Finger tracking."],["dh2.gif","Gesture interpreting."]]
---
{% include dh/dh.html %}
<script src="dh/Main.js"></script>

