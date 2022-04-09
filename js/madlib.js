
    var tboxes= document.getElementById("adjective1");
    var tboxes2=document.getElementById("adjective2");
    var tboxes3=document.getElementById("noun1");
    var tboxes4=document.getElementById("noun2");
    var tboxes5=document.getElementById("pluralnoun1");
    var tboxes6=document.getElementById("game");
    var tboxes7=document.getElementById("pluralnoun2");
    var tboxes8=document.getElementById("verb1");
    var tboxes9=document.getElementById("verb2");
    var tboxes10=document.getElementById("pluralnoun3");
    var tboxes11=document.getElementById("verb3");
    var myB=document.getElementById("button1");
    let hsix = document.getElementsByTagName('h6');
    let text = document.getElementsByClassName("tboxes");
    let  container=document.getElementById("words");
    let madlibbox=document.createElement("div");
    let amountOFClicks=0;
 
  

// a function to loop through all the elemnets with 'h6' tags-- and hides these elements. Also hides the button
function hideContent(){ 

  
    for (var i=0;i<hsix.length;i++){ 
     hsix[i].style.display = "none";
    }
    myB.style.display="none";

    for(var i=0; i<text.length;i++){

        text[i].style.display="none";
    }


}

function showContent(){
   
    
    madlibbox.style.display= "none";
    container.style.justifyContent="center";
    container.style.display="flex";
    container.style.flexDirection="column";
    container.style.paddingLeft="22% ";
    container.style.paddingRight="22%";
  

    for(var i=0; i<text.length;i++){
        myB.style.display="block";
    text[i].style.display="block";
    
   
     }

     for (var i=0;i<hsix.length;i++){ 
        hsix[i].style.display = "block";
       
       }
   
   
 
}

function generateMadlib(){
    

    madlibbox.style.fontSize = "120%";
 

    container.appendChild(madlibbox);
    madlibbox.classList.add("madlib");
    madlibbox.setAttribute('id',"madlib1");
    madlibbox.style.display="flex";
    madlibbox.style.flexDirection="column";
  

    let text1=document.createTextNode("A vacation is when you take a trip to some "+tboxes.value+" place with your "+ tboxes2.value+" family. Usually you go to some place that is near a/an "+tboxes3.value+" or up on a/an "+tboxes4.value+". A good vacation place is one where you can ride "+tboxes5.value+" or play "+tboxes6.value+" or go hunting for "+tboxes7.value+". I like to spend my time "+tboxes8.value+" or "+tboxes9.value+". When parents go on vacation, they spend their time eating three "+tboxes10.value+" a day, and fathers play golf,and mothers sit around"+tboxes11.value+".\n");

    madlibbox.appendChild(text1);

    let resetbutton=document.createElement("button");
    resetbutton.setAttribute("id","button-reset");
    resetbutton.textContent= "Reset";
    resetbutton.style.marginTop="10%";

    resetbutton.style.backgroundColor="black";
    resetbutton.style.color= "blueviolet";
    resetbutton.style.padding="5% 5%";
    

 

    madlibbox.appendChild(resetbutton);
      

     let myResetButton=document.getElementById("button-reset");
  
     myResetButton.addEventListener("click",showContent);

  
}

amountOFClicks++;

if (amountOFClicks== 1){

myB.addEventListener("click", hideContent);
myB.addEventListener("click",generateMadlib );
}

