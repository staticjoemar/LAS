


//START GAMETICKS

if(localStorage.getItem("tag1")==null){
    //
    let rand1a = rand1();
    localStorage.setItem("tag1",rand1a);
    function rand1(){
        return Math.floor(Math.random() * 9001) +1000;
    }
    //
    let rand2a = rand2();
    localStorage.setItem("tag2",rand2a);
    function rand2(){
        return Math.floor(Math.random() * 9001) +1000;
    }
    
    let rand3a = rand3();
    localStorage.setItem("tag3",rand3a);
    function rand3(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand4a = rand4();
    localStorage.setItem("tag4",rand4a);
    function rand4(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand5a = rand2();
    localStorage.setItem("tag5",rand5a);
    function rand5(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand6a = rand6();
    localStorage.setItem("tag6",rand6a);
    function rand6(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand7a = rand7();
    localStorage.setItem("tag7",rand7a);
    function rand7(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand8a = rand2();
    localStorage.setItem("tag8",rand8a);
    function rand8(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand9a = rand9();
    localStorage.setItem("tag9",rand9a);
    function rand9(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand10a = rand10();
    localStorage.setItem("tag10",rand10a);
    function rand10(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand11a = rand11();
    localStorage.setItem("tag11",rand11a);
    function rand11(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand12a = rand12();
    localStorage.setItem("tag12",rand12a);
    function rand12(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand13a = rand13();
    localStorage.setItem("tag13",rand13a);
    function rand13(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand14a = rand14();
    localStorage.setItem("tag14",rand14a);
    function rand14(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand15a = rand15()
    localStorage.setItem("tag15",rand15a);
    function rand15(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand16a = rand16();
    localStorage.setItem("tag16",rand16a);
    function rand16(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand17a = rand17();
    localStorage.setItem("tag17",rand17a);
    function rand17(){
        return Math.floor(Math.random() * 9001) +1000;
    }

    let rand18a = rand18();
    localStorage.setItem("tag18",rand18a);
    function rand18(){
        return Math.floor(Math.random() * 9001) +1000;
    }
    
}








if(localStorage.getItem("lotTag1")==null){
    function assign1rand(array){
        let currentIndex = array.length;
        while (currentIndex !=0){
            let randomIndex = Math.floor(Math.random()* currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
assign1rand(arr);
assign1rand(arr2);
console.log(arr);
localStorage.setItem("lotTag"+arr[0], localStorage.getItem("tag1"));
localStorage.setItem("lotTag"+arr[1], localStorage.getItem("tag2"));
localStorage.setItem("lotTag"+arr[2], localStorage.getItem("tag3"));
localStorage.setItem("lotTag"+arr[3], localStorage.getItem("tag4"));
localStorage.setItem("lotTag"+arr[4], localStorage.getItem("tag5"));
localStorage.setItem("lotTag"+arr[5], localStorage.getItem("tag6"));
localStorage.setItem("lotTag"+arr[6], localStorage.getItem("tag7"));
localStorage.setItem("lotTag"+arr[7], localStorage.getItem("tag8"));
localStorage.setItem("lotTag"+arr[8], localStorage.getItem("tag9"));
localStorage.setItem("lotTag"+arr[9], localStorage.getItem("tag10"));
localStorage.setItem("lotTag"+arr[10], localStorage.getItem("tag11"));
localStorage.setItem("lotTag"+arr[11], localStorage.getItem("tag12"));
localStorage.setItem("lotTag"+arr[12], localStorage.getItem("tag13"));
localStorage.setItem("lotTag"+arr[13], localStorage.getItem("tag14"));
localStorage.setItem("lotTag"+arr[14], localStorage.getItem("tag15"));
localStorage.setItem("lotTag"+arr[15], localStorage.getItem("tag16"));
localStorage.setItem("lotTag"+arr[16], localStorage.getItem("tag17"));
localStorage.setItem("lotTag"+arr[17], localStorage.getItem("tag18"));

localStorage.setItem("t1",arr2[0]);
localStorage.setItem("t2",arr2[1]);
localStorage.setItem("t3",arr2[2]);
localStorage.setItem("t4",arr2[3]);
localStorage.setItem("t5",arr2[4]);
localStorage.setItem("t6",arr2[5]);
localStorage.setItem("t7",arr2[6]);
localStorage.setItem("t8",arr2[7]);
localStorage.setItem("t9",arr2[8]);
localStorage.setItem("t10",arr2[9]);
localStorage.setItem("t11",arr2[10]);
localStorage.setItem("t12",arr2[11]);
localStorage.setItem("t13",arr2[12]);
localStorage.setItem("t14",arr2[13]);
localStorage.setItem("t15",arr2[14]);
localStorage.setItem("t16",arr2[15]);





}







//TASKS

let tasks = {
    task1: function(){
        if(localStorage.getItem("task1")!="start"){
        localStorage.setItem("task1","start");
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag1"));
        document.getElementById("toStall").innerHTML = "STALL 1";
        }
    },
    task2: function(){
        if(localStorage.getItem("task2")!="start"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag2"));
        document.getElementById("toStall").innerHTML = "STALL 2";
        }
    },
    task3: function(){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag3"));
        document.getElementById("toStall").innerHTML = "STALL 3";
    },
    task4: function(){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag4"));
        document.getElementById("toStall").innerHTML = "STALL 4";
    },
    task5: function(){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag5"));
        document.getElementById("toStall").innerHTML = "STALL 5";
    },
    task6: function(){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag6"));
        document.getElementById("toStall").innerHTML = "STALL 6";
    },
    task7: function(){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag7"));
        document.getElementById("toStall").innerHTML = "STALL 7";
    },
    task8: function(){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag8"));
        document.getElementById("toStall").innerHTML = "STALL 8";
    },
    task9: function(){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag9"));
        document.getElementById("toStall").innerHTML = "STALL 9";
    },
    
}


function assignTasks(){
  let t1;   
  let t2;   
  let t3;   
  let t4;   
  let t5;   
  let t6;   
  let t7;   
  let t8;   
  let t9;   
  let t10;   
  let t11;   
  let t12;   
  let t13;   
  let t14;   
  let t15;   
  let t16;   

t1 = localStorage.getItem("t1").toString();
t2 = localStorage.getItem("t2").toString();
t3 = localStorage.getItem("t3").toString();
t4 = localStorage.getItem("t4").toString();
t5 = localStorage.getItem("t5").toString();
t6 = localStorage.getItem("t6").toString();
t7 = localStorage.getItem("t7").toString();
t8 = localStorage.getItem("t8").toString();
t9 = localStorage.getItem("t9").toString();
t10 = localStorage.getItem("t10").toString();
t11 = localStorage.getItem("t11").toString();
t12 = localStorage.getItem("t12").toString();
t13 = localStorage.getItem("t13").toString();
t14 = localStorage.getItem("t14").toString();
t15 = localStorage.getItem("t15").toString();
t16 = localStorage.getItem("t16").toString();


    if(localStorage.getItem("task"+t1)!="start"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t1));
        document.getElementById("toStall").innerHTML = "STALL "+t1;
        }
    if(localStorage.getItem("task"+t1)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t2));
        document.getElementById("toStall").innerHTML = "STALL "+t2;
    }
    if(localStorage.getItem("task"+t2)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t3));
        document.getElementById("toStall").innerHTML = "STALL "+t3;
    }
    if(localStorage.getItem("task"+t3)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t4));
        document.getElementById("toStall").innerHTML = "STALL "+t4;
    }
    if(localStorage.getItem("task"+t4)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t5));
        document.getElementById("toStall").innerHTML = "STALL "+t5;
    }
    if(localStorage.getItem("task"+t5)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t6));
        document.getElementById("toStall").innerHTML = "STALL "+t6;
    }
    if(localStorage.getItem("task"+t6)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t7));
        document.getElementById("toStall").innerHTML = "STALL "+t7;
    }
    if(localStorage.getItem("task"+t7)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t8));
        document.getElementById("toStall").innerHTML = "STALL "+t8;
    }
    if(localStorage.getItem("task"+t8)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t9));
        document.getElementById("toStall").innerHTML = "STALL "+t9;
    }
    if(localStorage.getItem("task"+t9)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t10));
        document.getElementById("toStall").innerHTML = "STALL "+t10;
    }
    if(localStorage.getItem("task"+t10)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t11));
        document.getElementById("toStall").innerHTML = "STALL "+t11;
    }
    if(localStorage.getItem("task"+t11)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t12));
        document.getElementById("toStall").innerHTML = "STALL "+t12;
    }
    if(localStorage.getItem("task"+t12)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t13));
        document.getElementById("toStall").innerHTML = "STALL "+t13;
    }
    if(localStorage.getItem("task"+t13)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t14));
        document.getElementById("toStall").innerHTML = "STALL "+t14;
    }
    if(localStorage.getItem("task"+t14)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t15));
        document.getElementById("toStall").innerHTML = "STALL "+t15;
    }
    if(localStorage.getItem("task"+t15)=="fin"){
        document.getElementById("currentTask").innerHTML = ("TAG "+localStorage.getItem("tag"+t16));
        document.getElementById("toStall").innerHTML = "STALL "+t16;
    }
}
if(localStorage.getItem("ticks")==null){
localStorage.setItem("ticks",100);
}
function timer(){

    let count = localStorage.getItem("ticks");
    count--;
    localStorage.setItem("ticks",count);
}


function checkScore(){

}


function flashing(){
    setInterval(flash,1000);
}

function dialogue1(){
    let x = "tag"+t1.toString();
  document.getElementById("spencer").hidden = false;
  document.getElementById("rock").hidden = true;
  document.getElementById("textP1").innerHTML="KEYS FOR STALL "+ localStorage.getItem("t1")+"! KEYS FOR STALL "+ localStorage.getItem("t1")+"! TAG NUMBER " + localStorage.getItem(x);
  setTimeout(function(){
    document.getElementById("spencer").hidden = true;
    document.getElementById("rock").hidden = false;
  }, 6000);
}


/*if(localStorage.getItem("d1")==null){
setTimeout(dialogue1,3000);
localStorage.setItem("d1","fin");
}*/


function gameOver(){
    document.getElementById("gameOver").hidden = false;
    document.getElementById("gameOverScore").innerHTML="SCORE: "+localStorage.getItem("savedScore");
}

function flash(){
    document.getElementById("shcar1").src ="Assets/Cars/carV2UpFlashing.png";
    setTimeout(function(){document.getElementById("shcar1").src="Assets/Cars/carV2UP.png"},1000);
  }
//ALL OTHER FUNCTIONS IN HERE
setInterval(function(){
if((localStorage.getItem("sprite"))==(1||"1")){
    document.getElementById("currentCar").innerHTML=localStorage.getItem("spriteInCar");
}
else{
    document.getElementById("currentCar").innerHTML="----"
}




assignTasks();

timer();

document.getElementById("countDown").innerHTML=localStorage.getItem("ticks");


if(localStorage.getItem("ticks")==0){
    gameOver();
}





},1000);
