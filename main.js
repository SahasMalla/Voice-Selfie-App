var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult=function(event)
{
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;

    if(content=="take my selfie")
    {
        speak();

    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 3 seconds.";
    var utter_this  = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);

    setTimeout(function(){
        taking_selfie();
        save();
    }, 3000);
}

Webcam.set
({
    width: 330,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

function taking_selfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'></img>";
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}