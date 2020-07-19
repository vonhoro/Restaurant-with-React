import React from 'react';
import Items from './allItems';
//Meals
let ItemsM =Items('Meals');

//dessers

let ItemsDt = Items('Desserts')

//Drinks

let ItemsDk = Items('Drinks');

 //The menu
class Menu extends React.Component{
    constructor(props){
       super(props)
       this.state={
          name:'Meals',
          Color:'60deg,#893AA0,#BD2A0F',
          Items:ItemsM,
          Food:'Food-Item',
          Desserts:'Show-Left',
          Drinks:'Show-Right',
          Main:'Invisible',
          }
    }
    toggleVisibility = (z,e) =>{
      let Items = this.state.Items
      Items[z].Visible = !Items[z].Visible
      
      this.setState({Items:Items })

       
    }
 
    changeToMain = (z,e) => {
       let Position =(e.target.className === 'Inside') ? 
                    e.target.parentElement.className :
                    e.target.className;
       let DessertP = (z === 'Invisible')? Position : z;
       let DrinksP = (DessertP === 'Show-Left') ? 'Show-Right' : 'Show-Left';
       this.setState({
          Items:ItemsM,
          Food:'Food-Item',
          Desserts:DessertP,
          Drinks:DrinksP,
          Main:'Invisible',
          name:'Meals',
          Color:'60deg,#893AA0,#BD2A0F',
       });
       
    }
    changeToDessert = (z,e) =>{
       
       let Position =(e.target.className === 'Inside') ? 
                    e.target.parentElement.className :
                    e.target.className;
       let MainP = (z === 'Invisible')? Position : z;
       let DrinksP = (MainP === 'Show-Left') ? 'Show-Right' : 'Show-Left';
       this.setState({
          Items:ItemsDt,
          Food:'Dessert',
          Desserts:'Invisible',
          Main:MainP,
          Drinks:DrinksP,
          name:'Desserts',
          Color:'60deg,#6834AD,#43276d',
    })
       
    }
    changeToDrinks = (z,e) =>{
       let Position =(e.target.className === 'Inside') ? 
                    e.target.parentElement.className :
                    e.target.className;
      let DessertP = (z === 'Invisible')? Position : z;
      let MainP = (DessertP === 'Show-Left') ? 'Show-Right' : 'Show-Left';
       this.setState({
          Items:ItemsDk,
          Food:'Invisible',
          Desserts:DessertP,
          Main:MainP,
          Drinks:'Invisible',
          Color:'60deg,#079278,#276d6d',
          name:'Drinks'
    })
    }

    render(){
       return(
     <div>
          < h1 className = "Food-type" style={{background:`linear-gradient(${this.state.Color})`}}>{this.state.name}</ h1 >
        <div className="Menu-Items" style={{background:`linear-gradient(${this.state.Color})`}}>
      
        <div className={this.state.Desserts}id='Desserts' onClick={(e)=>this.changeToDessert(this.state.Main,e)}>
          <p className="Inside">Desserts</p> <p className="Inside">Desserts</p> <p className="Inside">Desserts</p> <p className="Inside">Desserts</p> 
        </div>
        
        <div className={this.state.Main}id='Main' onClick={(e)=>this.changeToMain(this.state.Desserts,e)}>
          <p className="Inside">Meals</p> <p className="Inside">Meals</p> <p className="Inside">Meals</p> <p className="Inside">Meals</p> 
        </div>
        
        <div className={this.state.Drinks}id='Drinks' onClick={(e)=>this.changeToDrinks(this.state.Desserts,e)}>
          <p className="Inside">Drinks</p> <p className="Inside">Drinks</p> <p className="Inside">Drinks</p> <p className="Inside">Drinks</p>
        </div>
        
        
          {this.state.Items.map((item,index)=>(
          
                    <div className="Food-Item" name={item.Name}>
                              <img src = {item.Img} className={(item.Visible)? 'Food': 'Invisible'} 
                              onClick={(e)=>this.toggleVisibility(index,e)} alt={item.Name} />
                    
                              <div className={(!item.Visible)? 'Description': 'Invisible'}
                              onClick={(e)=>this.toggleVisibility(index,e)}><p>{item.Description}</p></div>
                    </div>

          ))}
        
        
            </div>
     </div>
     )
     }
 }
 export default Menu;