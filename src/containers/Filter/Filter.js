import React, {Component} from 'react'
import classes from './Filter.module.css'




 class Filter extends Component {
    state ={
        value:[
            'Количество занятий',
            'Срок действия',
            'Время посещения',
            'Тип секции',
            'Категория тренера'
        ]
    }

   componentWillUnmount() {
       localStorage.setItem('value',JSON.stringify(this.state.value))
      
       
   }

 componentDidMount() {
    const value=JSON.parse(localStorage.getItem('value'))
    if(value)
    {
        this.setState({
            value
        })
    }

    
    localStorage.removeItem('value')
     
 }
    

      onChange(event) {
          const query={}
          const name=event.target.name
          const v = event.target.value
        query[name] =v;
       
        
        const value=[...this.state.value]
       
        
        value[event.target.id]=event.target.value
        this.setState({
            value
        }, function(){
            console.log(this.state.value);
            
        })
      
        this.props.onChange(query)
     }


    renderSelects  ()  {
      
      
        const properties = Object.entries(this.props.properties) 
       
      
        
        return properties.map((property,index) =>{
            return <select
                                className={classes['filter-select__select']}
                                name={property[0]}
                                value={this.state.value[index]} 
                                key={property[0]} 
                                onChange={(e) => this.onChange(e)} id={index}>
                        {[property[0],...property[1]].map((option, optionIndex)=> {              
                            return (
                                <option 
                                    id={optionIndex} 
                                    value={option}
                                    key={optionIndex}
                                    className={classes['filter-select__option']}>{option}</option>
                            )
                            })}
                    </select>
           
        })                 
                
    }

    render() {
        
        
        return <section className={classes.filter}>
            <div className={classes.container}>
                <div className={classes.filter__inner}>
                   {this.renderSelects()}
          
                </div>
           </div>
        </section>
    }
}



export default Filter