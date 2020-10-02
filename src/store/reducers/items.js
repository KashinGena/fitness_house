const initalState ={
    items:[],
    properties:[],
    filteredItems:[],item:{},
    filterObj:{
        'Количество занятий':null, 
        'Срок действия':null,
        'Время посещения':null,
        'Тип секции':null,
        'Категория тренера':null,
    },
    counter:0,
    url:''
    
    
}

export  function itemsReducer(state=initalState, action) {
    switch (action.type) {
        case ('FETCH_SERVICES_ITEMS_SUCCESS'):
            return {
                ...state, items:action.items,filteredItems:action.items
            }
        case ('FETCH_PROPERTIES_SUCCESS') :
            return {
                ...state, properties:action.properties
            }
        case ('UPDATE_FILTER_OBJECT'):
            return {
                ...state, filterObj:action.filterObj
            }
        case ('FILTER_ITEMS'): 
            return {
               ...state, filteredItems:action.filteredItems
            }
            case ('CHANGE_URL'): 
            return {
               ...state, url:'/'+action.payload
            }
        case ('LOAD_ITEM_SUCCESS'):
            return {
                ...state,item:action.item
            }
        case ('ADD_TO_CARD'):
            return {
                ...state,counter:state.counter+1
            }   
        default: 
            return state
    }
}