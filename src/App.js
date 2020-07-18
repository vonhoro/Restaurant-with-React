import React from 'react';
import logo from './IMG/logo.png';
import deliver from './IMG/deliveryCar.jpeg';
import './App.css';
import Menu from './Menu';
import Orders from './orderSystem';
const Tab1 = (props)=>{
    return(
        <div className={props.tabState} id="Pres">
          <h1 className="title" > Us </h1>
          <p className="Para"> 
            We are a online Restaurant that only do
            deliveries.Our food is of best quality and we work 25 / 8 so you can enjoy your meal wherever you are and any time, even if you are at school, at work, at the hospital, or drunk without a sense of self alone in park at 2am.
          </p>
          <div className="Img-container">
            < img src = {deliver}className = "Deliver-img" alt = "deliver" />
          </div>
          <p className="Para">
            We use our Super Jumbo Car to make the food in the road, so you will have a recently make food at any time! 
          </p>
        </div>
   );
}
const Tab2 = (props) =>{
   
   return(
          <div className = {props.tabState}>
             <Menu />
          </div>
   
   );
   
   
}

const Tab3 = (props) =>{
    return(
        <div className = {props.tabState} id={props.tabState} >
          <Orders />
        </div>
 
   );
   
   
}




class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        tab1:'Tab',
        tab2:'Invisible',
        tab3:'Invisible',
        TabH1:'Selected',
        TabH2:'Tab-element',
        TabH3:'Tab-element'
    }  
  }
  changeToTab1 = () =>{
    this.setState({
                  tab1:'Tab',
                  tab2:'Invisible',
                  tab3:'Invisible',
                  TabH1:'Selected',
                  TabH2:'Tab-element',
                  TabH3:'Tab-element'
    });         
  }
  changeToTab2 = () =>{
    this.setState({
                  tab1:'Invisible',
                  tab2:'Tab',
                  tab3:'Invisible',
                  TabH1:'Tab-element',
                  TabH2:'Selected',
                  TabH3:'Tab-element'
    });         
  }
  changeToTab3 = () =>{
    this.setState({
                  tab1:'Invisible',
                  tab2:'Invisible',
                  tab3:'Tab',
                  TabH1:'Tab-element',
                  TabH2:'Tab-element',
                  TabH3:'Selected'
    }); 
  }
  render() {
    return ( 
      <div>
        <div className ='Tab-container' >
          <h1 className={this.state.TabH1} onClick={this.changeToTab1}> Us </h1>
          <h1 className={this.state.TabH2} onClick={this.changeToTab2}> Menu</h1>
          <h1 className={this.state.TabH3} onClick={this.changeToTab3}> Order </h1>
        </div>
        <Tab1 tabState ={this.state.tab1}/>
        <Tab2 tabState ={this.state.tab2}/>
        <Tab3 tabState ={this.state.tab3}/>
      </div>
    );
  }
}

function App() {
    return (
         < div className = "App" >
             < header className = "App-header" >
             < img src = {
            logo
        }
        className = "App-logo" alt = "logo" /  >
            
                  </header>
                 <Tab />
           
                </div>
              );
}
export default App;
