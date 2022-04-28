soundfile = '';
mymodel = "";
array = [];

function preload(){
    soundfile = loadSound("KutieKitten and DiastrousDogs.jpg");

}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    picket = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("bbb").innerHtMl = "Status :  Processing Image";
}

function modelLoaded(){
    console.log("cocossd initialised");
    mymodel = true;
}

function bloodOath(errors, results){
    if (errors){
        console.error(errors);
    }
    else{
        console.log(results);
        array = results;
    }
}
function draw(){
image(video, 0, 0, 500, 500);

    if(mymodel != ""){
        soundfile.stop();
        picket.detect(babypic, bloodOath);
        r = random(255);
        g = random(255);
        b = random(255);
        for(i =0; i < array.length; i++){
            if(results == "person"){
            document.getElementById("bbb").innerHTML = "Status :  Baby Detected";
            fill(r,g,b);
            text(array[i].label+""+percent+"%", array[i].x, array[i].y);
            noFill();
            stroke(r,g,b);
            rect(array[i].x, array[i].y, array[i].width, array[i].height);
            }
            else{
                document.getElementById("bbb").innerHTML = "Status :  Baby Not Detected";
                soundfile.play();
            }
        }
    }
    if(array.length <0){
        document.getElementById("bbb").innerHTML = "Status :  Baby Not Detected";
        soundfile.play();
    }
}