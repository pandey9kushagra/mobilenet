function setup() {
  canvas = createCanvas(400, 250);
  canvas.position(570);
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier("MobileNet", result)
}

function draw(){
  image(video, 0, 0, 400, 250)
  classifier.classify(video, gotresults)

}

function result(){

  console.log("modal has loaded")
}

previousres= ""

function gotresults(e,r){

  if(e){
    console.error(e)
  }
  else{

    console.log(r)

    if((r[0].confidence > 0.5)&& previousres != r[0].label){

      previousres = r[0].label

      document.getElementById("objres").innerHTML= r[0].label
      document.getElementById("accres").innerHTML= r[0].confidence.toFixed(3)

      speech = window.speechSynthesis
      speakdata = "object detected is"+ r[0].label
      utter = new SpeechSynthesisUtterance(speakdata)
      speech.speak(utter)
    }
  }
}



