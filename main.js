prediction_1 = ''
prediction_2 = ''
Webcam.set({
    width:360,
    height:300,
    image_format:"png",
    png_quality:90
});
Camera = document.getElementById("camera");
Webcam.attach('#camera');
function Take_Snapshot(){
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';});
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tcUscv8G8/model.json',modelloded);
function modelloded(){
    console.log('modelloded');
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is" + prediction_1;
    speak_data2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}