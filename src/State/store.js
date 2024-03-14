import { createStore,combineReducers,applyMiddleware } from "redux";
import { thunk }  from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";


const rootReducers=combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer
})

export const store = createStore(rootReducers,applyMiddleware(thunk))