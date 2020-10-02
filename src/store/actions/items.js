export  function loadItems () {
    return (dispatch,getState) => {
       
        fetch("data/service.json",
       
        
    {
        headers : {            
           'Accept': 'application/json'
          }
        }
    ).then(res => res.json()).then(
        result => {
            
           dispatch(loadItemsSuccess(result.services))
            dispatch(loadSelects())
        
        }
    )
    
    }
    
}

export  function loadItemsSuccess(items) {
    return {
        type:'FETCH_SERVICES_ITEMS_SUCCESS',
        items
    }
}

export function loadSelects(items) {
   return (dispatch, getState) => {
    const properties ={}
   const items=[...getState().items.items]
  
     items.map((item,index)=>{
     
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
     dispatch({type: 'FETCH_PROPERTIES_SUCCESS',properties })
    
    
   }
}




export function selectChangeHandler(filtObj) {
     return (dispatch, getState) => {
      
        // const filteredItems=[]
        const items=[...getState().items.items]
        
        // let items =[]
         //const filteredItems=[]
       
         const filterObj=getState().items.filterObj
        // console.log('Obj',value);
         

         Object.keys(filterObj).map(name =>{
            if(typeof filtObj[name]!=='undefined') {
                return filterObj[name]=(filtObj[name]===name)?null:filtObj[name]
            }
            return filterObj[name]
         })
         console.log('filterObj',filterObj);
       dispatch({type:'UPDATE_FILTER_OBJECT',filterObj})
         const filter =Object.keys(filterObj).filter(name => filterObj[name]!==null)
         console.log(filter);
         
         const filteredItems =items.filter(item => {
          return  filter.every(name=>{
              
                
                    return item.properties.some(property =>
                        
                        {  
                        
                           return property.value ===filterObj[name]})
                })
            })
         
   
    
      dispatch({type:'FILTER_ITEMS', filteredItems})
     
}
}


export function loadItem(alias) {
    return (dispatch,getState) => {
     
         
        fetch("./data/service.json",
        {
            headers : {            
              'Accept': 'application/json'
             }
            }
        ).then(res => res.json()).then(
            result => {
                
               dispatch(loadItemSuccess(result.services.find(x => x.alias ===alias)))
               
            
            }
        )
        
        
    }
}
 
function loadItemSuccess(item) {
    return {
        
            type:'LOAD_ITEM_SUCCESS',
            item
        
    }
}


export function addToCard() {
    return {
        type:'ADD_TO_CARD'
    }
}
 
   

    
