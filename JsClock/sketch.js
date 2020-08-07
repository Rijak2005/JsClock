 let hours, minutes, seconds;
 let circle;
 let counter=0;
 let button;

function setup() {
  createCanvas(800,400);
  circle = loadImage("assets/3551380.jpg");
}


function draw() {
  background(0,0,0);

  translate(400, 200);
  rotate(-90);

  imageMode(CENTER);
  image(circle,0,0,500,360);
  

  hours = hour();
  minutes = minute();
  seconds = second();

  strokeWeight(2);
  stroke(255, 255, 255);
  
  noFill();
  let secondAngle = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, secondAngle);

  stroke(0, 255, 255);
  let minuteAngle = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, minuteAngle);

  stroke(255, 0, 255);
  let hourAngle = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 240, 240, 0, hourAngle);

  push();
  rotate(secondAngle);
  strokeWeight(2);
  stroke(255, 255, 255);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(minuteAngle);
  strokeWeight(3);
  stroke(0, 255, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  strokeWeight(5);
  stroke(255, 0, 255);
  line(0, 0, 50, 0);
  pop();

  stroke(0,0,0);
  point(0, 0, 50);

}

function spkTime(){
    if (counter===0){  

  if (minutes===15){
      responsiveVoice.speak("Hello! The time is quarter past "+ hours % 12, "UK English Male");
    } else if(minutes===30){
      responsiveVoice.speak("Hello! The time is half past "+ hours % 12, "UK English Male");
    } else if(minutes===45){
      responsiveVoice.speak("Hello! The time is quarter  to "+ (hours+1) % 12, "UK English Male");
    }else if(minutes===0){
      responsiveVoice.speak("Hello! The time is "+ hours % 12 + " o clock ", "UK English Male");
    }else if(minutes<30){
      responsiveVoice.speak("Hello! The time is "+ minutes +" minutes past "+hours%12 , "UK English Male");
    }else if(minutes>30 && minutes%5===0){
      responsiveVoice.speak("Hello! The time is "+ (60 - minutes) +" minutes to "+(1+hours)%12 , "UK English Male");
    }else{
      responsiveVoice.speak("Hello! The time is "+ hours % 12 + " o clock and "+ minutes +" minutes", "UK English Male");
    }

  } else {

    if (minutes===15){
      responsiveVoice.speak("The time is quarter past "+ hours % 12, "UK English Male");
    } else if(minutes===30){
      responsiveVoice.speak("The time is half past "+ hours % 12, "UK English Male");
    } else if(minutes===45){
      responsiveVoice.speak("The time is quarter  to "+ (hours+1) % 12, "UK English Male");
    }else if(minutes===0){
      responsiveVoice.speak("The time is "+ hours % 12 + " o clock ", "UK English Male");
    }else if(minutes<30){
      responsiveVoice.speak("The time is "+ minutes +" minutes past "+hours%12 , "UK English Male");
    }else if(minutes>30 && minutes%5===0){
      responsiveVoice.speak("The time is "+ (60 - minutes) +" minutes to "+(1+hours)%12 , "UK English Male");
    }else{
      responsiveVoice.speak("The time is "+ hours % 12 + " o clock and "+ minutes +" minutes", "UK English Male");
    }

  }        

  counter++;
}
