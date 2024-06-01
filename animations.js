
//




let flash123;
let npc1Roam123;
let npc2Roam123;
let npc3Roam123;
let npc4Roam123;



npc1Roam();
npc1Roam123 = setInterval(npc1Roam,6010);
npc2Roam();
npc2Roam123 = setInterval(npc2Roam,40000);
npc3Roam();
npc3Roam123 = setInterval(npc3Roam,100010);
npc4Roam();
npc4Roam123 = setInterval(npc4Roam,80010);


document.getElementById("stopAnim").onclick=function(){
  clearInterval(flash123);
  clearInterval(npc1Roam123);
  clearInterval(npc2Roam123);
 
  }
  



  function flash(){
    document.getElementById("shcar1").src ="Assets/Cars/carV2UpFlashing.png";
    setTimeout(function(){document.getElementById("shcar1").src="Assets/Cars/carV2UP.png"},1000);
  }
  document.getElementById("npc").onclick=function(){
    clearInterval(y);
  }
  //npc scripts
  function npc1Roam(){
    let x;
    let y;
    const npc = document.getElementById('sprite2');
    setTimeout(stopRight,2000);
    setTimeout(stopLeft,4000);
    y = setInterval(npcRight,100);
    function npcRight(){
      npc.src = 'Assets/Sprites/Character2/sprite2Right.png';
        if(npc.offsetLeft<=660){
        npc.style.left = `${npc.offsetLeft + 3.5}px`;
        }}
    function npcLeft(){
      npc.src = "Assets/Sprites/Character2/sprite2Left.png";
      if(npc.offsetLeft>=600){
        npc.style.left = `${npc.offsetLeft - 3.5}px`;
        }}
    function stopRight(){
      clearInterval(y);
      x = setInterval(npcLeft,110);
    }
    function stopLeft(){
      clearInterval(x);
    }
  }
  
  function npc2Roam(){
    let x;
    let y;
    const npc = document.getElementById('sprite3');
    setTimeout(stopDown,17000);
    setTimeout(stopUp,34000);
    y = setInterval(npcDown,100);
    function npcDown(){
      npc.src = 'Assets/Sprites/Character3/sprite3Down.png';
        if(npc.offsetTop<=535){
        npc.style.top = `${npc.offsetTop + 3.5}px`;
        }}
    function npcUp(){
      npc.src = "Assets/Sprites/Character3/sprite3Up.png";
      if(npc.offsetTop>=80){
        npc.style.top = `${npc.offsetTop - 3.5}px`;
        }}
    function stopDown(){
      clearInterval(y);
      x = setInterval(npcUp,100);
    }
    function stopUp(){
      clearInterval(x);
    }
  }
  
  function npc3Roam(){
    let x;
    const npc = document.getElementById('sprite4');
    setTimeout(stopRight,34000);
    setTimeout(stopLeft,4000);
    y = setInterval(npcRight,100);
    function npcRight(){
      npc.src = 'Assets/Sprites/Character4/sprite4Right.png';
        if(npc.offsetLeft<=1415){
        npc.style.left = `${npc.offsetLeft + 3.5}px`;
        }}
    function npcLeft(){
      npc.src = "Assets/Sprites/Character4/sprite4Left.png";
      if(npc.offsetLeft>=500){
        npc.style.left = `${npc.offsetLeft - 3.5}px`;
        }}
    function stopRight(){
      clearInterval(y);
      x = setInterval(npcLeft,100);
    }
    function stopLeft(){
      clearInterval(x);
    }
  }


  function npc4Roam(){
    const npc = document.getElementById('sprite5');
    setTimeout(stop1,5000);
    setTimeout(stop2,28000);
    setTimeout(stop3,37000);
    setTimeout(stop4,41500);
    setTimeout(stop5,58000);

    y = setInterval(npcMove1,100);
    //moveset functions
    function npcMove1(){
      npc.src = 'Assets/Sprites/Character6/sprite6Up.png';
        if(npc.offsetTop>=370){
        npc.style.top = `${npc.offsetTop - 3.5}px`;
        }}
    function npcMove2(){
      npc.src = "Assets/Sprites/Character6/sprite6Right.png";
      if(npc.offsetLeft<=1220){
        npc.style.left = `${npc.offsetLeft + 3.5}px`;
        }}
    function npcMove3(){
      npc.src = "Assets/Sprites/Character6/sprite6Down.png";
      if(npc.offsetTop<=525){
        npc.style.top = `${npc.offsetTop + 3.5}px`;
        }}
   function npcMove4(){
      npc.src = "Assets/Sprites/Character6/sprite6Up.png";
      if(npc.offsetTop>=370){
          npc.style.top = `${npc.offsetTop - 3.5}px`;
          }} 
          function npcMove5(){
            npc.src = "Assets/Sprites/Character6/sprite6Left.png";
            if(npc.offsetLeft>=590){
              npc.style.left = `${npc.offsetLeft - 3.5}px`;
              }}  
              function npcMove6(){
                npc.src = "Assets/Sprites/Character6/sprite6Down.png";
                if(npc.offsetTop<=525){
                  npc.style.top = `${npc.offsetTop + 3.5}px`;
                  }}
         
    
    //stop functions
    function stop1(){
      clearInterval(y);
      x = setInterval(npcMove2,100);
    }
    function stop2(){
      clearInterval(x);
      z = setInterval(npcMove3,100);
    }
    function stop3(){
      clearInterval(z);
      za = setInterval(npcMove4,100);
    }
    function stop4(){
      clearInterval(za);
      zb = setInterval(npcMove5,100);
    }
    function stop5(){
      clearInterval(zb);
      zc = setInterval(npcMove6,100);
    }
  }
  
  
  