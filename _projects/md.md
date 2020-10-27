---
title: "Mask and Proximity Detection"
is_project: true
ind: -4
year: "2020"
sdisc: "This project is a demonstration of my TrackEverything package, it uses different models to track and detect persons with/without masks (even when their back is turned)."
disc: "<span style=\"color:red;font-size:40px;\">This section will be filled in the next few days (24-10-2020). You can view the <a href=\"https://github.com/ami-a/MaskDetection\">repository</a> in the meantime.</span><br>&nbsp;"
tag: "Python"
lang: ["Python"]
LOC: "3.3K"
parts:
  - lib: ["TrackEverything","TensorFlow","OpenCV","<br>NumPy","Pillow","SciPy"]
    con: "used in"
    term: "Python"
tablea: [["Python","3.8.1"],["TrackEverything","1.7.2"],["TensorFlow","2.2.0"],["OpenCV","4.2.0.34"],["NumPy","1.18.4"],["Pillow","7.1.2"],["SciPy","1.4.1"]]
tableb: [["Type","Python Scripts"],["Input","Camera/Video Feed"],["Output","Persons in Frame Classification"],["Special Components","Camera"]]
img: [["md1.png","Example"],["md2.png","Example"],["md3.png","Example"]]
---
<style>
a    {text-decoration: underline;color: red;}
</style>
## Overview
<span style="color:white;">
You can find all the models and test videos [here](https://drive.google.com/drive/folders/19jsLpv8Ql_ebqYZy1vnC3Snp0dNQ8HX0?usp=sharing).</span>

### Mask Example 1

#### The Detection Model
<span style="color:white;">
This example uses an Head Detection model from [AVAuco/ssd_head_keras github repository](https://github.com/AVAuco/ssd_head_keras) for detecting heads, I modified the files to be compatible with TF2.2. The model has been trained using the [Hollywood Heads dataset](https://www.robots.ox.ac.uk/~vgg/software/headmview/) as positive samples, and a subsample of the [EgoHands dataset](http://vision.soic.indiana.edu/projects/egohands/) as negative
samples. This model has been developed using [Pierluigi Ferarri's Keras implementation of SSD](https://github.com/pierluigiferrari/ssd_keras/) as primary source, and replicates the original [Matconvnet version of our model](https://github.com/AVAuco/ssd_people). In the `custom_get_detection_array` I use the model to give me all the heads detected in a frame with a score of at least `detection_threshold=0.4`. Later I filter out redundant overlapping detections using the default Non-maximum Suppression (NMS) method. <p align="center"><img src="md/images/repos/head_det.jpg" width=540 height=404></p>
</span>
### The Classification Model
<span style="color:white;">
After we have the heads from the detection model, I put them through a classification model to determine the probability of them being with a mask. I used the Face Mask classification model from [chandrikadeb7/Face-Mask-Detection github repository](https://github.com/chandrikadeb7/Face-Mask-Detection). It's based on the MobileNetV2 architecture, it’s also computationally efficient and thus making it easier to deploy the model to embedded systems (Raspberry Pi, Google Coral, etc.). <p align="center"><img src="md/images/repos/mask_class_1.png" width=540 height=328></p>
</span>
## Results
<span style="color:white;">
I only tested it on one video I found online but the results are fair and setting could be optimized much more. The head detection is very rudimentary and has a lot of misses and partial matches.
<p align="center"><img src="images/screens/mask01.png" width=564 height=337></p>
</span>





