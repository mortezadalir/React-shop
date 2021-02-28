const initialState={
    cart:[],
}
const idArray=[];
const reducer =(state=initialState,action) =>{   
    switch(action.type){
         case ("AddToCart"): 
         const index = state.cart.findIndex(prod => prod.id === action.product.id);
         if (index===-1){
            return {
                ...state,
                cart: [...state.cart, {...action.product, quantity:1}]
            }
        }else{
            const updateState={...state, cart:[...state.cart]}
            updateState.cart[index].quantity+=1
            return{
                ...updateState
            }
        }
        default:
            return state;
     }
   
}

export default reducer;