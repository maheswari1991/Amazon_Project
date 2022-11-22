export const initialState = {
    basket: [],
    user: null
}


export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


export const reducer = (state, action) => {

    console.log('the action dispatched', action)
    switch(action.type){

        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item]
            }

        case 'REMOVE_FROM_BASKET' : 

        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
        console.log('the index value item',index);    
        let newBasket = [...state.basket];

        if(index >=0){

            newBasket.splice(index,1)

        }else{
            console.warn(`can't remove from the basket`);
        }
        
        return{
            ...state,
            basket: newBasket
        }

        case "SET_USER": 
        console.log('the user details in reducer,', action.user)

        return {
            ...state,
            user: action.user
        }

        default : 
        return state
    }
}

