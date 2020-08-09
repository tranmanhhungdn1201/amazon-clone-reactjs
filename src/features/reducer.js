export const inititalState = {
    basket: [ ],
    user: null
};

export const getBasketTotal = (basket) => 
    basket.reduce((amount, item) => item.price + amount , 0);

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'ADD_TO_BASKET':
            const newBasket = [...state.basket, action.item];
            return {...state, basket: newBasket};
        case 'REMOVE_FROM_BASKET':
            const newStateBasket = [...state.basket];
            const indexItemRemove = newStateBasket.findIndex(item => item.id === action.item.id);
            if(indexItemRemove >= 0){
                newStateBasket.splice(indexItemRemove, 1)
            }else{
                console.warn('Cant remove item with id: ', action.item.id);
            }
            return {...state, basket: [...newStateBasket]};
        default:
            return state;
    }
};

export default reducer