import React from 'react'
import { connect } from 'react-redux'
import {loadItem,addToCard} from '../../store/actions/items'
import { withRouter } from 'react-router-dom'
import classes from './ServicePage.module.css'

 class ServicePage extends React.Component {
 
    
 
componentDidMount() {
  
        this.props.loadItem(this.props.match.params.alias)
}

   render() {
    let properties
   
   if (this.props.item.properties) {
    properties =this.props.item.properties.map(property => {
        return (<p>{`${property.title} - `}<strong>{property.value}</strong></p>)})
   }
   else properties=null
    return (
       
       
        <section className={classes['service']}>
            <div className={classes['container']}>
                <div className={classes['service__inner']}>
                    <div className={classes['service__img-container']}>
                        <img className={classes['service__img']} alt ='service_img' src={this.props.item.image} />
                    </div>
                    
                        <div className={classes['service__description-container']}>
                            <h2 className={classes['service__title']}>{this.props.item.title}</h2>
                            <div className={classes['service__description']} >{this.props.item.description}</div> 
                            <div className={classes['service__properties']}>
                                {properties}
                            </div>
                                <div className={classes['service__summary']}>
                                    <span className={classes['service__price']}>{this.props.item.price + ' руб'}</span>
                                    
                                    <button className={classes['service__btn']}onClick={this.props.addToCard}>Купить</button>
                                </div>
                        </div>
                    
                
                </div>
            </div>
        </section>
    )
}
   }

function mapStateToProps(state) {
    return {
        item:state.items.item
    }
}
   
function mapDispatchToProps(dispatch) {
    return {
        loadItem: (alias) => dispatch(loadItem(alias)),
        addToCard: () => dispatch(addToCard())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ServicePage))