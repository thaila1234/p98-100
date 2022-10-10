var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var cont = 0;

function startb(){
    recognition.start()
}

recognition.onresult = function(event){
    Content = event.results[0][0].transcript.toLowerCase();
    if (Content == "selfie"){
        speak()
    }
}

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speakData = "Tirando sua selfie em 5 segundos.";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    setTimeout(function(){
        imgId = "selfie1";
        takeSelfie();
        //save();
    }, 10000)
    setTimeout(function(){
        imgId = "selfie2";
        takeSelfie();
        //save();
    }, 10000)
    setTimeout(function(){
        imgId = "selfie3";
        takeSelfie();
        //save();
    }, 10000)
    temp(cont);
}

camera = document.getElementById("webcam")

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });

function takeSelfie(){
    Webcam.snap(function(data_uri){
        if(imgId == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'" />' 
        }
        if(imgId == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'" />' 
        }
        if(imgId == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'" />' 
        }
    })
}

function save(){
    link = document.getElementById("foto");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click()
}

function temp(cont){
    for(var i=0;i<5;i++){
        cont = cont+1
        var synth = window.speechSynthesis;
  
        speak_data = cont ;
  
       var utterThis = new SpeechSynthesisUtterance(speak_data);
  
        synth.speak(utterThis);
    }
 }
 