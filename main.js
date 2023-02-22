sahara = "";
rave = "";
scoreleftwrist = 0;
scorerightwrist = 0;
status = "";
status1 = "";

function preload(){
    song1 = loadSound("sahara.mp3");
    song2 = loadSound("rave-official-audio.mp3");
}

function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 700, 500);
    fill("red");
    stroke("red");
    status = song1.isPlaying();
    if(scoreleftwrist > 0.2)
    {
        song2.stop();
        if(status == false){
            song1.play();
        }
    }
    status = song2.isPlaying();
    if(scorerightwrist > 0.2)
    {
        song1.stop();
        if(status1 == false){
            song2.play();
        }
    }
}

function gotposes(results){
    if(results.length > 0){
        console.log(results)
        scoreleftwrist = results[0].pose.keypoints[9].score;
        scorerightwrist = results[0].pose.keypoints[10].score;
}
}


