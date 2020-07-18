import React from 'react';
import Items from './allItems';
//Meals
let Item =Items('All');

let Nums=[];
for (let i=0;i<26;i++){
   Nums.push(0);
}
 //The menu
 
 class Orders extends React.Component{
    constructor(props){
       super(props)
       this.state={
            Order:'Order-Squares',
            Form:'Invisible',
            Receipt:'Invisible',
            Paying:'Invisible',
            ShowBotton:true,
            Item1:Item[0],
            Item2:Item[1],
            Item3:Item[2],
            Item4:Item[3],
            Item5:Item[4],
            Item6:Item[5],
            Item7:Item[6],
            Item8:Item[7],
            Item9:Item[8],
            Item10:Item[9],
            Item11:Item[10],
            Item12:Item[11],
            Item13:Item[12],
            Item14:Item[13],
            Item15:Item[14],
            Item16:Item[15],
            Item17:Item[16],
            Item18:Item[17],
            Item19:Item[18],
            Item20:Item[19],
            Item21:Item[20],
            Item22:Item[21],
            Item23:Item[22],
            Item24:Item[23],
            Item25:Item[24],
            Item26:Item[25],
            Nums:Nums,
            FirstName:'',
            LastName:'',
            Address:'',
            Phone:'',
            Email:'',
            PaymentMethod:'',
            displayDate:'',
            OrderNumber:0,
            OrderNumberShown:'',
            
       }
    }
    handleSubmit = (e) =>{
       e.preventDefault();
     
       let d = new Date();
       let Month = (d.getMonth()+1 < 10)? '0'+(d.getMonth()+1): (d.getMonth()+1);
       let Day = (d.getDate() < 10)? '0'+d.getDate(): d.getDate();
       let Hours = (d.getHours() < 10)? '0'+d.getHours(): d.getHours();
       let Minutes = (d.getMinutes() < 10)? '0'+d.getMinutes(): d.getMinutes();
       let displayDate = d.getFullYear() + '-'+Month+'-'+Day+' '+Hours+':'+Minutes;
       let OrderNumber = this.state.OrderNumber + 1;
       let OrderNumberShown = OrderNumber/1000000;
       OrderNumberShown = OrderNumberShown.toString()
       OrderNumberShown = OrderNumberShown.substr(2);
       
       this.setState({
            PaymentMethod:e.target[3].value,
            Form:'Invisible',
            Order:'Invisible',
            Receipt:'Receipt',
            Paying:'Invisible',
            ShowBotton:true,
            displayDate:displayDate,
            OrderNumber:OrderNumber,
            OrderNumberShown:OrderNumberShown,
       })
    
    }
    changeValues = (e) => {
       let Nam = e.target.name;
       let Val = e.target.value;
       this.setState({[Nam]: Val})
       
    }
    changesValuesOrder = (z,e) => {
       let Nam = e.target.name;
       let Val = e.target.value;
       Item[z].Quantity = 1;
       Item[z].Quantity = Val*Item[z].Quantity;
       Nums[z] = parseFloat((Item[z].Quantity * Item[z].Price).toFixed(2));
       this.setState({[Nam]:Item[z],
                        Nums:Nums
                        })
    }
    
    Reset = (e) =>{
      
       for(let i =0; i < Nums.length; i++){
          Nums[i]=0;
          e.target.parentElement.parentElement.children[i].lastChild.lastChild.value = "0";
       }
       this.setState({Nums:Nums})
    }
    sendForm = () =>{
      
       this.setState({
            Form:'Form-Space',
            Order:'Invisible',
            Receipt:'Invisible',
            Paying:'Invisible'
       })
       
    }
    backForm = () =>{
       let count = this.state.OrderNumber -1;
       this.setState({
            Form:'Form-Space',
            Order:'Invisible',
            Receipt:'Invisible',
            Paying:'Invisible',
            OrderNumber:count
       })
       
    }
       
       
    
    backToOrder = () =>{
       this.setState({
            Form:'Invisible',
            Order:'Order-Squares',
            Receipt:'Invisible',
            Paying:'Invisible'
       })
    }
    checkOut = () => {
     this.setState({
            Form:'Invisible',
            Order:'Invisible',
            Receipt:'Invisible',
            Paying:'Paying'
     })
    }
    showReceipt = () => {
     this.setState({
            Form:'Invisible',
            Order:'Invisible',
            Receipt:'Receipt',
            Paying:'Invisible',
            ShowBotton:true,
            
     })
    }
    Finish = () => {
       this.setState({
            Form:'Invisible',
            Order:'Invisible',
            Receipt:'Receipt',
            Paying:'Invisible',
            ShowBotton:false,
     })
    }
    newOrder = (e) =>{
       //the form
       e.target.parentElement.parentElement.children[0].firstElementChild.reset();
       //the order
       for(let i =0; i < Nums.length; i++){
          Nums[i]=0;
          e.target.parentElement.parentElement.children[1].children[i].lastElementChild.firstElementChild.value = "0";
       }
      this.setState({
            Nums:Nums,
            ShowBotton:true,
            Form:'Invisible',
            Order:'Order-Squares',
            Receipt:'Invisible',
            Paying:'Invisible'
       })
    
      };
    render(){
      let Total = 0;
      this.state.Nums.forEach((Price)=>{
         Total += Price;
      })
      Total = parseFloat(Total.toFixed(2));
      
       return(
     <div>
      <div className={this.state.Form}>
   <form onSubmit={this.handleSubmit}id="add-todo">
   
      <div className="line">          
      <div className="col-label-f">
         <label htmlFor="FirstName">First Name:</label>
      </div>                      
      <div className="col-input-f">

         <input 
            type="text" 
            name="FirstName" 
            required
            autoFocus
            maxLength="20"
            placeholder="Michael"
            onChange={this.changeValues}
         />
      </div>                     
      </div>
      
      <div className="line">          
      <div className="col-label-f">
         <label htmlFor="LastName">last Name:</label>
      </div>                      
      <div className="col-input-f">
            <input 
            type="text" 
            name="LastName"
            required
            maxLength="20"
            placeholder="Jackson"
            onChange={this.changeValues}
         />
      </div>                     
      </div>
      
      <div className="line">          
      <div className="col-label-f">
         <label htmlFor="Address">Address:</label>
      </div>                      
      <div className="col-input-f">
         <textarea 
            onChange={this.changeValues}
            name="Address"
            required 
            placeholder="Where will you recieve the order?"
         />
      </div>                     
      </div> 
       <div className="line">          
      <div className="col-label-f">
      <label htmlFor="paymethod">Payment Method:</label>
      </div>                      
      <div className="col-input-f">
         <select type="text"  name="Paymethod">
            <option value="Credit-Card">Credit Card</option>
            <option value="Bank-Transfer">Bank Transfer</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Zelle">Zelle</option>
            <option value="Paypal">Paypal</option>
            <option value="Cash">Cash</option>
         </select>
      </div>                     
      </div> 
      
      <div className="line">          
      <div className="col-label-f">
         <label htmlFor="Phone">Phone number:</label>
       </div>                      
      <div className="col-input-f">        
         <input 
            type="tel" 
            name="Phone" 
            pattern="[0-9]{3}[-]{1}[0-9]{7}"
            required 
            placeholder="123-1239875"
            onChange={this.changeValues}
         />
      </div>                     
      </div> 
      
      <div className="line">          
      <div className="col-label-f">
         <label htmlFor="Email">Email(Optional):</label>
       </div>                      
      <div className="col-input-f">        
         <input
            type="email" 
            name="Email" 
            placeholder="delicus@delicus.net"
            onChange={this.changeValues}
         />
      </div>                     
      </div>    
       
      
        
      <div id="boton-container-f">
      <input type="submit" className="boton" value="Confirm"/>          
      <button onClick={this.backToOrder} type="button" id="cancel" className="boton">Back</button>
       </div>
         </form>
      </div>
      
      {/* Order       */}
      <div className={this.state.Order}>
      
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item1.Name}</p>
                  <p>{this.state.Item1.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item1"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(0,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item2.Name}</p>
                  <p>{this.state.Item2.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item2"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(1,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item3.Name}</p>
                  <p>{this.state.Item3.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item3"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(2,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item4.Name}</p>
                  <p>{this.state.Item4.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item4"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(3,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item5.Name}</p>
                  <p>{this.state.Item5.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item5"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(4,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item6.Name}</p>
                  <p>{this.state.Item6.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item6"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(5,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item7.Name}</p>
                  <p>{this.state.Item7.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item7"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(6,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item8.Name}</p>
                  <p>{this.state.Item8.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item8"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(7,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item9.Name}</p>
                  <p>{this.state.Item9.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item9"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(8,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item10.Name}</p>
                  <p>{this.state.Item10.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item10"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(9,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item11.Name}</p>
                  <p>{this.state.Item11.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item11"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(10,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item12.Name}</p>
                  <p>{this.state.Item12.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item12"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(11,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item13.Name}</p>
                  <p>{this.state.Item13.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item13"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(12,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item14.Name}</p>
                  <p>{this.state.Item14.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item14"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(13,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item15.Name}</p>
                  <p>{this.state.Item15.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item15"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(14,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item16.Name}</p>
                  <p>{this.state.Item16.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item16"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(15,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item17.Name}</p>
                  <p>{this.state.Item17.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item17"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(16,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item18.Name}</p>
                  <p>{this.state.Item18.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item18"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(17,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item19.Name}</p>
                  <p>{this.state.Item19.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item19"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(18,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item20.Name}</p>
                  <p>{this.state.Item20.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item20"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(19,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item21.Name}</p>
                  <p>{this.state.Item21.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item21"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(20,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item22.Name}</p>
                  <p>{this.state.Item22.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item22"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(21,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item23.Name}</p>
                  <p>{this.state.Item23.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item23"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(22,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item24.Name}</p>
                  <p>{this.state.Item24.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item24"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(23,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Item25.Name}</p>
                  <p>{this.state.Item25.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item25"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(24,e)}
                  />
            </div>

      </div>
      <div className="Order-Item-Last">
      
            <div className="Order-Square">
                  <p>{this.state.Item26.Name}</p>
                  <p>{this.state.Item26.Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item26"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(25,e)}
                  />
            </div>

      </div>
    
      <div className="Order-Item-Total">
      
      <h1 className={(Nums[0] === 0)? 'Invisible' : 'Listed'}> {this.state.Item1.Name} x{this.state.Item1.Quantity}</h1>   
 
      <h1 className={(Nums[1] === 0)? 'Invisible' : 'Listed'}> {this.state.Item2.Name} x{this.state.Item2.Quantity}</h1>   
   
   
      <h1 className={(Nums[2] === 0)? 'Invisible' : 'Listed'}> {this.state.Item3.Name} x{this.state.Item3.Quantity}</h1>
   
   
      <h1 className={(Nums[3] === 0)? 'Invisible' : 'Listed'}> {this.state.Item4.Name} x{this.state.Item4.Quantity}</h1>
   
   
      <h1 className={(Nums[4] === 0)? 'Invisible' : 'Listed'}> {this.state.Item5.Name} x{this.state.Item5.Quantity}</h1>
   
   
      <h1 className={(Nums[5] === 0)? 'Invisible' : 'Listed'}> {this.state.Item6.Name} x{this.state.Item6.Quantity}</h1>
   
   
      <h1 className={(Nums[6] === 0)? 'Invisible' : 'Listed'}> {this.state.Item7.Name} x{this.state.Item7.Quantity}</h1>
   
   
      <h1 className={(Nums[7] === 0)? 'Invisible' : 'Listed'}> {this.state.Item8.Name} x{this.state.Item8.Quantity}</h1>
   
   
      <h1 className={(Nums[8] === 0)? 'Invisible' : 'Listed'}> {this.state.Item9.Name} x{this.state.Item9.Quantity}</h1>
   
   
      <h1 className={(Nums[9] === 0)? 'Invisible' : 'Listed'}> {this.state.Item10.Name} x{this.state.Item10.Quantity}</h1>
   
   
      <h1 className={(Nums[10] === 0)? 'Invisible' : 'Listed'}> {this.state.Item11.Name} x{this.state.Item11.Quantity}</h1>
   
   
      <h1 className={(Nums[11] === 0)? 'Invisible' : 'Listed'}> {this.state.Item12.Name} x{this.state.Item12.Quantity}</h1>
   
   
      <h1 className={(Nums[12] === 0)? 'Invisible' : 'Listed'}> {this.state.Item13.Name} x{this.state.Item13.Quantity}</h1>
   
   
      <h1 className={(Nums[13] === 0)? 'Invisible' : 'Listed'}> {this.state.Item14.Name} x{this.state.Item14.Quantity}</h1>
   
   
      <h1 className={(Nums[14] === 0)? 'Invisible' : 'Listed'}> {this.state.Item15.Name} x{this.state.Item15.Quantity}</h1>
   
   
      <h1 className={(Nums[15] === 0)? 'Invisible' : 'Listed'}> {this.state.Item16.Name} x{this.state.Item16.Quantity}</h1>
   
   
      <h1 className={(Nums[16] === 0)? 'Invisible' : 'Listed'}> {this.state.Item17.Name} x{this.state.Item17.Quantity}</h1>
   
   
      <h1 className={(Nums[17] === 0)? 'Invisible' : 'Listed'}> {this.state.Item18.Name} x{this.state.Item18.Quantity}</h1>
   
   
      <h1 className={(Nums[18] === 0)? 'Invisible' : 'Listed'}> {this.state.Item19.Name} x{this.state.Item19.Quantity}</h1>
   
   
      <h1 className={(Nums[19] === 0)? 'Invisible' : 'Listed'}> {this.state.Item20.Name} x{this.state.Item20.Quantity}</h1>
   
   
      <h1 className={(Nums[20] === 0)? 'Invisible' : 'Listed'}> {this.state.Item21.Name} x{this.state.Item21.Quantity}</h1>
   
   
      <h1 className={(Nums[21] === 0)? 'Invisible' : 'Listed'}> {this.state.Item22.Name} x{this.state.Item22.Quantity}</h1>
   
   
      <h1 className={(Nums[22] === 0)? 'Invisible' : 'Listed'}> {this.state.Item23.Name} x{this.state.Item23.Quantity}</h1>
   
   
      <h1 className={(Nums[23] === 0)? 'Invisible' : 'Listed'}> {this.state.Item24.Name} x{this.state.Item24.Quantity}</h1>
   
   
      <h1 className={(Nums[24] === 0)? 'Invisible' : 'Listed'}> {this.state.Item25.Name} x{this.state.Item25.Quantity}</h1>
   
   
      <h1 className={(Nums[25] === 0)? 'Invisible' : 'Listed'}> {this.state.Item26.Name} x{this.state.Item26.Quantity}</h1>
      
      <h1 className='Total'> Total: ${Total}</h1>
      <button className="Order-Boton1" onClick={this.sendForm}>Confirm</button>
      <button className="Order-Boton2"onClick={this.Reset}>Reset</button>
      </div>
      
      </div>
      
      {/* Receipt    
      */}
      <div className={this.state.Receipt}>
      <div className="Receipt-Holder">
      <div className="Holds-Meta">
            <h1 className="Receipt-Meta-Item">{this.state.displayDate}</h1> 
            <h1 className="Receipt-Meta-Item">#{this.state.OrderNumberShown}</h1> 
      </div>
      <h1 className="Receipt-Item">Ful Name: {this.state.FirstName} {this.state.LastName}</h1> 
      
      <h1 className="Receipt-Item">Phone Number: {this.state.Phone}</h1> 
      
      <h1 className="Receipt-Item">Email: {this.state.Email}</h1> 
      
      <h1 className="Receipt-Item">Address: {this.state.Address}</h1> 
      
      <h1 className="Receipt-Item">Order:</h1> 
           
      <div className="Orders-Listing">
      
          <h1 className={(Nums[0] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item1.Name}</h1>
          <h1 className={(Nums[0] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item1.Price} x{this.state.Item1.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[1] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item2.Name}</h1>
          <h1 className={(Nums[1] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item2.Price} x{this.state.Item2.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[2] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item3.Name}</h1>
          <h1 className={(Nums[2] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item3.Price} x{this.state.Item3.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[3] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item4.Name}</h1>
          <h1 className={(Nums[3] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item4.Price} x{this.state.Item4.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[4] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item5.Name}</h1>
          <h1 className={(Nums[4] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item5.Price} x{this.state.Item5.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[6] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item7.Name}</h1>
          <h1 className={(Nums[6] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item7.Price} x{this.state.Item7.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[7] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item8.Name}</h1>
          <h1 className={(Nums[7] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item8.Price} x{this.state.Item8.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[8] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item9.Name}</h1>
          <h1 className={(Nums[8] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item9.Price} x{this.state.Item9.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[9] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item10.Name}</h1>
          <h1 className={(Nums[9] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item10.Price} x{this.state.Item10.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[10] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item11.Name}</h1>
          <h1 className={(Nums[10] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item11.Price} x{this.state.Item11.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[11] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item12.Name}</h1>
          <h1 className={(Nums[11] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item12.Price} x{this.state.Item12.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[12] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item13.Name}</h1>
          <h1 className={(Nums[12] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item13.Price} x{this.state.Item13.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[13] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item14.Name}</h1>
          <h1 className={(Nums[13] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item14.Price} x{this.state.Item14.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[14] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item15.Name}</h1>
          <h1 className={(Nums[14] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item15.Price} x{this.state.Item15.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[15] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item16.Name}</h1>
          <h1 className={(Nums[15] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item16.Price} x{this.state.Item16.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[16] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item17.Name}</h1>
          <h1 className={(Nums[16] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item17.Price} x{this.state.Item17.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[17] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item18.Name}</h1>
          <h1 className={(Nums[17] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item18.Price} x{this.state.Item18.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[18] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item19.Name}</h1>
          <h1 className={(Nums[18] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item19.Price} x{this.state.Item19.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[19] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item20.Name}</h1>
          <h1 className={(Nums[19] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item20.Price} x{this.state.Item20.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[20] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item21.Name}</h1>
          <h1 className={(Nums[20] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item21.Price} x{this.state.Item21.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[21] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item22.Name}</h1>
          <h1 className={(Nums[21] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item22.Price} x{this.state.Item22.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[22] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item23.Name}</h1>
          <h1 className={(Nums[22] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item23.Price} x{this.state.Item23.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[23] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item24.Name}</h1>
          <h1 className={(Nums[23] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item24.Price} x{this.state.Item24.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[24] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item25.Name}</h1>
          <h1 className={(Nums[24] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item25.Price} x{this.state.Item25.Quantity}</h1>   
      
   
   
          <h1 className={(Nums[25] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Item26.Name}</h1>
          <h1 className={(Nums[25] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Item26.Price} x{this.state.Item26.Quantity}</h1>   
      </div>

     <div className="Contain-Total-Receipt"> 
      <h1 className='Total-Receipt'> Total: ${Total}</h1>
      </div>
      </div>
      <div className={(this.state.ShowBotton)? 'receipt-boton-container': 'Invisible'}>
        <button className="receipt-boton" onClick={this.checkOut}>Check Out</button>         
        <button className="receipt-boton" onClick={this.backForm}>Back</button>   
      </div>
      <button className={(this.state.ShowBotton)? 'Invisible' : 'receipt-boton'}onClick={this.newOrder}>New Order</button>
       </div>
       
       <div className={this.state.Paying}>
            <h1>This is the check out for {this.state.PaymentMethod}</h1>
            <h1>Let's figure all went right so click on continue if you paid, if not just click on back to change something</h1>
        <div className="boton-checkout-container">    
             <button className="boton-checkout" onClick={this.showReceipt}>Back </button>
            <button className="boton-checkout" onClick={this.Finish}>Continue </button>
           
       </div>
       </div>
       </div>
       )
       
    }
    
    
 }
 
 export default Orders;