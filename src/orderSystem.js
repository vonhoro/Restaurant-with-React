import React from 'react';
import Items from './allItems';
//Meals
const Item =Items('All');
let Nums = Array.from(Array(26)).map(() => 0)
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
     
       let date = new Date();
       
       const month = (date.getMonth() + 1).toString().padStart(2, '0');
       const day = date.getDate().toString().padStart(2,0); 
       const hours = date.getHours().toString().padStart(2,0); 
       const minutes = date.getMinutes().toString().padStart(2,0); 
       
       let displayDate = `${date.getFullYear()}-${month}-${day}  ${hours}:${minutes}`;
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
    
      Nums.forEach((num, index) => {
            Nums[index] = 0
            e.target.parentElement.parentElement.children[index].lastChild.lastChild.value = '0' 
        })
       this.setState({Nums:Nums})
    }
    
    sendForm = () =>{
       let Nums = this.state.Nums;
       const check = Nums.filter((vale)=> vale > 0);
       
      
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
      const tempTotal = this.state.Nums.reduce((acumm,current) => {
         return acumm + current
      }, 0);
      
      const Total = parseFloat(tempTotal.toFixed(2));
      
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
         {this.state.Items.slice(0,25).map((item,index)=> (
            <div className="Order-Item" key={item.id}>
                  <div className="Order-Square">
                        <p>{item.Name}</p>
                        <p>{item.Price}$ each</p>
                  </div>

                  <div className="Order-Amount">
                        <input
                        type="number"
                        name={`Items[${index}]`}
                        min="0"
                        max="20"
                        defaultValue="0"
                        onChange={(e) =>
                              this.changesValuesOrder(index, e)
                        }
                        />
                  </div>
            </div>
         ))}
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
                        onChange={(e) =>
                              this.changesValuesOrder(25, e)
                        }
                        />
                  </div>
            </div>
      
      
      <div className="Order-Item-Total">
            {this.state.Items.map((Item, index) => (
            <h1
                  className={
                        Nums[index] === 0 ? 'Invisible' : 'Listed'
                  }
            >
                  {' '}
                  {Item.Name} x{Item.Quantity}
            </h1>
            ))}
      
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
      {this.state.Items.map((item,index) =>(
      <div key = {item.id} className={(Nums[index] === 0)? 'Invisible' : 'Receipt-Item-container'}>
      
      <h1 className="Receipt-Item"> {item.Name}</h1>
      
      <h1 className="Receipt-Item"> 
      ${item.Price} x{item.Quantity}</h1> 
      
      </div>
      ))}
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