function SqureDist(x,y)
{
    var r=0;
    for (let i = 0; i < x.length; i++) {
        r+=Math.pow(x[i]-y[i],2);                
    }
    return r;
}
function setMarkers(divs,fingers,avgSize,reSize)
{
    for (let i = 0; i < divs.length; i++) {
        TweenMax.to(divs[i],0.3, {x: fingers[i][fingers[i].length-1][0]-50, 
            y: fingers[i][fingers[i].length-1][1]-50,ease: Linear.easeNone});
        if(reSize){
            TweenMax.to(divs[i], 0.3,{ scale:(avgSize/50)});
        }   
    }
}
function pressDetection(start,fingers,sqAvgSize)
{
    if(start<1){start=1;}
    for (let i = 0; i < fingers.length-1; i++,start=(start+1)%5) {
        if(SqureDist(fingers[start][fingers[start].length-1],fingers[0][fingers[0].length-1])/sqAvgSize<1)
            return start;        
    }
    return 0;
}

function setTrackers(Mcolor)
{
    var cDiv=document.createElement('div');
    cDiv.classList.add('circle');
    cDiv.id='lookC';
    cDiv.style.borderColor =Mcolor+ "aa";
    cDiv.style.setProperty('--background', Mcolor+ "aa");
    cDiv.style.setProperty('--backgroundInner', Mcolor+ "33");
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    var circle = document.createElementNS(ns, 'circle');
        circle.setAttributeNS(null, 'cx', 50);
        circle.setAttributeNS(null, 'cy', 50);
        circle.setAttributeNS(null, 'r', 45);
        circle.setAttributeNS(null, 'id', 'MainCircle' );
        circle.setAttributeNS(null,"style",'stroke:'+Mcolor+ "aa"+';');
        svg.appendChild(circle);
    var newLine1 = document.createElementNS(ns,'line');
        newLine1.setAttribute('x1','8');
        newLine1.setAttribute('y1','8');
        newLine1.setAttribute('x2','18');
        newLine1.setAttribute('y2','18');
        newLine1.setAttribute("style", "stroke:rgba(255,255,255,0.9);stroke-width:1");
        svg.appendChild(newLine1);
    var newLine2 = document.createElementNS(ns,'line');
        newLine2.setAttribute('x1','82');
        newLine2.setAttribute('y1','82');
        newLine2.setAttribute('x2','92');
        newLine2.setAttribute('y2','92');
        newLine2.setAttribute("style", "stroke:rgba(255,255,255,0.9);stroke-width:1");
        svg.appendChild(newLine2);
    var newLine3 = document.createElementNS(ns,'line');
        newLine3.setAttribute('x1','82');
        newLine3.setAttribute('y1','18');
        newLine3.setAttribute('x2','92');
        newLine3.setAttribute('y2','8');
        newLine3.setAttribute("style", "stroke:rgba(255,255,255,0.9);stroke-width:1");
        svg.appendChild(newLine3);
    cDiv.appendChild(svg);
    TweenMax.set(circle, { transformOrigin:"50% 50%"});
    TweenMax.to(circle, 1.5,{ repeat:-1, rotation:360, paused: false,ease:Linear.easeNone});
    return cDiv;
}