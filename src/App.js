import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import { connect } from 'react-redux';
import {loadItems, selectChangeHandler} from './store/actions/items'
import Content from './containers/Content/Content';
import { Switch, Route,withRouter } from 'react-router-dom';
import ServicePage from './containers/ServicePage/ServicePage';



 class App extends React.Component {


  renderServices = () => {
    const properties={}//{['value']:[]]}
  
   
    return this.props.items.map((item,index)=>{
     
      const arrProperties =item.properties
      
      arrProperties.forEach(property => {
       
        const keys = Object.keys(properties)
       
        
        if (!keys.includes(property.title)) {
          properties[property.title]=[]
          properties[property.title].push(property.value)
        }
        else if (!properties[property.title].includes(property.value))
        properties[property.title].push(property.value)
      })
        
      return properties
    })
    
  }

  componentDidMount() { 
    this.props.loadItems() 
    console.log(this.props);
    
  }

 
  render() {
   
   
     return (
    <div className="App">
       <Header counter={this.props.counter} onClick={this.props.onClick}/>
      <Switch>
      <Route exact path='/:alias' component={ServicePage}/>
        <Route  path='/' render = { () =>  {
          
          
           return(
          <Content
            properties ={this.props.properties}
            onChange={this.props.selectChangeHandler}
            items={this.props.items}
           />)}}
          />
     
      </Switch>  
    </div>
  );
  }
}

function mapStateToProps(state) {
  return {
      items:state.items.filteredItems,
      properties:state.items.properties,
      counter:state.items.counter
     
  }
}

function mapDispatchToProps(dispatch) {
  return {
      loadItems: () => dispatch(loadItems()),
      selectChangeHandler: (e) => dispatch(selectChangeHandler(e))
     
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))


