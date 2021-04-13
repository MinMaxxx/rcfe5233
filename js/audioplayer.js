let audioIndex = 0;
let audio1 = new Audio('audios/song1.mp3');
let audio2 = new Audio('audios/song2.mp3');
let audio3 = new Audio('audios/song3.mp3');
let audio4 = new Audio('audios/song4.mp3');
let audio5 = new Audio('audios/song5.mp3');

let curPlaying = null;

function playAudio(n){

    if(n === 1){
        if(audio1.paused){
            audio2.pause();
            audio2.currentTime = 0;
            document.getElementById("song2").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio3.pause();
            audio3.currentTime = 0;
            document.getElementById("song3").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio4.pause();
            audio4.currentTime = 0;
            document.getElementById("song4").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio5.pause();
            audio5.currentTime = 0;
            document.getElementById("song5").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio1.volume = 0.1;
            audio1.play();
            document.getElementById("song1").innerHTML = "<i class=\"fa fa-pause font-size-1\" aria-hidden=\"true\"></i>";
        } else {
            audio1.pause();
            document.getElementById("song1").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";
        }
    }
    if(n === 2){
        if(audio2.paused){
            audio1.pause();
            audio1.currentTime = 0;
            document.getElementById("song1").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio3.pause();
            audio3.currentTime = 0;
            document.getElementById("song3").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio4.pause();
            audio4.currentTime = 0;
            document.getElementById("song4").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio5.pause();
            audio5.currentTime = 0;
            document.getElementById("song5").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio2.volume = 0.1;
            audio2.play();
            document.getElementById("song2").innerHTML = "<i class=\"fa fa-pause font-size-1\" aria-hidden=\"true\"></i>";
        } else {
            audio2.pause();
            document.getElementById("song2").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";
        }
    }
    if(n === 3){
        if(audio3.paused){
            audio1.pause();
            audio1.currentTime = 0;
            document.getElementById("song1").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio2.pause();
            audio2.currentTime = 0;
            document.getElementById("song2").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio4.pause();
            audio4.currentTime = 0;
            document.getElementById("song4").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio5.pause();
            audio5.currentTime = 0;
            document.getElementById("song5").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio3.volume = 0.1;
            audio3.play();
            document.getElementById("song3").innerHTML = "<i class=\"fa fa-pause font-size-1\" aria-hidden=\"true\"></i>";
        } else {
            audio3.pause();
            document.getElementById("song3").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";
        }
    }
    if(n === 4){
        if(audio4.paused){
            audio1.pause();
            audio1.currentTime = 0;
            document.getElementById("song1").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio3.pause();
            audio3.currentTime = 0;
            document.getElementById("song3").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio2.pause();
            audio2.currentTime = 0;
            document.getElementById("song2").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio5.pause();
            audio5.currentTime = 0;
            document.getElementById("song5").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio4.volume = 0.1;
            audio4.play();
            document.getElementById("song4").innerHTML = "<i class=\"fa fa-pause font-size-1\" aria-hidden=\"true\"></i>";
        } else {
            audio4.pause();
            document.getElementById("song4").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";
        }
    }
    if(n === 5){
        if(audio5.paused){
            audio1.pause();
            audio1.currentTime = 0;
            document.getElementById("song1").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio3.pause();
            audio3.currentTime = 0;
            document.getElementById("song3").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio4.pause();
            audio4.currentTime = 0;
            document.getElementById("song4").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio2.pause();
            audio2.currentTime = 0;
            document.getElementById("song2").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";

            audio5.volume = 0.1;
            audio5.play();
            document.getElementById("song5").innerHTML = "<i class=\"fa fa-pause font-size-1\" aria-hidden=\"true\"></i>";
        } else {
            audio5.pause();
            document.getElementById("song5").innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";
        }
    }
/*
    let m = [1, 2, 3, 4, 5];
    let audios = [audio1, audio2, audio3, audio4, audio5];

    for(let i = 0;i<m.length;i++){
        if(n === m[i]){
            // m[i] = song number
            audioIndex = m[i];
            if(audios[i].paused){
                audios[i].volume = 0.1;
                audios[i].play();
                curPlaying = audios[i];
                document.getElementById("song" + (i+1)).innerHTML = "<i class=\"fa fa-pause font-size-1\" aria-hidden=\"true\"></i>";
                return;
            }
            audios[i].pause();
            document.getElementById("song" + (i+1)).innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";
        }
        audios[i].pause();
        audios[i].currentTime = 0;
        document.getElementById("song" + (i+1)).innerHTML = "<i class=\"fa fa-play font-size-1\" aria-hidden=\"true\"></i>";
    }
 */
}