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
This competition by MAFAT’s DDR&D (Directorate of Defense Research & Development) tackles the challenge of classifying living, non-rigid objects detected by doppler-pulse radar systems. The competition was divided into two stages, where the first stage was mainly for training and the second stage for testing. This challenge had over **1K participants**.
</span>

### The Radar
<span style="color:white;">
The type of radar the data comes form is called a Pulse-Doppler Radar. A Pulse-Doppler Radar is a radar system that determines the range to a target using pulse-timing techniques, and uses the Doppler effect of the returned signal to determine the target object's velocity.
Each radar “stares” at a fixed, wide area of interest. Whenever an animal or a human moves within the radar’s covered area, it is detected and tracked. The dataset contains records of those tracks. The tracks in the dataset are split into 32 time-unit segments. Each record in the dataset represents a single segment.
<br><br>
A segment consists of a matrix with I/Q values and metadata. The matrix of each segment has a size of 32x128. The X-axis represents the pulse transmission time, also known as “slow-time”. The Y-axis represents the reception time of signals with respect to pulse transmission time divided into 128 equal sized bins, also known as “fast-time”. The Y-axis is usually referred to as “range” or “velocity” as wave propagation depends on the speed of light.
<br><br>
The radar’s raw, original received signal is a wave defined by amplitude, frequency, and phase. Frequency and phase are treated as a single-phase parameter. Amplitude and phase are represented in polar coordinates relative to the transmitted burst/wave. 
Upon reception, the raw data is converted to cartesian coordinates, i.e., I/Q values. The values in the matrix are complex numbers: I represents the real part, and Q represents the imaginary part.
</span>
<p align="center"><img src="drtc/images/graphs/rawInv.png" width="800"/><br>Example of a raw segment from the data, which was converted to power units. Each pulse was fired in “slow-time” intervals (32 times per segment).</p>

### Data & Dataset Structure
<span style="color:white;">
The metadata of a segment includes track id, location id, location type, day index, sensor id and the SNR level. The segments were collected from several different geographic locations, a unique id was given per location. Each location consists of one or more sensors, a sensor belongs to a single location. A unique id was given per sensor. Each sensor has been used in one or more days, each day is represented by an index. A single track appears in a single location, sensor and day. The segments were taken from longer tracks, each track was given a unique id.
<br><br>
In Stage 1:
</span><span style="color:white;">
- 5 Pickle files for the Training set, Public Test set (Public), and Auxiliary set (3 files). 
- 5 CSV files for metadata of the Training set, Public Test set, and Auxiliary set (3 files). 
In the Test set metadata CSV file there are two fields 'segment_id' and 'snr_type'.
<br><br>
In Stage 2:
</span><span style="color:white;">
- 2 Pickle files for the Private Test set and the full tracks of the Public Test set.
- 2 CSV files for metadata of the Private Test set and the full tracks of the Public Test set. 
In the Private Test set metadata CSV file there are two fields 'segment_id' and 'snr_type'.
</span>

### Auxiliary datasets
<span style="color:white;">
In addition to the Training set described above, the data set also contains auxiliary data:
</span><span style="color:white;">
- **Synthetic** low SNR segments that were created by transforming the high SNR signals from the train set.
- **“Background”** segments – Segments that were recorded by a sensor in parallel to segments with tracks but at a different range. These segments contain the recorded “noise.” Each segment also contains a field mapping to the original High or Low SNR track id. 
- **“Experiment”** locations – In these locations, only humans were recorded in a controlled environment, which doesn't necessarily reflect a “natural” recording. 
</span>

### Submission
## My Strategy
### Data Partition
### Spectrograms
### Micro Doppler Effect
### Model
## Results






