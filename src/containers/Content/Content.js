import React from 'react'
import Filter from '../Filter/Filter'
import FitnessList from '../../components/FitnessList/FitnessList'

export default class Content extends React.Component
{
    
    render() {
        
        
        return (
            <div>
                   <Filter properties ={this.props.properties} onChange={this.props.onChange}/>
                    <FitnessList items={this.props.items}/>
            </div>
        )
    }
}