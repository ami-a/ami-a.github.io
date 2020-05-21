var coloDiv = document.getElementById("look");
var topDiv = document.getElementById("main-handpro-div");
var hide_bar = [document.getElementById("hide_bar1"),document.getElementById("hide_bar2")];
var videoElement = document.getElementById("videoElement");
var strBtn=document.getElementById("start-btn");
var fingersDivs = [];
var colorsF = ["#ff7214", "#14ffc4", "#ff148f", "#edff14", "#ff144a"];
var mantra = ["", "You", "Can", "Hire", "Me!"];
var fngDiv = document.getElementById("fmarksdiv");
fngDiv.style.display = "none";
for (let i = 0; i < 5; i++) {
    fingersDivs.push(setTrackers(colorsF[i]));
    fngDiv.appendChild(fingersDivs[i]);
}
var video;
var model;
async function fing() {
    if (model == null) {
        model = await handpose.load();
    }

    coloDiv = document.getElementById("look");

    video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
                //console.log("Something went wrong!");
                coloDiv.innerText="Can't access webcam!";
            });
    }
    video.addEventListener("loadeddata", (event) => {
        videoElement.style.display = "block";
        setAsyncInterval(handsy, 200);
    },{ once: true });
    video.addEventListener("loadeddata", (event) => {
        strBtn.onclick = function () { stopPro() };    
        strBtn.innerText = "Stop!";
    },{ once: true });
}
var start = 0;
var avgSize = 1;

async function handsy() {
    var hands = await model.estimateHands(video);
    if (hands.length > 0) {
        var anot = hands[0].annotations;
        var fingersData = [
            anot.thumb,
            anot.indexFinger,
            anot.middleFinger,
            anot.ringFinger,
            anot.pinky,
        ];
        var sqavgSize = SqureDist(fingersData[0][0], anot.palmBase[0]);
        var tavgSize = Math.pow(sqavgSize, 0.5);
        start = pressDetection(start, fingersData, sqavgSize);
        coloDiv.style.color = colorsF[start];
        coloDiv.innerText = mantra[start];
        //console.log(start);
        var relation = tavgSize / avgSize;
        var updSizeMarks = relation < 0.8 || relation > 10 / 8;
        setMarkers(fingersDivs, fingersData, tavgSize / 2, updSizeMarks);
        if (updSizeMarks) {
            avgSize = tavgSize;
        }
        fngDiv.style.display = "inline-block";
    } else {
        fngDiv.style.display = "none";
        coloDiv.style.color = colorsF[0];
        coloDiv.innerText = mantra[0];
        start = 0;
    }
}


function startPro() {
    coloDiv.style.display = "inline-block";
    topDiv.style.display = "inline-block";
    hide_bar[0].style.display = "block";
    hide_bar[1].style.display = "block";
    //videoElement.style.display = "block";
    fing();
    strBtn.onclick = function () {  };    
    strBtn.innerText = "Loading...";
}
function stopPro() {
    coloDiv.style.display = "none";
    topDiv.style.display = "none";
    hide_bar[0].style.display = "none";
    hide_bar[1].style.display = "none";
    videoElement.style.display = "none";
    clearAsyncInterval(0);
    video.srcObject.getVideoTracks()[0].stop();
    video.srcObject=null;
    strBtn.onclick = function () { startPro() };
    strBtn.innerText = "Start!";
}

