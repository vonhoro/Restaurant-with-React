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
          Item1:ItemsM[0],
          Item2:ItemsM[1],
          Item3:ItemsM[2],
          Item4:ItemsM[3],
          Item5:ItemsM[4],
          Item6:ItemsM[5],
          Item7:ItemsM[6],
          Item8:ItemsM[7],
          Item9:ItemsM[8],
          Item10:ItemsM[9],
          Item11:ItemsM[10],
          Item12:ItemsM[11],
          Item13:ItemsM[12],
          Item14:ItemsM[13],
          Item15:ItemsM[14],
          Item16:ItemsM[15],
          Food:'Food-Item',
          Desserts:'Show-Left',
          Drinks:'Show-Right',
          Main:'Invisible',
          }
    }
    toggleVisibility = (z,e) =>{
      let saveState ='';
      let name = e.target.parentElement.getAttribute('name');
      name = (name===null) ? e.target.parentElement.parentElement.getAttribute('name'):name;
      console.log(saveState);
       switch (name){
         case 'Meals':
         ItemsM[z].Visible = !ItemsM[z].Visible;
         saveState = ItemsM[z];
         break;
         case 'Drinks':
         ItemsDk[z].Visible = !ItemsDk[z].Visible;
         saveState = ItemsDk[z];
         break;
         default:
         ItemsDt[z].Visible = !ItemsDt[z].Visible;
         saveState = ItemsDt[z];
         break;
      }

       switch (z){
          case 0:
          this.setState({
             Item1:saveState
          })
          break;
          case 1:
          this.setState({
             Item2:saveState
          })
          break;
          case 2:
          this.setState({
             Item3:saveState
          })
          break;
          case 3:
          this.setState({
             Item4:saveState
          })
          break;
          case 4:
          this.setState({
             Item5:saveState
          })
          break;
          case 5:
          this.setState({
             Item6:saveState
          })
          break;
          case 6:
          this.setState({
             Item7:saveState
          })
          break;
          case 7:
          this.setState({
             Item8:saveState
          })
          break;
          case 8:
          this.setState({
             Item9:saveState
          })
          break;
          case 9:
          this.setState({
             Item10:saveState
          })
          break;
          case 10:
          this.setState({
             Item11:saveState
          })
          break;
          case 11:
          this.setState({
             Item12:saveState
          })
          break;
          case 12:
          this.setState({
             Item13:saveState
          })
          break;
          case 13:
          this.setState({
             Item14:saveState
          })
          break;
          case 14:
          this.setState({
             Item15:saveState
          })
          break;
          case 15:
          this.setState({
             Item16:saveState
          })
          break;
          default:
       }
    }
 
    changeToMain = (z,e) => {
       let Position =(e.target.className === 'Inside') ? 
                    e.target.parentElement.className :
                    e.target.className;
       let DessertP = (z === 'Invisible')? Position : z;
       let DrinksP = (DessertP === 'Show-Left') ? 'Show-Right' : 'Show-Left';
       this.setState({
          Item1:ItemsM[0],
          Item2:ItemsM[1],
          Item3:ItemsM[2],
          Item4:ItemsM[3],
          Item5:ItemsM[4],
          Item6:ItemsM[5],
          Item7:ItemsM[6],
          Item8:ItemsM[7],
          Item9:ItemsM[8],
          Item10:ItemsM[9],
          Item11:ItemsM[10],
          Item12:ItemsM[11],
          Item13:ItemsM[12],
          Item14:ItemsM[13],
          Item15:ItemsM[14],
          Item16:ItemsM[15],
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
          Item1:ItemsDt[0],
          Item2:ItemsDt[1],
          Item3:ItemsDt[2],
          Item4:ItemsDt[3],
          Item5:ItemsDt[4],
          Item6:ItemsDt[5],
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
          Item1:ItemsDk[0],
          Item2:ItemsDk[1],
          Item3:ItemsDk[2],
          Item4:ItemsDk[3],
          Food:'Invisible',
          Desserts:DessertP,
          Main:MainP,
          Drinks:'Invisible',
          name:'Drinks',
          Color:'60deg,#079278,#276d6d',
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
        
          <div className="Food-Item" name={this.state.name}>
               <img src = {this.state.Item1.Img} className={(this.state.Item1.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(0,e)} alt={this.state.Item1.Name} />
               <div className={(!this.state.Item1.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(0,e)}><p>{this.state.Item1.Description}</p></div>
      </div>
            <div className="Food-Item" name={this.state.name}>
               <img src = {this.state.Item2.Img} className={(this.state.Item2.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(1,e)} alt={this.state.Item2.Name} />
               <div className={(!this.state.Item2.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(1,e)}><p>{this.state.Item2.Description}</p></div>
      </div>
            <div className="Food-Item" name={this.state.name}>
               <img src = {this.state.Item3.Img} className={(this.state.Item3.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(2,e)} alt={this.state.Item3.Name} />
               <div className={(!this.state.Item3.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(2,e)}><p>{this.state.Item3.Description}</p></div>
      </div>
            <div className="Food-Item"  name={this.state.name}>
               <img src = {this.state.Item4.Img} className={(this.state.Item4.Visible)? 'Food': 'Invisible'}  onClick={(e)=>this.toggleVisibility(3,e)} alt={this.state.Item4.Name} />
               <div className={(!this.state.Item4.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(3,e)}><p>{this.state.Item4.Description}</p></div>
      </div>
            <div className={(this.state.Food==='Dessert'|| this.state.Food==='Food-Item')?
                              'Food-Item':'Invisible'
                              }
                              name={this.state.name}>
               <img src = {this.state.Item5.Img} className={(this.state.Item5.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(4,e)} alt={this.state.Item5.Name} />
               <div className={(!this.state.Item5.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(4,e)}><p>{this.state.Item5.Description}</p></div>
      </div>
            <div className={(this.state.Food==='Dessert'|| this.state.Food==='Food-Item')?
                              'Food-Item':'Invisible'
                              }
                               name={this.state.name}>
               <img src = {this.state.Item6.Img} className={(this.state.Item6.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(5,e)} alt={this.state.Item6.Name} />
               <div className={(!this.state.Item6.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(5,e)}><p>{this.state.Item6.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name}>
               <img src = {this.state.Item7.Img} className={(this.state.Item7.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(6,e)} alt={this.state.Item7.Name} />
               <div className={(!this.state.Item7.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(6,e)}><p>{this.state.Item7.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name}>
               <img src = {this.state.Item8.Img} className={(this.state.Item8.Visible)? 'Food': 'Invisible'}  onClick={(e)=>this.toggleVisibility(7,e)} alt={this.state.Item8.Name} />
               <div className={(!this.state.Item8.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(7,e)}><p>{this.state.Item8.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name} >
               <img src = {this.state.Item9.Img} className={(this.state.Item9.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(8,e)} alt={this.state.Item9.Name} />
               <div className={(!this.state.Item9.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(8,e)}><p>{this.state.Item9.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name} >
               <img src = {this.state.Item10.Img} className={(this.state.Item10.Visible)? 'Food': 'Invisible'}onClick={(e)=>this.toggleVisibility(9,e)} alt={this.state.Item10.Name} />
               <div className={(!this.state.Item10.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(9,e)}><p>{this.state.Item10.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name} >
               <img src = {this.state.Item11.Img} className={(this.state.Item11.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(10,e)} alt={this.state.Item11.Name} />
               <div className={(!this.state.Item11.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(10,e)}><p>{this.state.Item11.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name} >
               <img src = {this.state.Item12.Img} className={(this.state.Item12.Visible)? 'Food': 'Invisible'}  onClick={(e)=>this.toggleVisibility(11,e)} alt={this.state.Item12.Name} />
               <div className={(!this.state.Item12.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(11,e)}><p>{this.state.Item12.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name}>
               <img src = {this.state.Item13.Img} className={(this.state.Item13.Visible)? 'Food': 'Invisible'}  onClick={(e)=>this.toggleVisibility(12,e)} alt={this.state.Item13.Name} />
               <div className={(!this.state.Item13.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(12,e)}><p>{this.state.Item13.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name}>
               <img src = {this.state.Item14.Img} className={(this.state.Item14.Visible)? 'Food': 'Invisible'}  onClick={(e)=>this.toggleVisibility(13,e)} alt={this.state.Item14.Name} />
               <div className={(!this.state.Item14.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(13,e)}><p>{this.state.Item14.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name}>
               <img src = {this.state.Item15.Img} className={(this.state.Item15.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(14,e)} alt={this.state.Item15.Name} />
               <div className={(!this.state.Item15.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(14,e)}><p>{this.state.Item15.Description}</p></div>
      </div>
            <div className={(this.state.Food !=='Food-Item') ? 'Invisible' : 'Food-Item'} name={this.state.name}>
               <img src = {this.state.Item16.Img} className={(this.state.Item16.Visible)? 'Food': 'Invisible'} onClick={(e)=>this.toggleVisibility(15,e)} alt={this.state.Item16.Name} />
               <div className={(!this.state.Item16.Visible)? 'Description': 'Invisible'} onClick={(e)=>this.toggleVisibility(15,e)}><p>{this.state.Item16.Description}</p></div>
      </div>
            </div>
     </div>
     )
     }
 }
 export default Menu;