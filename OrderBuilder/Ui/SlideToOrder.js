
    

   export  const SlidingRoad=document.getElementById("SlidingRoad");
      export  const SlideEnd=document.getElementById("SlideEnd");
             


           import { EndCoocking } from "../CalcElements.js";
       export   const SlideButton=document.getElementById("SlideButton");

       import { StopTickingSound,Ticking_SoundPlayer } from "./TickingSoundRepeat.js";
       
   let possition=0;
   let grabOffset=0;
    let Draging=false;
  function Slide(){

    window.addEventListener("load",()=>{
            SlidingRoad.appendChild(SlideButton);
    });

//The Part that is responsible for  sliding the button

               

     SlideButton.addEventListener("pointerdown",(event)=>{
       console.log(Ticking_SoundPlayer());
      if(!Ticking_SoundPlayer())return;

      Draging=true;
              SlideButton.classList.remove("Slow");

        SlideButton.setPointerCapture(event.pointerId);

    const buttonRect = SlideButton.getBoundingClientRect();

        grabOffset = event.clientX - buttonRect.left;
            
        console.log("Draging started");
      
            

          });


            SlideButton.addEventListener("pointermove", (event) => {
              
              if(!Draging)return;
                 const roadRect = SlidingRoad.getBoundingClientRect();

                  possition = event.clientX - roadRect.left - grabOffset;

               possition = Math.min(possition, 150);

          possition = Math.min(possition, 145);
              possition = Math.max(possition, 0);
               if(possition==145){
                    possition=145;
               }

          SlideButton.style.left=`${possition}px`;
        console.log("Moving");

        
          
    });


      SlideButton.addEventListener("pointerup", (event) => {

           Draging=false; 

         StopTickingSound();

        const buttonRect = SlideButton.getBoundingClientRect();
const targetRect = SlideEnd.getBoundingClientRect();

const distance = Math.abs(buttonRect.left - targetRect.left);


          if(distance<20){


            SlideEnd.appendChild(SlideButton);
          
                  EndCoocking.currentTime=0;
                  EndCoocking.play();
               
                  console.log(SlideEnd);
                  SlideEnd.style.justifyContent="center";
                  SlideEnd.style.alignItems="center";
                  SlideButton.style.left=`${0}px`;

               SlideButton.style.pointerEvents="none";

          }

        
          else{
            
               SlideButton.style.left = "0px";
               SlideButton.classList.add("Slow");
               if(Number(SlideButton.style.left) ==0){
                 SlidingRoad.appendChild(SlideButton);
                 
                  
               }

               
       
          

          }

        

    });












}








export{Slide}
     


