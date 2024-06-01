



let spritestate = localStorage.getItem("sprite");
let spritepagestate = localStorage.getItem("spritepage");
//SPRITE STATE ON LOAD
if(spritestate=="null"||spritestate==null){
  document.getElementById("sprite").src = "Assets/Sprites/Character1/sprite1Left.png"
}
if(spritestate=="1"){
  document.getElementById("sprite").src = "images/carleft.jpg"
}
if(spritepagestate=="1"||spritepagestate==1){
  document.getElementById("sprite").style.left = '460px';
  document.getElementById("sprite").style.top = '300px';
  document.getElementById("sprite").src = "Assets/Sprites/Character1/sprite1Right.png"
  document.getElementById("sprite").removeAttribute("hidden");
}


document.getElementById("debug").onclick = function(){
  console.log("Left");
  console.log(document.getElementById("sprite").offsetLeft);
  console.log("Top");
  console.log(document.getElementById("sprite").offsetTop);
}

//score on refresh
let count = localStorage.getItem("savedScore");
if(count>=1){
  document.getElementById("score").innerHTML="SCORE: "+ count;
}
//lotcars
let car1state = localStorage.getItem("car1st");
let car2state = localStorage.getItem("car2st");
let car3state = localStorage.getItem("car3st");
let car4state = localStorage.getItem("car4st");
let car5state = localStorage.getItem("car5st");
let car6state = localStorage.getItem("car6st");
let car7state = localStorage.getItem("car7st");
let car8state = localStorage.getItem("car8st");
let car9state = localStorage.getItem("car9st");
let car10state = localStorage.getItem("car10st");
let car11state = localStorage.getItem("car11st");
let car12state = localStorage.getItem("car12st");
let car13state = localStorage.getItem("car13st");
let car14state = localStorage.getItem("car14st");
let car15state = localStorage.getItem("car15st");
let car16state = localStorage.getItem("car16st");
let car17state = localStorage.getItem("car17st");
let car18state = localStorage.getItem("car18st");
//MOVING FUNCTION START
  //ON FOOT
function moveleft() {
  const img = document.getElementById('sprite');
  if(img.offsetTop >=270&&img.offsetTop <=345){
    img.style.left = `${img.offsetLeft - 5}px`;
    document.getElementById('sprite').src="Assets/Sprites/Character1/sprite1Left.png"; 
    }
  else if(img.offsetLeft >=460){
    img.style.left = `${img.offsetLeft - 5}px`;
    document.getElementById('sprite').src="Assets/Sprites/Character1/sprite1Left.png";
    }
  if (img.offsetLeft <=440){
    leaveLot();
    }
}
function moveright() {
  const img = document.getElementById('sprite');
  if(img.offsetTop >=270&&img.offsetTop <=345){  
    img.style.left = `${img.offsetLeft + 5}px`;
    document.getElementById('sprite').src="Assets/Sprites/Character1/sprite1Right.png"; 
    }
  else if(img.offsetLeft <=1415){
    img.style.left = `${img.offsetLeft + 5}px`;
    document.getElementById('sprite').src="Assets/Sprites/Character1/sprite1Right.png";
    }
}
function moveup() {
  const img = document.getElementById('sprite');
  if(img.offsetTop >=77){
    img.style.top = `${img.offsetTop - 5}px`;
    document.getElementById('sprite').src="Assets/Sprites/Character1/sprite1Up.png";
  }
}
function movedown() {
  const img = document.getElementById('sprite');
  if(img.offsetTop <=535){
    img.style.top = `${img.offsetTop + 5}px`;
    document.getElementById('sprite').src="Assets/Sprites/Character1/sprite1Down.png";
  }
}
//IN VEHICLE
function driveRight(){
  const img = document.getElementById('sprite');
  if(img.offsetLeft <=2440){
  img.style.left = `${img.offsetLeft + 8}px`;
  img.style.height = "70px";
  img.style.width = "120px";
  document.getElementById('sprite').src="Assets/Cars/carRight.png";
}}
function driveLeft() {
  const img = document.getElementById('sprite');
  if(img.offsetTop >=260&&img.offsetTop <=345){
    img.style.left = `${img.offsetLeft - 8}px`;
    img.style.height = "70px";
    img.style.width = "120px";
    document.getElementById('sprite').src="Assets/Cars/carLeft.png"; 
    }
  else if(img.offsetLeft >=460){
    img.style.left = `${img.offsetLeft - 8}px`;
    img.style.height = "70px";
  img.style.width = "120px";
    document.getElementById('sprite').src="Assets/Cars/carLeft.png";
    }
  if (img.offsetLeft <=440){
    leaveLot();
    }


}
function driveUp() {
  const img = document.getElementById('sprite');
  if(img.offsetTop >=10){
  img.style.top = `${img.offsetTop - 8}px`;
  img.style.height = "120px";
  img.style.width = "70px";
  document.getElementById('sprite').src="Assets/Cars/carV2UP.png";
}}
function driveDown() {
  const img = document.getElementById('sprite');
  if(img.offsetTop <=810){
  img.style.top = `${img.offsetTop + 8}px`;
  img.style.height = "120px";
  img.style.width = "70px";
  document.getElementById('sprite').src="Assets/Cars/carV2DOWN.png";
}}
document.addEventListener('keydown', (e) => { 
  if (e.key === "w"&&(spritestate=="null"||spritestate==null)) {
    moveup();
    checkSpriteLoc();
  }
  else if (e.key === "s"&&(spritestate=="null"||spritestate==null)){
    movedown();
    checkSpriteLoc();
  }
  else if (e.key === "a"&&(spritestate=="null"||spritestate==null)){
    moveleft();
    checkSpriteLoc();
  }
  else if (e.key === "d"&&(spritestate=="null"||spritestate==null)){
    moveright();
    checkSpriteLoc();
   // CheckCarstate();
  }
  else if (e.key === "w"&&(spritestate=="1"||spritestate==1)) {
      driveUp();
      checkSpriteLoc();
    }
  else if (e.key === "s"&&(spritestate=="1"||spritestate==1)) {
      driveDown();
      checkSpriteLoc();
    }
  else if (e.key === "a"&&(spritestate=="1"||spritestate==1)) {
      driveLeft();
      checkSpriteLoc();
      
    }
  else if (e.key === "d"&&(spritestate=="1"||spritestate==1)) {
      driveRight();
      checkSpriteLoc();
  }
});
function leaveLot(){
  document.getElementById("toshopbutton").click();
  spritepagestate = 0;
  localStorage.setItem("spritepage",spritepagestate);
}
//MOVING FUNCTION END

if((car1state ==null)||(car11state=="null")){
    document.getElementById("car1").hidden = false;
  }
  if((car1state ==1)||(car1state=="1")){
    document.getElementById("car1").hidden = true;
  }
  if(car2state ==null){
    document.getElementById("car2").hidden = false;
  }
  if(car2state ==1){
    document.getElementById("car2").hidden = true;
  }
  if(car3state ==null){
    document.getElementById("car3").hidden = false;
  }
  if(car3state ==1){
    document.getElementById("car3").hidden = true;
  }
  if(car4state ==null){
    document.getElementById("car4").hidden = false;
  }
  if(car4state ==1){
    document.getElementById("car4").hidden = true;
  }
  if(car5state ==null){
    document.getElementById("car5").hidden = false;
  }
  if(car5state ==1){
    document.getElementById("car5").hidden = true;
  }
  if(car6state ==null){
    document.getElementById("car6").hidden = false;
  }
  if(car6state ==1){
    document.getElementById("car6").hidden = true;
  }
  if(car7state ==null){
    document.getElementById("car7").hidden = false;
  }
  if(car7state ==1){
    document.getElementById("car7").hidden = true;
  }
  if(car8state ==null){
    document.getElementById("car8").hidden = false;
  }
  if(car8state ==1){
    document.getElementById("car8").hidden = true;
  }
  if(car9state ==null){
    document.getElementById("car9").hidden = false;
  }
  if(car9state ==1){
    document.getElementById("car9").hidden = true;
  }
  if(car10state ==null){
    document.getElementById("car10").hidden = false;
  }
  if(car10state ==1){
    document.getElementById("car10").hidden = true;
  }
  if(car11state ==null){
    document.getElementById("car11").hidden = false;
  }
  if(car11state ==1){
    document.getElementById("car11").hidden = true;
  }
  if(car12state ==null){
    document.getElementById("car12").hidden = false;
  }
  if(car12state ==1){
    document.getElementById("car12").hidden = true;
  }
  if(car13state ==null){
    document.getElementById("car13").hidden = false;
  }
  if(car13state ==1){
    document.getElementById("car13").hidden = true;
  }
  if(car14state ==null){
    document.getElementById("car14").hidden = false;
  }
  if(car14state ==1){
    document.getElementById("car14").hidden = true;
  }
  if(car15state ==null){
    document.getElementById("car15").hidden = false;
  }
  if(car15state ==1){
    document.getElementById("car15").hidden = true;
  }
  if(car16state ==null){
    document.getElementById("car16").hidden = false;
  }
  if(car16state ==1){
    document.getElementById("car16").hidden = true;
  }
  if(car17state ==null){
    document.getElementById("car17").hidden = false;
  }
  if(car17state ==1){
    document.getElementById("car17").hidden = true;
  }
  if(car18state ==null){
    document.getElementById("car18").hidden = false;
  }
  if(car18state ==1){
    document.getElementById("car18").hidden = true;
  }


  function checkSpriteLoc(){
    checkParkingStall1();
    checkTags();
    checkParkingStall2();
    
    checkParkingStall3();
    checkParkingStall4();
    checkParkingStall5();
    checkParkingStall6();
    checkParkingStall7();
    checkParkingStall8();
    checkParkingStall9();
    checkParkingStall10();
    checkParkingStall11();
    checkParkingStall12();
    checkParkingStall13();
    checkParkingStall14();
    checkParkingStall15();
    checkParkingStall16();
    checkParkingStall17();
    checkParkingStall18();
  }
  
  //ENTER/EXIT VEHICLE
  function checkParkingStall1(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("car1");
      if((spritestate==null||"null")&&
        car.hidden==false&&
        x.offsetTop<=175&&
        x.offsetLeft>=630&&
        x.offsetLeft<=635&&
        x.offsetTop>=170){
            x.src ="Assets/Cars/carV2Down.png";
            spritestate = 1;
            saveSpriteState();
            car.hidden = true;
            car1state =1;
            saveCar1State();
            x.style.left ="565px";
            x.style.top ="84px";
            x.style.height = "120px";
            x.style.width = "70px";
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag1"));
          }
      else if((spritestate==1||"1")&&
        car.hidden==true&&
        x.offsetTop<=90&&
        x.offsetLeft>=550&&
        x.offsetLeft<=565&&
        x.offsetTop>=75){
          x.src="Assets/Sprites/Character1/sprite1Down.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car1").hidden = false;
          car1state =null;
          saveCar1State();
          x.style.left="590px";
          x.style.top="210px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
  function checkParkingStall2(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("car2");
      if(x.offsetTop>=170&&
        x.offsetTop<=175&&
        x.offsetLeft>=719&&
        x.offsetLeft<=724&&
        (spritestate==null||"null")&&
        car.hidden==false){
            x.src ="Assets/Cars/carV2Down.png";
            spritestate = 1;
            saveSpriteState();
            document.getElementById("car2").hidden = true;
            car2state =1;
            saveCar2State();
            x.style.left ="654px";
            x.style.top ="84px";
            x.style.height = "120px";
            x.style.width = "70px";
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag2"));
          }
      else if(x.offsetTop>=75&&
        x.offsetTop<=90&&
        x.offsetLeft>=639&&
        x.offsetLeft<=654&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Down.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car2").hidden = false;
          car1state =null;
          saveCar1State();
          x.style.left="675px";
          x.style.top="210px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
  function checkParkingStall3(){
    //182x816
    let x = document.getElementById("sprite");
    let car = document.getElementById("car3");
    if(x.offsetTop>=170&&
    x.offsetTop<=175&&
    x.offsetLeft>=808&&
    x.offsetLeft<=813&&
    (spritestate==null||"null")&&
     car.hidden==false){
        x.src ="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("car3").hidden = true;
        car3state =1;
        saveCar3State();
        x.style.left ="743px";
        x.style.top ="84px";
        x.style.height = "120px";
        x.style.width = "70px";
        localStorage.setItem("spriteInCar", localStorage.getItem("lotTag3"));
      }
      else if(x.offsetTop>=75&&
        x.offsetTop<=90&&
        x.offsetLeft>=728&&
        x.offsetLeft<=743&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Down.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car3").hidden = false;
          car3state =null;
          saveCar3State();
          x.style.left="764px";
          x.style.top="210px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
  function checkParkingStall4(){
    //3: Left: 905,Top: 182 
    let x = document.getElementById("sprite");
    let car = document.getElementById("car4");
    if(x.offsetTop>=170&&
    x.offsetTop<=175&&
    x.offsetLeft>=897&&
    x.offsetLeft<=902&&
    (spritestate==null||"null")&&
    car.hidden==false){
        x.src ="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("car4").hidden = true;
        car4state =1;
        saveCar4State();
        x.style.left ="832px";
        x.style.top ="84px";
        x.style.height = "120px";
        x.style.width = "70px";
        localStorage.setItem("spriteInCar", localStorage.getItem("lotTag4"));

      }
    else if(x.offsetTop>=75&&
          x.offsetTop<=90&&
          x.offsetLeft>=817&&
          x.offsetLeft<=832&&
          (spritestate==1||"1")&&
          car.hidden==true){
            x.src="Assets/Sprites/Character1/sprite1Down.png";
            spritestate = null;
            saveSpriteState();
            document.getElementById("car4").hidden = false;
            car4state =null;
            saveCar4State();
            x.style.left="853px";
            x.style.top="210px";
            x.style.height="25px";
            x.style.width="25px";
          }
        }
  function checkParkingStall5(){
    //4: Left: 995,Top: 182 
    let x = document.getElementById("sprite");
    let car = document.getElementById("car5");
    if(x.offsetTop>=170&&
    x.offsetTop<=175&&
    x.offsetLeft>=987&&
    x.offsetLeft<=992&&
    (spritestate==null||"null")&&
    car.hidden==false){
        x.src ="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("car5").hidden = true;
        car5state =1;
        saveCar5State();
        x.style.left ="921px";
        x.style.top ="84px";
        x.style.height = "120px";
        x.style.width = "70px";
        localStorage.setItem("spriteInCar", localStorage.getItem("lotTag5"));

      }
       else if(x.offsetTop>=75&&
          x.offsetTop<=90&&
          x.offsetLeft>=906&&
          x.offsetLeft<=921&&
          (spritestate==1||"1")&&
          car.hidden==true){
            x.src="Assets/Sprites/Character1/sprite1Down.png";
            spritestate = null;
            saveSpriteState();
            document.getElementById("car5").hidden = false;
            car5state =null;
            saveCar5State();
            x.style.left="942px";
            x.style.top="210px";
            x.style.height="25px";
            x.style.width="25px";
          }
    }
  function checkParkingStall6(){
    //: Left: 1010,Top: 84
    let x = document.getElementById("sprite");
    let car = document.getElementById("car6");
    if(x.offsetTop>=170&&
    x.offsetTop<=175&&
    x.offsetLeft>=1075&&
    x.offsetLeft<=1080&&
    (spritestate==null||"null")&&
    car.hidden==false){
        x.src ="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("car6").hidden = true;
        car6state =1;
        saveCar6State();
        x.style.left ="1010px";
        x.style.top ="84px";
        x.style.height = "120px";
        x.style.width = "70px";
        localStorage.setItem("spriteInCar", localStorage.getItem("lotTag6"));

      }
      else if(x.offsetTop>=75&&
          x.offsetTop<=90&&
          x.offsetLeft>=995&&
          x.offsetLeft<=1010&&
          (spritestate==1||"1")&&
          car.hidden==true){
            x.src="Assets/Sprites/Character1/sprite1Down.png";
            spritestate = null;
            saveSpriteState();
            document.getElementById("car6").hidden = false;
            car6state =null;
            saveCar6State();
            x.style.left="1031px";
            x.style.top="210px";
            x.style.height="25px";
            x.style.width="25px";
          }
        }
  function checkParkingStall7(){
     //Left: 1172,Top: 182 
     let x = document.getElementById("sprite");
     let car = document.getElementById("car7");
     if(x.offsetTop>=170&&
     x.offsetTop<=175&&
     x.offsetLeft>=1164&&
     x.offsetLeft<=1169&&
     (spritestate==null||"null")&&
     car.hidden==false){
        x.src ="Assets/Cars/carV2Down.png";
         spritestate = 1;
         saveSpriteState();
         document.getElementById("car7").hidden = true;
         car7state =1;
         saveCar7State();
         x.style.left ="1099px";
         x.style.top ="84px";
         x.style.height = "120px";
         x.style.width = "70px";
         localStorage.setItem("spriteInCar", localStorage.getItem("lotTag7"));

      }
       else if(x.offsetTop>=75&&
          x.offsetTop<=90&&
          x.offsetLeft>=1084&&
          x.offsetLeft<=1099&&
          (spritestate==1||"1")&&
          car.hidden==true){
            x.src="Assets/Sprites/Character1/sprite1Down.png";
            spritestate = null;
            saveSpriteState();
            document.getElementById("car7").hidden = false;
            car7state =null;
            saveCar7State();
            x.style.left="1120px";
            x.style.top="210px";
            x.style.height="25px";
            x.style.width="25px";
          }
        }
        
  function checkParkingStall8(){
    //7: Left: 1262,Top: 182 
    let x = document.getElementById("sprite");
    let car = document.getElementById("car8");
    if(x.offsetTop>=170&&
    x.offsetTop<=175&&
    x.offsetLeft>=1254&&
    x.offsetLeft<=1259&&
    (spritestate==null||"null")&&
    car.hidden==false){
        x.src ="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("car8").hidden = true;
        car8state =1;
        saveCar8State();
        x.style.left ="1189px";
        x.style.top ="84px";
        x.style.height = "120px";
        x.style.width = "70px";
        localStorage.setItem("spriteInCar", localStorage.getItem("lotTag8"));

      }
      else if(x.offsetTop>=75&&
          x.offsetTop<=90&&
          x.offsetLeft>=1173&&
          x.offsetLeft<=1190&&
          (spritestate==1||"1")&&
          car.hidden==true){
            x.src="Assets/Sprites/Character1/sprite1Down.png";
            spritestate = null;
            saveSpriteState();
            document.getElementById("car8").hidden = false;
            car8state =null;
            saveCar8State();
            x.style.left="1209px";
            x.style.top="210px";
            x.style.height="25px";
            x.style.width="25px";
          }
        }
  function checkParkingStall9(){
        let x = document.getElementById("sprite");
        let car = document.getElementById("car9");
          if(x.offsetTop>=170&&
            x.offsetTop<=175&&
            x.offsetLeft>=1343&&
            x.offsetLeft<=1348&&
            (spritestate==null||"null")&&
            car.hidden==false){
                x.src ="Assets/Cars/carV2Down.png";
                spritestate = 1;
                saveSpriteState();
                document.getElementById("car9").hidden = true;
                car9state =1;
                saveCar9State();
                x.style.left ="1278px";
                x.style.top ="84px";
                x.style.height = "120px";
                x.style.width = "70px";
                localStorage.setItem("spriteInCar", localStorage.getItem("lotTag9"));

              }
              else if(x.offsetTop>=75&&
                  x.offsetTop<=90&&
                  x.offsetLeft>=1262&&
                  x.offsetLeft<=1280&&
                  (spritestate==1||"1")&&
                  car.hidden==true){
                    x.src="Assets/Sprites/Character1/sprite1Down.png";
                    spritestate = null;
                    saveSpriteState();
                    document.getElementById("car9").hidden = false;
                    car9state =null;
                    saveCar9State();
                    x.style.left="1298px";
                    x.style.top="210px";
                    x.style.height="25px";
                    x.style.width="25px";
                  }
                }
        

//BOTTOM ROW
  


function checkParkingStall10(){
  let x = document.getElementById("sprite");
  let car = document.getElementById("car10");
      if(x.offsetTop>=445&&
        x.offsetTop<=450&&
        x.offsetLeft>=550&&
        x.offsetLeft<=565&&
        (spritestate==null||"null")&&
        car.hidden==false){
            x.src ="Assets/Cars/carV2Up.png";
            spritestate = 1;
            saveSpriteState();
            document.getElementById("car10").hidden = true;
            car10state =1;
            saveCar10State();
            x.style.left ="565px";
            x.style.top ="437px";
            x.style.height = "120px";
            x.style.width = "70px";
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag10"));

          }
      else if(x.offsetTop>=435&&
        x.offsetTop<=440&&
        x.offsetLeft>=550&&
        x.offsetLeft<=565&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Up.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car10").hidden = false;
          car10state =null;
          saveCar10State();
          x.style.left="590px";
          x.style.top="410px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
  function checkParkingStall11(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("car11");
      if(x.offsetTop>=445&&
        x.offsetTop<=450&&
        x.offsetLeft>=630&&
        x.offsetLeft<=635&&
        (spritestate==null||"null")&&
        car.hidden==false){
            x.src ="Assets/Cars/carV2Up.png";
            spritestate = 1;
            saveSpriteState();
            document.getElementById("car11").hidden = true;
            car11state =1;
            saveCar11State();
            x.style.left ="654px";
            x.style.top ="437px";
            x.style.height = "120px";
            x.style.width = "70px";
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag11"));

          }
      else if(x.offsetTop>=435&&
        x.offsetTop<=440&&
        x.offsetLeft>=639&&
        x.offsetLeft<=654&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Up.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car11").hidden = false;
          car11state =null;
          saveCar11State();
          x.style.left="679px";
          x.style.top="410px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
  function checkParkingStall12(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("car12");
    if(x.offsetTop>=445&&
      x.offsetTop<=450&&
      x.offsetLeft>=718&&
      x.offsetLeft<=723&&
      (spritestate==null||"null")&&
      car.hidden==false){
          x.src ="Assets/Cars/carV2Up.png";
          spritestate = 1;
          saveSpriteState();
          document.getElementById("car12").hidden = true;
          car12state =1;
          saveCar12State();
          x.style.left ="743px";
          x.style.top ="437px";
          x.style.height = "120px";
          x.style.width = "70px";
          localStorage.setItem("spriteInCar", localStorage.getItem("lotTag12"));

        }
    else if(x.offsetTop>=435&&
      x.offsetTop<=440&&
      x.offsetLeft>=728&&
      x.offsetLeft<=743&&
      (spritestate==1||"1")&&
      car.hidden==true){
        x.src="Assets/Sprites/Character1/sprite1Up.png";
        spritestate = null;
        saveSpriteState();
        document.getElementById("car12").hidden = false;
        car12state =null;
        saveCar12State();
        x.style.left="768px";
        x.style.top="410px";
        x.style.height="25px";
        x.style.width="25px";
      }
    }
    function checkParkingStall13(){
      let x = document.getElementById("sprite");
      let car = document.getElementById("car13");
      if(x.offsetTop>=445&&
        x.offsetTop<=450&&
        x.offsetLeft>=807&&
        x.offsetLeft<=812&&
        (spritestate==null||"null")&&
        car.hidden==false){
            x.src ="Assets/Cars/carV2Up.png";
            spritestate = 1;
            saveSpriteState();
            document.getElementById("car13").hidden = true;
            car13state =1;
            saveCar13State();
            x.style.left ="832px";
            x.style.top ="437px";
            x.style.height = "120px";
            x.style.width = "70px";
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag13"));

          }
      else if(x.offsetTop>=435&&
        x.offsetTop<=440&&
        x.offsetLeft>=817&&
        x.offsetLeft<=832&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Up.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car13").hidden = false;
          car13state =null;
          saveCar13State();
          x.style.left="857px";
          x.style.top="410px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
    function checkParkingStall14(){
      let x = document.getElementById("sprite");
      let car = document.getElementById("car14");
      if(x.offsetTop>=445&&
        x.offsetTop<=450&&
        x.offsetLeft>=896&&
        x.offsetLeft<=901&&
        (spritestate==null||"null")&&
        car.hidden==false){
            x.src ="Assets/Cars/carV2Up.png";
            spritestate = 1;
            saveSpriteState();
            document.getElementById("car14").hidden = true;
            car14state =1;
            saveCar14State();
            x.style.left ="921px";
            x.style.top ="437px";
            x.style.height = "120px";
            x.style.width = "70px";
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag14"));

          }
      else if(x.offsetTop>=435&&
        x.offsetTop<=440&&
        x.offsetLeft>=906&&
        x.offsetLeft<=921&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Up.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car14").hidden = false;
          car14state =null;
          saveCar14State();
          x.style.left="946px";
          x.style.top="410px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
    function checkParkingStall15(){
      let x = document.getElementById("sprite");
      let car = document.getElementById("car15");
      if(x.offsetTop>=445&&
        x.offsetTop<=450&&
        x.offsetLeft>=985&&
        x.offsetLeft<=990&&
        (spritestate==null||"null")&&
        car.hidden==false){
            x.src ="Assets/Cars/carV2Up.png";
            spritestate = 1;
            saveSpriteState();
            document.getElementById("car15").hidden = true;
            car15state =1;
            saveCar15State();
            x.style.left ="1010px";
            x.style.top ="437px";
            x.style.height = "120px";
            x.style.width = "70px";     
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag15"));
          }
      else if(x.offsetTop>=435&&
        x.offsetTop<=440&&
        x.offsetLeft>=995&&
        x.offsetLeft<=1010&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Up.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car15").hidden = false;
          car15state =null;
          saveCar15State();
          x.style.left="1035px";
          x.style.top="410px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
    function checkParkingStall16(){
      let x = document.getElementById("sprite");
      let car = document.getElementById("car16");
      if(x.offsetTop>=445&&
        x.offsetTop<=450&&
        x.offsetLeft>=1074&&
        x.offsetLeft<=1079&&
        (spritestate==null||"null")&&
        car.hidden==false){
            x.src ="Assets/Cars/carV2Up.png";
            spritestate = 1;
            saveSpriteState();
            document.getElementById("car16").hidden = true;
            car16state =1;
            saveCar16State();
            x.style.left ="1099px";
            x.style.top ="437px";
            x.style.height = "120px";
            x.style.width = "70px";
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag16"));

          }
      else if(x.offsetTop>=435&&
        x.offsetTop<=440&&
        x.offsetLeft>=1084&&
        x.offsetLeft<=1099&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Up.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car16").hidden = false;
          car16state =null;
          saveCar16State();
          x.style.left="1124px";
          x.style.top="410px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }
    function checkParkingStall17(){
      let x = document.getElementById("sprite");
      let car = document.getElementById("car17");
      if(x.offsetTop>=445&&
        x.offsetTop<=450&&
        x.offsetLeft>=1163&&
        x.offsetLeft<=1168&&
        (spritestate==null||"null")&&
        car.hidden==false){
            x.src ="Assets/Cars/carV2Up.png";
            spritestate = 1;
            saveSpriteState();
            document.getElementById("car17").hidden = true;
            car17state =1;
            saveCar17State();
            x.style.left ="1189px";
            x.style.top ="437px";
            x.style.height = "120px";
            x.style.width = "70px";
            localStorage.setItem("spriteInCar", localStorage.getItem("lotTag17"));

          }
      else if(x.offsetTop>=435&&
        x.offsetTop<=440&&
        x.offsetLeft>=1173&&
        x.offsetLeft<=1188&&
        (spritestate==1||"1")&&
        car.hidden==true){
          x.src="Assets/Sprites/Character1/sprite1Up.png";
          spritestate = null;
          saveSpriteState();
          document.getElementById("car17").hidden = false;
          car17state =null;
          saveCar17State();
          x.style.left="1213px";
          x.style.top="410px";
          x.style.height="25px";
          x.style.width="25px";
        }
      }

      function checkParkingStall18(){
        let x = document.getElementById("sprite");
        let car = document.getElementById("car18");
        if(x.offsetTop>=445&&
          x.offsetTop<=450&&
          x.offsetLeft>=1252&&
          x.offsetLeft<=1257&&
          (spritestate==null||"null")&&
          car.hidden==false){
              x.src ="Assets/Cars/carV2Up.png";
              spritestate = 1;
              saveSpriteState();
              document.getElementById("car18").hidden = true;
              car18state =1;
              saveCar18State();
              x.style.left ="1278px";
              x.style.top ="437px";
              x.style.height = "120px";
              x.style.width = "70px";
              localStorage.setItem("spriteInCar", localStorage.getItem("lotTag18"));

            }
        else if(x.offsetTop>=435&&
          x.offsetTop<=440&&
          x.offsetLeft>=1262&&
          x.offsetLeft<=1277&&
          (spritestate==1||"1")&&
          car.hidden==true){
            x.src="Assets/Sprites/Character1/sprite1Up.png";
            spritestate = null;
            saveSpriteState();
            document.getElementById("car18").hidden = false;
            car18state =null;
            saveCar18State();
            x.style.left="1302px";
            x.style.top="410px";
            x.style.height="25px";
            x.style.width="25px";
          }
        }
  
  function saveCar1State(){
    localStorage.setItem("car1st",car1state);
  }
  function saveCar2State(){
    localStorage.setItem("car2st",car2state);
  }
  function saveCar3State(){
    localStorage.setItem("car3st",car3state);
  }
  function saveCar4State(){
    localStorage.setItem("car4st",car4state);
  }
  function saveCar5State(){
    localStorage.setItem("car5st",car5state);
  }
  function saveCar6State(){
    localStorage.setItem("car6st",car6state);
  }
  function saveCar7State(){
    localStorage.setItem("car7st",car7state);
  }
  function saveCar8State(){
    localStorage.setItem("car8st",car8state);
  }
  function saveCar9State(){
    localStorage.setItem("car9st",car9state);
  }
  function saveCar10State(){
    localStorage.setItem("car10st",car10state);
  }
  function saveCar11State(){
    localStorage.setItem("car11st",car11state);
  }
  function saveCar12State(){
    localStorage.setItem("car12st",car12state);
  }
  function saveCar13State(){
    localStorage.setItem("car13st",car13state);
  }
  function saveCar14State(){
    localStorage.setItem("car14st",car14state);
  }
  function saveCar15State(){
    localStorage.setItem("car15st",car15state);
  }
  function saveCar16State(){
    localStorage.setItem("car16st",car16state);
  }
  function saveCar17State(){
    localStorage.setItem("car17st",car17state);
  }
  function saveCar18State(){
    localStorage.setItem("car18st",car18state);
  }
  function saveCar19State(){
    localStorage.setItem("car19st",car19state);
  }
  function saveCar20State(){
    localStorage.setItem("car20st",car20state);
  }
  function saveCar21State(){
    localStorage.setItem("car21st",car21state);
  }
  function saveSpriteState(){
    localStorage.setItem("sprite",spritestate);
  }
  document.getElementById("debug").onclick = function(){
    console.log("spritestate");
    console.log(spritestate);
    console.log("spritepagestate");
  console.log(spritepagestate);
  console.log(document.getElementById("sprite").offsetLeft);
  console.log(document.getElementById("sprite").offsetTop);
  console.log("---------------");
  }
  document.getElementById("clr").onclick=function(){
    localStorage.clear();
  }
  document.getElementById("mainMenuBtn").onclick=function(){
    localStorage.clear();
    window.location="index.html";
  }
  document.getElementById("resetBtn").onclick=function(){
    localStorage.clear();
    window.location="shop.html";
  }


//check tags
function checkTags(){
  let x = document.getElementById("sprite");
  //stall1
  if(x.offsetLeft>=560&&
    x.offsetLeft<=615&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag1");
  }
  //stall2
  else if(x.offsetLeft>=649&&
    x.offsetLeft<=704&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag2");
  }
  else if(x.offsetLeft>=738&&
    x.offsetLeft<=793&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag3");
  }
  else if(x.offsetLeft>=827&&
    x.offsetLeft<=882&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag4");
  }
  else if(x.offsetLeft>=916&&
    x.offsetLeft<=971&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag5");
  }
  else if(x.offsetLeft>=1005&&
    x.offsetLeft<=1060&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag6");
  }
  else if(x.offsetLeft>=1094&&
    x.offsetLeft<=1149&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag7");
  }
  else if(x.offsetLeft>=1183&&
    x.offsetLeft<=1238&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag8");
  }
  else if(x.offsetLeft>=1272&&
    x.offsetLeft<=1327&&
    x.offsetTop>=205&&
    x.offsetTop<=215&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag9");
  }




  else if(x.offsetLeft>=560&&
    x.offsetLeft<=615&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag10");
  }
  else if(x.offsetLeft>=649&&
    x.offsetLeft<=704&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag11");
  }
  else if(x.offsetLeft>=738&&
    x.offsetLeft<=793&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag12");
  }
  else if(x.offsetLeft>=827&&
    x.offsetLeft<=882&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag13");
  }
  else if(x.offsetLeft>=916&&
    x.offsetLeft<=971&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag14");
  }
  else if(x.offsetLeft>=1005&&
    x.offsetLeft<=1060&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag15");
  }
  else if(x.offsetLeft>=1094&&
    x.offsetLeft<=1149&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag16");
  }
  else if(x.offsetLeft>=1183&&
    x.offsetLeft<=1238&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag17");
  }
  else if(x.offsetLeft>=1272&&
    x.offsetLeft<=1327&&
    x.offsetTop>=405&&
    x.offsetTop<=415&&
    (spritestate==null||"null")){
    document.getElementById("textP").innerHTML="THIS IS TAG " + localStorage.getItem("lotTag18");
  }




  else{
    document.getElementById("textP").innerHTML="... ";

  }
}




  /*
function CheckCarstate(){
    car1state =  localStorage.getItem(car1st);
}
*/

/*
Car locations                                     
1: Left 654 ,Top 84                              
2: Left: 743,Top: 84
3: Left: 832,Top: 84
4: Left: 921,Top: 84
5: Left: 1010,Top: 84
6: Left: 1099,Top: 84
7: Left: 1189,Top: 84
MIDDLE ROW
1: Left 654 ,Top 261
2: Left: 743,Top: 261
3: Left: 832,Top: 261
4: Left: 921,Top: 261
5: Left: 1010,Top: 261
6: Left: 1099,Top: 261
7: Left: 1189,Top: 261

BOTTOM ROW
1: Left 654 ,Top 437
2: Left: 743,Top: 437
3: Left: 832,Top: 437
4: Left: 921,Top: 437
5: Left: 1010,Top: 437
6: Left: 1099,Top: 437
7: Left: 1189,Top: 437


trigger points

1: Left 728 ,Top 182                              
2: Left: 816,Top: 182 
3: Left: 905,Top: 182 
4: Left: 995,Top: 182 
5: Left: 1083,Top: 182 
6: Left: 1172,Top: 182 
7: Left: 1262,Top: 182 
MIDDLE ROW
1: Left 728 ,Top 358
2: Left: 816,Top: 358
3: Left: 905,Top: 358
4: Left: 995,Top: 358
5: Left: 1083,Top: 358
6: Left: 1172,Top: 358
7: Left: 1262,Top: 358
BOTTOM ROW
1: Left 639 ,Top 453
2: Left: 728,Top: 453
3: Left: 816,Top: 453
4: Left: 905,Top: 453
5: Left: 995,Top: 453
6: Left: 1083,Top: 453
7: Left: 1172,Top: 453







*/

