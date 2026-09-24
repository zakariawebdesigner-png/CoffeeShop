
import { Coffees } from "../../OrderBuilder/Data/Coffee.js";
import { FavoritesCoffees_Container } from "./Favorites-Elements.js";

function CreateFavorite(Array){

 let CreatedFavs=[];
Array.forEach(a=>{

Coffees.forEach(c=>{

if(a==c.Name){


const FavoriteCoffee=document.createElement("div");

FavoriteCoffee.className="FavoriteCoffee";

FavoriteCoffee.dataset.name=c.Name;

FavoritesCoffees_Container.appendChild(FavoriteCoffee);

const FavoritePic=document.createElement("div");

    FavoritePic.className="FavoritPic";

    FavoritePic.style.backgroundImage=`url("${c.Image}")`;
    console.log(c.Image);

     FavoriteCoffee.appendChild(FavoritePic);

const FavoritesInformations=document.createElement("div");

 FavoritesInformations.className="FavoritesInformations";
    
       FavoriteCoffee.appendChild(FavoritesInformations);


   const Name_Discription_Price=document.createElement("div");

 Name_Discription_Price.className="Name-Discription-Price";


     FavoritesInformations.appendChild(Name_Discription_Price);


        const FavoriteName=document.createElement("p");

          FavoriteName.className="FavoriteName";

            FavoriteName.textContent=`${c.Name}`;

     
                Name_Discription_Price.appendChild(FavoriteName);


        const FavoriteDiscription=document.createElement("p");
                
     FavoriteDiscription.className="FavoriteDiscription";
    FavoriteDiscription.textContent="Rich  Bold and perfectly  Roasted for true coffee lovers";

                Name_Discription_Price.appendChild(FavoriteDiscription);


                const Price_For_Favorite=document.createElement("div");

Price_For_Favorite.className="Price-For-Favorite";

 Price_For_Favorite.textContent=`${c.Price}`+"$";

   Name_Discription_Price.appendChild(Price_For_Favorite);


   const ButtonsFavorite=document.createElement("div"); 

ButtonsFavorite.className="ButtonsFavorite";
    
 FavoriteCoffee.appendChild(ButtonsFavorite);

     const HeartI=document.createElement("i"); 

     HeartI.className="fa-solid fa-heart";

     ButtonsFavorite.appendChild(HeartI);

const OrderFavorit=document.createElement("button"); 

OrderFavorit.className="OrderFavorit";
     
OrderFavorit.textContent="Order Now";

 ButtonsFavorite.appendChild(OrderFavorit);


  const Trash=document.createElement("i"); 

     Trash.className="fa-solid fa-trash-can";
     Trash.id="trash";

     ButtonsFavorite.appendChild(Trash);


      CreatedFavs.push(FavoriteCoffee);
     


}


});


});

    return CreatedFavs;
}


export{CreateFavorite}