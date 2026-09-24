 




import { HeaderScrollEffect } from "./Ui/Header-Scrool-Style.js";
import { InitializeCoffeeMenue } from "./Ui/Coffee-Menue-Carousel.js";
import { toggle_label,NavBar} from "./Market-Elements.js"; 
import { NavAppear,NavDisappear } from "../Settings-Bar-Silde.js";

import { RedHeart,TransparentHeart } from "./Ui/Like-effect.js";
import { MenueCoffee_Heart } from "./Market-Elements.js";
import { Search } from "./Input-Search-Display.js";
import { CreateElement } from "./CretaeInput.js";
import { Coffees } from "../OrderBuilder/Data/Coffee.js";
import { SearchResult_Container, SearchForCoffee } from "./Market-Elements.js";
import { URL_Transport } from "./Ui/URL-Handeling.js";
import { Square } from "./Market-Elements.js";
import { SelectLiked } from "./Ui/Select-Liked.js";
import { DeseelectLiked } from "./Ui/Deselect-Liked.js";
import { LikedCoffeesArray,GetLikedStorage } from "../Favorites-Folder/Data/Favorits-Data.js";


window.addEventListener("load",()=>{

  //these lines controll the animation of the search bar and the header(Line 26 to 35) 

 
              const ResultTitle=document.createElement("div");

                  ResultTitle.textContent="COFFEES";

             ResultTitle.className="ResultTitle";

               SearchResult_Container.appendChild(ResultTitle);



                           GetLikedStorage();
                         
  //these lines finds out if a coffee is liked to bring back  the Style of the heart at page load (Line 26 to 35) 

              MenueCoffee_Heart.forEach(h=>{

              let CoffeeContainer=h.closest(".coffe-container") || h.closest(".Popular-container");

                 if(LikedCoffeesArray.includes(CoffeeContainer.dataset.name)){
                        
                         RedHeart(h);
                         h.dataset.Clicked="true";

                 }




              });




});








export let ToggleClicked=false;

window.addEventListener("scroll",()=>{

HeaderScrollEffect();

});

 let InputsNameArray=[];

InitializeCoffeeMenue();




SearchForCoffee.addEventListener("input",()=>{
    
  InputsNameArray=Search();

  if(InputsNameArray.length==0)return;
         SearchResult_Container.style.opacity="1";
                  SearchResult_Container.style.pointerEvents="all";

                    Square.style.opacity="1";
                                        Square.style.poi="1";

   
  


 CreateElement(InputsNameArray,Coffees);

if(SearchForCoffee.value==""){

  SearchResult_Container.innerHTML="";


}




});

toggle_label.addEventListener("click",()=>{

  if(ToggleClicked){
    NavDisappear(NavBar);
    ToggleClicked=!ToggleClicked;
  }
  else if(!ToggleClicked){
       NavAppear(NavBar);
           ToggleClicked=!ToggleClicked;

  }

});

SearchResult_Container.addEventListener("click",(event)=>{

  let ChoosedInput=event.target.closest(".CoffeeResult");

               if(!ChoosedInput)return;

      let InputsName=ChoosedInput.querySelector(".ResultName");

URL_Transport(InputsName.textContent);



});




MenueCoffee_Heart.forEach(heart=>{
heart.dataset.Clicked=false; 

heart.addEventListener("click",(e)=>{
  

e.stopPropagation();
e.preventDefault();

let ClickedHeart=e.currentTarget.closest(".MenueCoffee-Heart");
if(!ClickedHeart)return;

if(heart.dataset.Clicked=="false"){

  
RedHeart(heart);
heart.dataset.Clicked="true";

 SelectLiked(e);

}






   else if(heart.dataset.Clicked=="true"){

         

TransparentHeart(heart);
heart.dataset.Clicked="false";

DeseelectLiked(e);

}


});


});
















