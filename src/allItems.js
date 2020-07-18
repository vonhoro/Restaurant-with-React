import Arepa from './IMG/food/Main/I1.jpg';
import Barramundi from './IMG/food/Main/I2.jpg';
import Biryani from './IMG/food/Main/I3.jpg';
import BoeufBourguignon from './IMG/food/Main/I4.jpg';
import CacioEPepe from './IMG/food/Main/I5.jpg';
import FriedChicken from './IMG/food/Main/I6.jpg';
import Hamburger from './IMG/food/Main/I7.jpg';
import Paella from './IMG/food/Main/I8.jpg';
import Pho from './IMG/food/Main/I9.jpg';
import Tacos from './IMG/food/Main/I10.jpg';
import SomTam from './IMG/food/Main/I11.jpg';
import Smorrebrod from './IMG/food/Main/I12.jpg';
import Ramen from './IMG/food/Main/I13.jpg';
import Raclette from './IMG/food/Main/I14.jpg';
import Poutine from './IMG/food/Main/I15.jpg';
import Pizza from './IMG/food/Main/I16.jpg';
import CinnamonPancakes from './IMG/food/Desserts/I1.jpg';
import Pavlova from './IMG/food/Desserts/I2.jpg';
import CaramelFolhi from './IMG/food/Desserts/I3.jpg';
import Pirini from './IMG/food/Desserts/I4.jpg';
import Toffee from './IMG/food/Desserts/I5.jpg';
import Brownie from './IMG/food/Desserts/I6.jpg';
import Soda from './IMG/food/Drinks/I1.jpeg';
import Beer from './IMG/food/Drinks/I2.jpg';
import Juice from './IMG/food/Drinks/I3.jpg';
import Water from './IMG/food/Drinks/I4.jpg';
let ImgsM = [
            Arepa,
            Barramundi,
            Biryani,
            BoeufBourguignon,
            CacioEPepe,
            FriedChicken,
            Hamburger,
            Paella,
            Pho,
            Tacos,
            SomTam,
            Smorrebrod,
            Ramen,
            Raclette,
            Poutine,
            Pizza
         ];
let PricesM = [
               1,
               3,
               4,
               5,
               6,
               4,
               4,
               5,
               3,
               2,
               4,
               3.2,
               3.5,
               2.8,
               1.9,
               7
            ];
let NamesM = [
            'Arepa',
            'Barramundi',
            'Biryani',
            'Boeuf Bourguignon',
            'Cacio e Pepe',
            'Fried Chicken',
            'Hamburger',
            'Paella',
            'Pho',
            'Tacos',
            'Som Tam',
            'Smorrebrod',
            'Ramen',
            'Raclette',
            'Poutine',
            'Pizza'
         ];


//Desserts
let ImgsDt = [
            CinnamonPancakes,
            Pavlova,
            CaramelFolhi,
            Pirini,
            Toffee,
            Brownie          
          ];
let NamesDt = [
            'Cinnamon Pancakes',
            'Pavlova',
            'Caramel Folhi',
            'Pirini',
            'Toffee',
            'Brownie'          
          ];
let PricesDt = [
               4,
               5,
               4.5,
               4.8,
               3,
               4
              ];

//Drinks

let ImgsDk = [Soda,Beer,Juice,Water];
let NamesDk = ['Soda','Beer','Juice','Bottle of water'];
let PricesDk = [2,2.5,2.5,1];


//Item Maker

function itemCreator(IMG,name,price,visible,amount){
   let Img = IMG;
   let Name = name;
   let Price = price;
   let Description = `This is a ${name}, its price is $ ${Price}`;
   let Visible = visible;
   let Quantity = amount;
   return {Img,Name,Price,Description,Visible,Quantity}
}

function Items(Type){
   let ItemsM =[];
   for( let i = 0; i < 16; i++){   
      let Item = itemCreator(ImgsM[i],NamesM[i],PricesM[i],true,0);
      ItemsM.push(Item);
   }
   
   let ItemsDt =[];
   for( let i = 0; i < 6; i++){   
      let Item = itemCreator(ImgsDt[i],NamesDt[i],PricesDt[i],true,0);
      ItemsDt.push(Item);  
   }
   
   let ItemsDk =[];
   for( let i = 0; i < 4; i++){   
      let Item = itemCreator(ImgsDk[i],NamesDk[i],PricesDk[i],true,0);
      ItemsDk.push(Item);
   }
   let tempItems = ItemsM.concat(ItemsDk);
   let AllItems = tempItems.concat(ItemsDt);
   if(Type === 'Meals') return ItemsM;
   if(Type === 'Desserts') return ItemsDt;
   if(Type === 'Drinks') return ItemsDk;
   if(Type === 'All') return AllItems;
   
   
}
export default Items