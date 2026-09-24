   

import { Coffees } from "../OrderBuilder/Data/Coffee.js";

import { SearchForCoffee,SearchResult_Container,Square } from "./Market-Elements.js";


function Search(){

    let Name=[];
    Coffees.forEach(coff=>{
                 
                   if(SearchForCoffee.value==""){
                    
                             SearchResult_Container.style.opacity="0";


                                        Square.style.opacity="0";

                    return;
                }

                      
             if(coff.Name.toLowerCase().startsWith(SearchForCoffee.value.toLowerCase())){
                console.log("letter:"+SearchForCoffee.value);
                   console.log("Coffee:"+coff.Name);

                    Name.push(coff.Name);
                  

             }

             else{
                return [];
             }

    });

    return Name;
 

};
export{Search}