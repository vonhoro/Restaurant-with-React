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
            Items:Item,
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
       let Nums = this.state.Nums;
       let check = Nums.filter((vale)=>{
          return vale > 0;
       });
      
      let Form = (check.length > 0)? 'Form-Space' : 'Invisible'
      let Order = (check.length > 0)? 'Invisible' : 'Order-Squares'
       this.setState({
            Form:Form,
            Order:Order,
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
                  <p>{this.state.Items[0].Name}</p>
                  <p>{this.state.Items[0].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[0]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(0,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[1].Name}</p>
                  <p>{this.state.Items[1].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[1]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(1,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[2].Name}</p>
                  <p>{this.state.Items[2].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[2]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(2,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[3].Name}</p>
                  <p>{this.state.Items[3].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item[3]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(3,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[4].Name}</p>
                  <p>{this.state.Items[4].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item[4]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(4,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[5].Name}</p>
                  <p>{this.state.Items[5].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item[5]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(5,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[6].Name}</p>
                  <p>{this.state.Items[6].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Item[6]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(6,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[7].Name}</p>
                  <p>{this.state.Items[7].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[7]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(7,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[8].Name}</p>
                  <p>{this.state.Items[8].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[8]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(8,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[9].Name}</p>
                  <p>{this.state.Items[9].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[9]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(9,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[10].Name}</p>
                  <p>{this.state.Items[10].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[10]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(10,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[11].Name}</p>
                  <p>{this.state.Items[11].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[11]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(11,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[12].Name}</p>
                  <p>{this.state.Items[12].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[12]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(12,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[13].Name}</p>
                  <p>{this.state.Items[13].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[13]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(13,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[14].Name}</p>
                  <p>{this.state.Items[14].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[14]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(14,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[15].Name}</p>
                  <p>{this.state.Items[15].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[15]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(15,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[16].Name}</p>
                  <p>{this.state.Items[16].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[16]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(16,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[17].Name}</p>
                  <p>{this.state.Items[17].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[17]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(17,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[18].Name}</p>
                  <p>{this.state.Items[18].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[18]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(18,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[19].Name}</p>
                  <p>{this.state.Items[19].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[19]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(19,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[20].Name}</p>
                  <p>{this.state.Items[20].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[20]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(20,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[21].Name}</p>
                  <p>{this.state.Items[21].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[21]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(21,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[22].Name}</p>
                  <p>{this.state.Items[22].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[22]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(22,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[23].Name}</p>
                  <p>{this.state.Items[23].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[23]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(23,e)}
                  />
            </div>

      </div>
      <div className="Order-Item">
      
            <div className="Order-Square">
                  <p>{this.state.Items[24].Name}</p>
                  <p>{this.state.Items[24].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[24]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(24,e)}
                  />
            </div>

      </div>
      <div className="Order-Item-Last">
      
            <div className="Order-Square">
                  <p>{this.state.Items[25].Name}</p>
                  <p>{this.state.Items[25].Price}$ each</p>
            </div>
            
            <div className="Order-Amount">
                  <input 
                        type="number"
                        name="Items[25]"
                        min="0" 
                        max="20"
                        defaultValue="0"
                        onChange={(e)=>this.changesValuesOrder(25,e)}
                  />
            </div>

      </div>
    
      <div className="Order-Item-Total">
      
      <h1 className={(Nums[0] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[0].Name} x{this.state.Items[0].Quantity}</h1>   
 
      <h1 className={(Nums[1] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[1].Name} x{this.state.Items[1].Quantity}</h1>   
   
   
      <h1 className={(Nums[2] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[2].Name} x{this.state.Items[2].Quantity}</h1>
   
   
      <h1 className={(Nums[3] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[3].Name} x{this.state.Items[3].Quantity}</h1>
   
   
      <h1 className={(Nums[4] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[4].Name} x{this.state.Items[4].Quantity}</h1>
   
   
      <h1 className={(Nums[5] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[5].Name} x{this.state.Items[5].Quantity}</h1>
   
   
      <h1 className={(Nums[6] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[6].Name} x{this.state.Items[6].Quantity}</h1>
   
   
      <h1 className={(Nums[7] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[7].Name} x{this.state.Items[7].Quantity}</h1>
   
   
      <h1 className={(Nums[8] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[8].Name} x{this.state.Items[8].Quantity}</h1>
   
   
      <h1 className={(Nums[9] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[9].Name} x{this.state.Items[9].Quantity}</h1>
   
   
      <h1 className={(Nums[10] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[10].Name} x{this.state.Items[10].Quantity}</h1>
   
   
      <h1 className={(Nums[11] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[11].Name} x{this.state.Items[11].Quantity}</h1>
   
   
      <h1 className={(Nums[12] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[12].Name} x{this.state.Items[12].Quantity}</h1>
   
   
      <h1 className={(Nums[13] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[13].Name} x{this.state.Items[13].Quantity}</h1>
   
   
      <h1 className={(Nums[14] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[14].Name} x{this.state.Items[14].Quantity}</h1>
   
   
      <h1 className={(Nums[15] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[15].Name} x{this.state.Items[15].Quantity}</h1>
   
   
      <h1 className={(Nums[16] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[16].Name} x{this.state.Items[16].Quantity}</h1>
   
   
      <h1 className={(Nums[17] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[17].Name} x{this.state.Items[17].Quantity}</h1>
   
   
      <h1 className={(Nums[18] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[18].Name} x{this.state.Items[18].Quantity}</h1>
   
   
      <h1 className={(Nums[19] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[19].Name} x{this.state.Items[19].Quantity}</h1>
   
   
      <h1 className={(Nums[20] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[20].Name} x{this.state.Items[20].Quantity}</h1>
   
   
      <h1 className={(Nums[21] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[21].Name} x{this.state.Items[21].Quantity}</h1>
   
   
      <h1 className={(Nums[22] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[22].Name} x{this.state.Items[22].Quantity}</h1>
   
   
      <h1 className={(Nums[23] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[23].Name} x{this.state.Items[23].Quantity}</h1>
   
   
      <h1 className={(Nums[24] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[24].Name} x{this.state.Items[24].Quantity}</h1>
   
   
      <h1 className={(Nums[25] === 0)? 'Invisible' : 'Listed'}> {this.state.Items[25].Name} x{this.state.Items[25].Quantity}</h1>
      
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
      
          <h1 className={(Nums[0] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[0].Name}</h1>
          <h1 className={(Nums[0] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[0].Price} x{this.state.Items[0].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[1] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[1].Name}</h1>
          <h1 className={(Nums[1] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[1].Price} x{this.state.Items[1].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[2] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[2].Name}</h1>
          <h1 className={(Nums[2] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[2].Price} x{this.state.Items[2].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[3] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[3].Name}</h1>
          <h1 className={(Nums[3] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[3].Price} x{this.state.Items[3].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[4] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[4].Name}</h1>
          <h1 className={(Nums[4] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[4].Price} x{this.state.Items[4].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[6] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[6].Name}</h1>
          <h1 className={(Nums[6] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[6].Price} x{this.state.Items[6].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[7] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[7].Name}</h1>
          <h1 className={(Nums[7] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[7].Price} x{this.state.Items[7].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[8] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[8].Name}</h1>
          <h1 className={(Nums[8] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[8].Price} x{this.state.Items[8].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[9] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[9].Name}</h1>
          <h1 className={(Nums[9] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[9].Price} x{this.state.Items[9].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[10] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[10].Name}</h1>
          <h1 className={(Nums[10] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[10].Price} x{this.state.Items[10].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[11] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[11].Name}</h1>
          <h1 className={(Nums[11] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[11].Price} x{this.state.Items[11].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[12] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[12].Name}</h1>
          <h1 className={(Nums[12] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[12].Price} x{this.state.Items[12].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[13] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[13].Name}</h1>
          <h1 className={(Nums[13] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[13].Price} x{this.state.Items[13].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[14] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[14].Name}</h1>
          <h1 className={(Nums[14] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[14].Price} x{this.state.Items[14].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[15] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[15].Name}</h1>
          <h1 className={(Nums[15] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[15].Price} x{this.state.Items[15].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[16] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[16].Name}</h1>
          <h1 className={(Nums[16] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[16].Price} x{this.state.Items[16].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[17] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[17].Name}</h1>
          <h1 className={(Nums[17] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[17].Price} x{this.state.Items[17].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[18] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[18].Name}</h1>
          <h1 className={(Nums[18] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[18].Price} x{this.state.Items[18].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[19] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[19].Name}</h1>
          <h1 className={(Nums[19] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[19].Price} x{this.state.Items[19].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[20] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[20].Name}</h1>
          <h1 className={(Nums[20] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[20].Price} x{this.state.Items[20].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[21] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[21].Name}</h1>
          <h1 className={(Nums[21] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[21].Price} x{this.state.Items[21].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[22] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[22].Name}</h1>
          <h1 className={(Nums[22] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[22].Price} x{this.state.Items[22].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[23] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[23].Name}</h1>
          <h1 className={(Nums[23] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[23].Price} x{this.state.Items[23].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[24] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[24].Name}</h1>
          <h1 className={(Nums[24] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[24].Price} x{this.state.Items[24].Quantity}</h1>   
      
   
   
          <h1 className={(Nums[25] === 0)? 'Invisible' : 'Receipt-Item'}> {this.state.Items[25].Name}</h1>
          <h1 className={(Nums[25] === 0)? 'Invisible' : 'Receipt-Item'}> ${this.state.Items[25].Price} x{this.state.Items[25].Quantity}</h1>   
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
