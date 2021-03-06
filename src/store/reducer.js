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
        case ("SubOfCart"): 
           const indexForSub = state.cart.findIndex(prod => prod.id === action.product.id);
           const updateStateTwo={...state, cart:[...state.cart]};
           updateStateTwo.cart[indexForSub].quantity-=1;
           if (updateStateTwo.cart[indexForSub].quantity===0){
            updateStateTwo.cart.splice(indexForSub,1);
           }
           return{
               ...updateStateTwo
           }
       
    
  
        default:
            return state;
     }
   
}

export default reducer;