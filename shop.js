

let spritestate = localStorage.getItem("sprite");
let spritepagestate = localStorage.getItem("spritepage");
let count = localStorage.getItem("savedScore");
let spawnBlock = localStorage.getItem("spawn");


//SPRITE STATE ON LOAD

if(spritestate=="null"||spritestate==null){
  document.getElementById("sprite").src = "Assets/Sprites/Character1/sprite1Right.png"
}
if(spritestate==1){
  document.getElementById("sprite").src = "images/carleft.jpg"
}
if(spritepagestate=="null"||spritepagestate==null){
  document.getElementById("sprite").removeAttribute("hidden");
}
if(spritepagestate=="0"||spritepagestate==0){
  document.getElementById("sprite").style.left = '1415px';
  document.getElementById("sprite").style.top = '300px';
  document.getElementById("sprite").src = "Assets/Sprites/Character1/sprite1Left.png"
  document.getElementById("sprite").removeAttribute("hidden");
  
}
//score on refresh
if(count!=null){
  document.getElementById("score").innerHTML="SCORE: "+ count;
}


let shcar1state = localStorage.getItem("shcar1st");
let shcar2state = localStorage.getItem("shcar2st");
let shcar3state = localStorage.getItem("shcar3st");
let shcar4state = localStorage.getItem("shcar4st");
let shcar5state = localStorage.getItem("shcar5st");
let shcar6state = localStorage.getItem("shcar6st");
let shcar7state = localStorage.getItem("shcar7st");
let shcar8state = localStorage.getItem("shcar8st");
let shcar9state = localStorage.getItem("shcar9st");
let shcar10state = localStorage.getItem("shcar10st");
let shcar11state = localStorage.getItem("shcar11st");
let shcar12state = localStorage.getItem("shcar12st");
let shcar13state = localStorage.getItem("shcar13st");
let shcar14state = localStorage.getItem("shcar14st");
let shcar15state = localStorage.getItem("shcar15st");
let shcar16state = localStorage.getItem("shcar16st");
//carfinished
let car1Finish = 0;
let car2Finish = 0;
let car3Finish = 0;
let car4Finish = 0;
let car5Finish = 0;
let car6Finish = 0;
let car7Finish = 0;
let car8Finish = 0;
let car9Finish = 0;
let car10Finish = 0;
let car11Finish = 0;
let car12Finish = 0;
let car13Finish = 0;
let car14Finish = 0;
let car15Finish = 0;
let car16Finish = 0;

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
    else if (img.offsetLeft <=10){
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
    if (img.offsetLeft >=1435){
      leaveShop();
    }
}
  function moveup() {
    const img = document.getElementById('sprite');
    if(img.offsetTop >=77){
    img.style.top = `${img.offsetTop - 5}px`;
    document.getElementById('sprite').src="Assets/Sprites/Character1/sprite1Up.png";
  }}
  function movedown() {
    const img = document.getElementById('sprite');
    if(img.offsetTop <=535){
    img.style.top = `${img.offsetTop + 5}px`;
    document.getElementById('sprite').src="Assets/Sprites/Character1/sprite1Down.png";
  }}
  //IN VEHICLE
  function driveRight(){
    const img = document.getElementById('sprite');
    if(img.offsetTop >=270&&img.offsetTop <=345){ 
      img.style.left = `${img.offsetLeft + 8}px`;
      document.getElementById('sprite').src="Assets/Cars/carRight.png";  
      img.style.height = "70px";
    img.style.width = "120px";
    }
    else if(img.offsetLeft <=1415){
      img.style.left = `${img.offsetLeft + 8}px`;
      document.getElementById('sprite').src="Assets/Cars/carRight.png";
      img.style.height = "70px";
    img.style.width = "120px";
    }
  if (img.offsetLeft >=1400){
    leaveShop();
  }}
  function driveLeft() {
    const img = document.getElementById('sprite');
    if(img.offsetLeft >=10){
    img.style.left = `${img.offsetLeft - 8}px`;
    img.style.height = "70px";
    img.style.width = "120px";
    document.getElementById('sprite').src="Assets/Cars/carLeft.png"; 
  }
    if(img.offsetLeft<=396){
      deliverCar();
    }


}
  function driveUp() {
    const img = document.getElementById('sprite');
    if(img.offsetTop >=10){
    img.style.top = `${img.offsetTop - 8}px`;
    document.getElementById('sprite').src="Assets/Cars/carV2UP.png";
    img.style.height = "120px";
    img.style.width = "70px";
  }}
  function driveDown() {
    const img = document.getElementById('sprite');
    if(img.offsetTop <=810){
    img.style.top = `${img.offsetTop + 8}px`;
    document.getElementById('sprite').src="Assets/Cars/carV2DOWN.png";
    img.style.height = "120px";
    img.style.width = "70px";
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
    }
    else if (e.key === "w"&&(spritestate=="1"||spritestate==1))  {
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
  function leaveShop(){
    document.getElementById("tolotbutton").click();
    spritepagestate = 1;
    localStorage.setItem("spritepage",spritepagestate);
  }
    //MOVING FUNCTION END

  function checkSpriteLoc(){
    checkShopStall1();
    checkShopStall2();
    checkShopStall3();
    checkShopStall4();
    checkShopStall5();
    checkShopStall6();
    checkShopStall7();
    checkShopStall8();
    checkShopStall9();
    checkShopStall10();
    checkShopStall11();
    
    checkShopStall12();
    checkShopStall13();
    checkShopStall14();
    checkShopStall15();
    checkShopStall16();
    
  }

  function checkShopStall1(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar1");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
      car.hidden==true&&
      x.offsetTop>=100&&
      x.offsetTop<=115&&
      x.offsetLeft>=600&&
      x.offsetLeft<=615){
        x.src="Assets/Sprites/Character1/sprite1Down.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar1").hidden = false;
        shcar1state =1;
        localStorage.setItem("shcar1st",shcar1state);
        x.style.left = "637px";
        x.style.top = "237px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag1")){
        localStorage.setItem("task1","fin");
        count++;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
        if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag1")){
        localStorage.setItem("task1","fin");
        count--;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=135&&
     x.offsetTop<=140&&
      x.offsetLeft>=590&&
      x.offsetLeft<=595){
        x.src="Assets/Cars/carV2Up.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar1").hidden = true;
        shcar1state =null;
        localStorage.setItem("shcar1st",shcar1state);
        x.style.left = "615px";
        x.style.top = "109px";
        x.style.width = "70px";
        x.style.height = "120px";
        car1Finish = 1;
        }}
      }
  function checkShopStall2(){
  let x = document.getElementById("sprite");
  let car = document.getElementById("shcar2");
  if(spritepagestate=="0"){ 
  if((spritestate == 1||"1")&&
  car.hidden==true&&
    x.offsetTop>=100&&
    x.offsetTop<=115&&
    x.offsetLeft>=689&&
    x.offsetLeft<=704){
      x.src="Assets/Sprites/Character1/sprite1Down.png"
      spritestate = null;
      saveSpriteState();
      document.getElementById("shcar2").hidden = false;
      shcar2state =1;
      localStorage.setItem("shcar2st",shcar2state);
      x.style.left = "726px";
      x.style.top = "237px";
      x.style.width = "25px";
      x.style.height = "25px";
      if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag2")){
        localStorage.setItem("task2","fin");
        count++;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
        if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag2")){
        localStorage.setItem("task2","fin");
        count--;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
      }
   else if((spritestate==null||"null")&&
   car.hidden==false&&
   x.offsetTop>=135&&
   x.offsetTop<=140&&
    x.offsetLeft>=679&&
    x.offsetLeft<=684){
      x.src="Assets/Cars/carV2Up.png";
      spritestate = 1;
      saveSpriteState();
      document.getElementById("shcar2").hidden = true;
      shcar2state =null;
      localStorage.setItem("shcar2st",shcar2state);
      x.style.left = "704px";
      x.style.top = "109px";
      x.style.width = "70px";
      x.style.height = "120px";
      car2Finish = 1;
      }}
    }
  function checkShopStall3(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar3");
  if(spritepagestate=="0"){ 
  if((spritestate == 1||"1")&&
  car.hidden==true&&
    x.offsetTop>=100&&
    x.offsetTop<=115&&
    x.offsetLeft>=778&&
    x.offsetLeft<=793){
      x.src="Assets/Sprites/Character1/sprite1Down.png"
      spritestate = null;
      saveSpriteState();
      document.getElementById("shcar3").hidden = false;
      shcar3state =1;
      localStorage.setItem("shcar3st",shcar3state);
      x.style.left = "815px";
      x.style.top = "237px";
      x.style.width = "25px";
      x.style.height = "25px";
      if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag3")){
        localStorage.setItem("task3","fin");
        count++;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
        if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag3")){
        localStorage.setItem("task3","fin");
        count--;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
      }
   else if((spritestate==null||"null")&&
   car.hidden==false&&
   x.offsetTop>=135&&
   x.offsetTop<=140&&
    x.offsetLeft>=768&&
    x.offsetLeft<=773){
      x.src="Assets/Cars/carV2Up.png";
      spritestate = 1;
      saveSpriteState();
      document.getElementById("shcar3").hidden = true;
      shcar3state =null;
      localStorage.setItem("shcar3st",shcar3state);
      x.style.left = "794px";
      x.style.top = "109px";
      x.style.width = "70px";
      x.style.height = "120px";
      car3Finish = 1;
      }}
  }
  function checkShopStall4(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar4");
  if(spritepagestate=="0"){ 
  if((spritestate == 1||"1")&&
  car.hidden==true&&
    x.offsetTop>=100&&
    x.offsetTop<=115&&
    x.offsetLeft>=975&&
    x.offsetLeft<=990){
      x.src="Assets/Sprites/Character1/sprite1Down.png"
      spritestate = null;
      saveSpriteState();
      document.getElementById("shcar4").hidden = false;
      shcar4state =1;
      localStorage.setItem("shcar4st",shcar4state);
      x.style.left = "990px";
      x.style.top = "237px";
      x.style.width = "25px";
      x.style.height = "25px";
      if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag4")){
        localStorage.setItem("task4","fin");
        count++;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
        if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag4")){
        localStorage.setItem("task4","fin");
        count--;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
      }
   else if((spritestate==null||"null")&&
   car.hidden==false&&
   x.offsetTop>=135&&
   x.offsetTop<=140&&
    x.offsetLeft>=955&&
    x.offsetLeft<=960){
      x.src="Assets/Cars/carV2Up.png";
      spritestate = 1;
      saveSpriteState();
      document.getElementById("shcar4").hidden = true;
      shcar4state =null;
      localStorage.setItem("shcar4st",shcar4state);
      x.style.left = "977px";
      x.style.top = "109px";
      x.style.width = "70px";
      x.style.height = "120px";
      car4Finish = 1;
      }}
  }
  function checkShopStall5(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar5");
  if(spritepagestate=="0"){ 
  if((spritestate == 1||"1")&&
  car.hidden==true&&
    x.offsetTop>=100&&
    x.offsetTop<=115&&
    x.offsetLeft>=1064&&
    x.offsetLeft<=1079){
      x.src="Assets/Sprites/Character1/sprite1Down.png"
      spritestate = null;
      saveSpriteState();
      document.getElementById("shcar5").hidden = false;
      shcar5state =1;
      localStorage.setItem("shcar5st",shcar5state);
      x.style.left = "1079px";
      x.style.top = "237px";
      x.style.width = "25px";
      x.style.height = "25px";
      if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag5")){
        localStorage.setItem("task5","fin");
        count++;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
        if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag5")){
        localStorage.setItem("task5","fin");
        count--;
        localStorage.setItem("savedScore",count);
        updateScore();
        }
      }
   else if((spritestate==null||"null")&&
   car.hidden==false&&
   x.offsetTop>=135&&
   x.offsetTop<=140&&
    x.offsetLeft>=1044&&
    x.offsetLeft<=1049){
      x.src="Assets/Cars/carV2Up.png";
      spritestate = 1;
      saveSpriteState();
      document.getElementById("shcar5").hidden = true;
      shcar5state =null;
      localStorage.setItem("shcar5st",shcar5state);
      x.style.left = "1066px";
      x.style.top = "109px";
      x.style.width = "70px";
      x.style.height = "120px";
      car5Finish = 1;
      }}
  }
  function checkShopStall6(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar6");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=100&&
      x.offsetTop<=115&&
      x.offsetLeft>=1153&&
      x.offsetLeft<=1168){
        x.src="Assets/Sprites/Character1/sprite1Down.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar6").hidden = false;
        shcar6state =1;
        localStorage.setItem("shcar6st",shcar6state);
        x.style.left = "1168px";
        x.style.top = "237px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag6")){
          localStorage.setItem("task6","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag6")){
          localStorage.setItem("task6","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=135&&
     x.offsetTop<=140&&
      x.offsetLeft>=1133&&
      x.offsetLeft<=1138){
        x.src="Assets/Cars/carV2Up.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar6").hidden = true;
        shcar6state =null;
        localStorage.setItem("shcar6st",shcar6state);
        x.style.left = "1155px";
        x.style.top = "109px";
        x.style.width = "70px";
        x.style.height = "120px";
        car6Finish = 1;
        }}

  }
  function checkShopStall7(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar7");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=100&&
      x.offsetTop<=115&&
      x.offsetLeft>=1242&&
      x.offsetLeft<=1257){
        x.src="Assets/Sprites/Character1/sprite1Down.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar7").hidden = false;
        shcar7state =1;
        localStorage.setItem("shcar7st",shcar7state);
        x.style.left = "1257px";
        x.style.top = "237px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag7")){
          localStorage.setItem("task7","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag7")){
          localStorage.setItem("task7","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=135&&
     x.offsetTop<=140&&
      x.offsetLeft>=1222&&
      x.offsetLeft<=1227){
        x.src="Assets/Cars/carV2Up.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar7").hidden = true;
        shcar7state =null;
        localStorage.setItem("shcar7st",shcar7state);
        x.style.left = "1244px";
        x.style.top = "109px";
        x.style.width = "70px";
        x.style.height = "120px";
        car7Finish = 1;
        }}
  }
  //bottom row
  function checkShopStall8(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar8");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=525&&
      x.offsetLeft<=540){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar8").hidden = false;
        shcar8state =1;
        localStorage.setItem("shcar8st",shcar8state);
        x.style.left = "548px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag8")){
          localStorage.setItem("task8","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag8")){
          localStorage.setItem("task8","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=590&&
      x.offsetLeft<=595){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar8").hidden = true;
        shcar8state =null;
        localStorage.setItem("shcar8st",shcar8state);
        x.style.left = "526px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car8Finish = 1;
        }}
  }
  function checkShopStall9(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar9");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=614&&
      x.offsetLeft<=629){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar9").hidden = false;
        shcar9state =1;
        localStorage.setItem("shcar9st",shcar9state);
        x.style.left = "637px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag9")){
          localStorage.setItem("task9","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag9")){
          localStorage.setItem("task9","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=679&&
      x.offsetLeft<=684){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar9").hidden = true;
        shcar9state =null;
        localStorage.setItem("shcar9st",shcar9state);
        x.style.left = "615px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car9Finish = 1;
        }}
  }
  function checkShopStall10(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar10");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=703&&
      x.offsetLeft<=718){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar10").hidden = false;
        shcar10state =1;
        localStorage.setItem("shcar10st",shcar10state);
        x.style.left = "726px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag10")){
          localStorage.setItem("task10","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag10")){
          localStorage.setItem("task10","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=768&&
      x.offsetLeft<=773){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar10").hidden = true;
        shcar10state =null;
        localStorage.setItem("shcar10st",shcar10state);
        x.style.left = "704px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car10Finish = 1;
        }}
  }
  function checkShopStall11(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar11");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=792&&
      x.offsetLeft<=807){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar11").hidden = false;
        shcar11state =1;
        localStorage.setItem("shcar11st",shcar11state);
        x.style.left = "815px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag11")){
          localStorage.setItem("task11","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag11")){
          localStorage.setItem("task11","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=855&&
      x.offsetLeft<=862){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar11").hidden = true;
        shcar11state =null;
        localStorage.setItem("shcar11st",shcar11state);
        x.style.left = "794px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car11Finish = 1;
        }}
  }
  function checkShopStall12(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar12");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=975&&
      x.offsetLeft<=990){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar12").hidden = false;
        shcar12state =1;
        localStorage.setItem("shcar12st",shcar12state);
        x.style.left = "1000px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag12")){
          localStorage.setItem("task12","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag12")){
          localStorage.setItem("task12","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=1036&&
      x.offsetLeft<=1044){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar12").hidden = true;
        shcar12state =null;
        localStorage.setItem("shcar12st",shcar12state);
        x.style.left = "977px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car12Finish = 1;
        }}
  }
  function checkShopStall13(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar13");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=1064&&
      x.offsetLeft<=1079){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar13").hidden = false;
        shcar13state =1;
        localStorage.setItem("shcar13st",shcar13state);
        x.style.left = "1089px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag13")){
          localStorage.setItem("task13","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag13")){
          localStorage.setItem("task13","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=1125&&
      x.offsetLeft<=1133){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar13").hidden = true;
        shcar13state =null;
        localStorage.setItem("shcar13st",shcar13state);
        x.style.left = "1066px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car13Finish = 1;
        }}

  }
  function checkShopStall14(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar14");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=1153&&
      x.offsetLeft<=1168){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar14").hidden = false;
        shcar14state =1;
        localStorage.setItem("shcar14st",shcar14state);
        x.style.left = "1178px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag14")){
          localStorage.setItem("task14","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag14")){
          localStorage.setItem("task14","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=1215&&
      x.offsetLeft<=1222){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar14").hidden = true;
        shcar14state =null;
        localStorage.setItem("shcar14st",shcar14state);
        x.style.left = "1155px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car14Finish = 1;
        }}

  }
  function checkShopStall15(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar15");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=1242&&
      x.offsetLeft<=1257){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar15").hidden = false;
        shcar15state =1;
        localStorage.setItem("shcar15st",shcar15state);
        x.style.left = "1267px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag15")){
          localStorage.setItem("task15","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag15")){
          localStorage.setItem("task15","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=1304&&
      x.offsetLeft<=1311){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar15").hidden = true;
        shcar15state =null;
        localStorage.setItem("shcar15st",shcar15state);
        x.style.left = "1244px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car15Finish = 1;
        }}
  }
  function checkShopStall16(){
    let x = document.getElementById("sprite");
    let car = document.getElementById("shcar16");
    if(spritepagestate=="0"){ 
    if((spritestate == 1||"1")&&
    car.hidden==true&&
      x.offsetTop>=413&&
      x.offsetTop<=428&&
      x.offsetLeft>=1331&&
      x.offsetLeft<=1346){
        x.src="Assets/Sprites/Character1/sprite1Up.png"
        spritestate = null;
        saveSpriteState();
        document.getElementById("shcar16").hidden = false;
        shcar16state =1;
        localStorage.setItem("shcar16st",shcar16state);
        x.style.left = "1356px";
        x.style.top = "387px";
        x.style.width = "25px";
        x.style.height = "25px";
        if(localStorage.getItem("spriteInCar")==localStorage.getItem("tag16")){
          localStorage.setItem("task16","fin");
          count++;
          localStorage.setItem("savedScore",count);
          updateScore();
          }
          if(localStorage.getItem("spriteInCar")!=localStorage.getItem("tag16")){
          localStorage.setItem("task16","fin");
          count--;
          localStorage.setItem("savedScore",count);
          updateScore();
          }        }
     else if((spritestate==null||"null")&&
     car.hidden==false&&
     x.offsetTop>=480&&
     x.offsetTop<=485&&
      x.offsetLeft>=1392&&
      x.offsetLeft<=1400){
        x.src="Assets/Cars/carV2Down.png";
        spritestate = 1;
        saveSpriteState();
        document.getElementById("shcar16").hidden = true;
        shcar16state =null;
        localStorage.setItem("shcar16st",shcar16state);
        x.style.left = "1333px";
        x.style.top = "413px";
        x.style.width = "70px";
        x.style.height = "120px";
        car16Finish = 1;
        }}
  }
  
if(shcar1state ==null){
    document.getElementById("shcar1").hidden = true;
  }
  if(shcar1state ==1){
    document.getElementById("shcar1").hidden = false;
  }
  if(shcar2state ==null){
    document.getElementById("shcar2").hidden = true;
  }
  if(shcar2state ==1){
    document.getElementById("shcar2").hidden = false;
  }
  if(shcar3state ==null){
    document.getElementById("shcar3").hidden = true;
  }
  if(shcar3state ==1){
    document.getElementById("shcar3").hidden = false;
  }
  if(shcar4state ==null){
    document.getElementById("shcar4").hidden = true;
  }
  if(shcar4state ==1){
    document.getElementById("shcar4").hidden = false;
  }
  if(shcar5state ==null){
    document.getElementById("shcar5").hidden = true;
  }
  if(shcar5state ==1){
    document.getElementById("shcar5").hidden = false;
  }
  if(shcar6state ==null){
    document.getElementById("shcar6").hidden = true;
  }
  if(shcar6state ==1){
    document.getElementById("shcar6").hidden = false;
  }
  if(shcar7state ==null){
    document.getElementById("shcar7").hidden = true;
  }
  if(shcar7state ==1){
    document.getElementById("shcar7").hidden = false;
  }
  if(shcar8state ==null){
    document.getElementById("shcar8").hidden = true;
  }
  if(shcar8state ==1){
    document.getElementById("shcar8").hidden = false;
  }
  if(shcar9state ==null){
    document.getElementById("shcar9").hidden = true;
  }
  if(shcar9state ==1){
    document.getElementById("shcar9").hidden = false;
  }
  if(shcar10state ==null){
    document.getElementById("shcar10").hidden = true;
  }
  if(shcar10state ==1){
    document.getElementById("shcar10").hidden = false;
  }
  if(shcar11state ==null){
    document.getElementById("shcar11").hidden = true;
  }
  if(shcar11state ==1){
    document.getElementById("shcar11").hidden = false;
  }
  if(shcar12state ==null){
    document.getElementById("shcar12").hidden = true;
  }
  if(shcar12state ==1){
    document.getElementById("shcar12").hidden = false;
  }
  if(shcar13state ==null){
    document.getElementById("shcar13").hidden = true;
  }
  if(shcar13state ==1){
    document.getElementById("shcar13").hidden = false;
  }
  if(shcar14state ==null){
    document.getElementById("shcar14").hidden = true;
  }
  if(shcar14state ==1){
    document.getElementById("shcar14").hidden = false;
  }
  if(shcar15state ==null){
    document.getElementById("shcar15").hidden = true;
  }
  if(shcar15state ==1){
    document.getElementById("shcar15").hidden = false;
  }
  if(shcar16state ==null){
    document.getElementById("shcar16").hidden = true;
  }
  if(shcar16state ==1){
    document.getElementById("shcar16").hidden = false;
  }
  
  
  function saveSpriteState(){
    localStorage.setItem("sprite",spritestate);
  }

  function deliverCar(){
    let x = document.getElementById("sprite");
    spritestate = null;
    saveSpriteState();
    x.src="Assets/Sprites/Character1/sprite1Down.png";
    x.style.height="25px";
    x.style.width="25px";
    x.style.top="27.8%";
    x.style.left="30.8%";
    if(car1Finish==1||
      car2Finish==1||
      car3Finish==1||
      car4Finish==1||
      car5Finish==1||
      car6Finish==1||
      car7Finish==1||
      car8Finish==1||
      car9Finish==1||
      car10Finish==1||
      car11Finish==1||
      car12Finish==1||
      car13Finish==1||
      car14Finish==1||
      car15Finish==1||
      car16Finish==1
    ){
     count++;
     document.getElementById("textP").innerHTML="FINALLY THAT LAZY ASS TECH FINISHED THIS CAR";
     setTimeout(function(){document.getElementById("textP").innerHTML="..."},3000);
    }
    else{
      count--;
      document.getElementById("textP").innerHTML="THAT CAR WASNT DONE YET DUMBASS!";
      setTimeout(function(){document.getElementById("textP").innerHTML="..."},3000);
    }
     localStorage.setItem("savedScore",count);
     updateScore();
     
  }

function updateScore(){
  let x = localStorage.getItem("savedScore");
  document.getElementById("score").innerHTML="SCORE: "+x;
}


  document.getElementById("clrstrg").onclick = function(){
    localStorage.clear();
  }
document.getElementById("debug").onclick = function(){
  console.log("Left");
  console.log(document.getElementById("sprite").offsetLeft);
  console.log("Top");
  console.log(document.getElementById("sprite").offsetTop);
}
document.getElementById("scoreBtn").onclick=function(){
  updateScore();
}
document.getElementById("resetBtn").onclick=function(){
  localStorage.clear();
  window.location = "shop.html";
}
document.getElementById("mainMenuBtn").onclick=function(){
  window.location = "index.html";
}




  


/*
Trigger point left/tops
Stall1:600,148
Stall2:689,148
Stall3:778,148
Stall4:961,148
Stall5:1051,148
Stall6:1140,148
Stall7:1229,148



Stall8:600,488
Stall9:689,488
Stall10:778,488
Stall11:866,488
Stall12:1051,488
Stall13:1140,488
Stall14:1229,488
Stall15:1318,488
Stall16:1406,488

*/
