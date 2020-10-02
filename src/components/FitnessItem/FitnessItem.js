import React from 'react'
 import classes from './FitnessItem.module.css'
import { Link } from 'react-router-dom'

function cutDescription(description) {
   
    return (description.length < 100)? description: description.substring(0,100) + '...'
}

function renderHashTags(properties) {
    return properties.map(property => {
        
         return (<span className={classes['fitness-item__hashtag']}>{`#${property.value}`}</span>)
    })
}

const FitnessItem = (props) => {


    return (
        <article className={classes['fitness-item']}>
            <Link to={`/${props.alias}`} className={classes['fitness-item__link']}>
                <div className={classes['fitness-item__inner']}>
                    <img className={classes['fitness-item__img']} src={props.image} alt='fitness'/>
                    <div className={classes['fitness-item__description']}>
                        <h4 className={classes['fitness-item__title']}>{props.title} </h4>
                        <div className={classes['fitness-item__text']}>{cutDescription(props.description)}</div>
                        <div className={classes['fitness-item__hashcontainer']}>{renderHashTags(props.properties)}</div>
                    </div>
                   
                    
                </div> 
            </Link>
           
        </article>
    )
}

export default FitnessItem