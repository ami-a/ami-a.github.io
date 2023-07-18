---
title: "Personal Voice Activated Virtual Assistant"
is_project: true
ind: 1
year: 2012
sdisc: "A voice activated virtual assistant similar to Google Assistant and Alexa. It also has a smart speech isolating filter."
disc: "This project is a voice-activated virtual assistant similar to Google Assistant and Alexa (only before they existed). It has abilities like:
<ul>
<li>Controlling Windows 7 environment:
<ul style=\"list-style-type:disc;\">
<li>Opening/Minimizing/Moving/Closing programs.</li>
<li>Use program controls like play, mute, tabs, etc.</li>
<li>System operations like Shutdown, Clear cache memory, CMD commands, etc.</li>
</ul>
</li>
<li>Output information by a question like Time, Weather, Jokes, CPU usage, etc.</li>
<li>Output information by a trigger like New Email, Facebook Message/Notification, etc.</li>
<li>Setting up reminders and alarms by time or event.</li>
<li>Smart speech isolating filter to ignore the sound that is coming out of the PC speakers to prevent false speech identification occurrences.</li>
<span style=\"position:relative;left:-40px;\">I even integrated some of the <a style=\"text-decoration: underline;\" href=\"iqss#content\">Independent Quadcopter Security System</a> project’s function into it so that you could issue commands like “takeoff”. It was built in C# using libraries like OpenNLP & Windows Core Audio API. The program is live-building dictionaries in XML for the speech interpolator and has to do complex operations in multithreading.</span></ul>"
tag: "C# & XML"
c_lang: ["C#"]
LOC: "21<i style=\"color:#edff14;\">,</i>300"
parts:
  - lib: ["OpenNLP","Microsoft Text-to-Speech","Windows Core Audio API","Facebook SDK"]
    con: "used in"
    term: "C#"
  - lib: ["XML"]
    con: "used for"
    term: "Storage"
tablea: [[".NET Framework","4.0"],["OpenNLP",1.0.2529],["Windows Core Audio API",2.0.0],["Facebook C# SDK",6.0.10.0],["XML",1.0]]
tableb: [["Type","Console Application"],["Input","Speech from Microphone"],["Output","Various Computer Operations & Speech Responses"],["Data","XML Files & Cache Memory"],["Special Components","Microphone"]]
---
