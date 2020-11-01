---
title: "Radar Target Classification (Competition)"
is_project: true
ind: -5
year: "2020"
sdisc: "MAFAT Radar Challenge —distinguishing between humans and animals in Pulse-Doppler Radar tracks."
disc: "<span style=\"color:red;font-size:40px;\">This section will be filled in the next few days (24-10-2020)</span><br>&nbsp;"
tag: "Python & MATLAB"
lang: ["Python","MATLAB"]
LOC: "35K"
parts:
  - lib: ["TensorFlow","OpenCV","NumPy","Pandas","Pillow","<br>SciPy","Matplotlib","Scikit-learn","Jupyter","Pickle"]
    con: "used in"
    term: "Python"
tablea: [["MATLAB","R2020a"],["Python","3.8.1"],["TensorFlow","2.3.0"],["OpenCV","4.3.0.36"],["Jupyter","6.1.6"],["Matplotlib","3.3.0"],["NumPy","1.18.5"],["Scikit-learn","0.23.1"],["Pandas","1.1.0"],["Pillow","7.1.2"],["SciPy","1.4.1"]]
tableb: [["Type","Python Scripts & Jupyter Notebooks"],["Input","Radar Raw Feed"],["Output","Classification"]]
---
# MAFAT Radar Challenge
## Introduction
<span style="color:white;">
This competition by MAFAT’s DDR&D (Directorate of Defense Research & Development) tackles the challenge of classifying living, non-rigid objects detected by doppler-pulse radar systems.
</span>

### The Radar
<span style="color:white;">
The type of radar the data comes form is called a Pulse-Doppler Radar. A Pulse-Doppler Radar is a radar system that determines the range to a target using pulse-timing techniques, and uses the Doppler effect of the returned signal to determine the target object's velocity.
Each radar “stares” at a fixed, wide area of interest. Whenever an animal or a human moves within the radar’s covered area, it is detected and tracked. The dataset contains records of those tracks. The tracks in the dataset are split into 32 time-unit segments. Each record in the dataset represents a single segment.

A segment consists of a matrix with I/Q values and metadata. The matrix of each segment has a size of 32x128. The X-axis represents the pulse transmission time, also known as “slow-time”. The Y-axis represents the reception time of signals with respect to pulse transmission time divided into 128 equal sized bins, also known as “fast-time”. The Y-axis is usually referred to as “range” or “velocity” as wave propagation depends on the speed of light.

The radar’s raw, original received signal is a wave defined by amplitude, frequency, and phase. Frequency and phase are treated as a single-phase parameter. Amplitude and phase are represented in polar coordinates relative to the transmitted burst/wave. 
Upon reception, the raw data is converted to cartesian coordinates, i.e., I/Q values. The values in the matrix are complex numbers: I represents the real part, and Q represents the imaginary part.</span>
<p align="center"><img src="drtc/images/graphs/rawInv.png" width="800"/><br>Example of a raw segment from the data, which was converted to power units. Each pulse was fired in “slow-time” intervals (32 times per segment).</p>
### Data
### Submission
## My Strategy
### Data Partition
### Spectrograms
### Micro Doppler Effect
### Model
## Results






