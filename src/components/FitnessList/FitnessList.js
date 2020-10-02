import React from 'react'
import FitnessItem from '../FitnessItem/FitnessItem'
import classes from './FitnessList.module.css'


const FitnessList = (props) => {
 

   function renderServiceItems  ()  {
       const items = props.items
       
          return  items.map(item => {
                
                
                return (<FitnessItem
                            alias={item.alias}
                            description={item.description}
                            price ={item.price}
                            title ={item.title}
                            image={item.image}
                            properties={item.properties}
                        />)
            })
        
           
        
        
    }
  
    
        return (
            <section className={classes['fitness-list']}>
                <div className={classes['container']}>
                    <div className={classes['fitness-list__inner']}>
                    {renderServiceItems()}
                    </div>
               
                </div>
           
            </section>
        )
    }

export default FitnessList

