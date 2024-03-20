import { api } from "../../../config/apiConfig";
import { CONFIRMED_OREDER_FAILURE, CONFIRMED_OREDER_REQUEST, CONFIRMED_OREDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";


export const getOrders = () => {
    console.log("get all orders");
    return async (dispatch) => {
        dispatch({ type: GET_ORDER_REQUEST })

        try {
            const response = await api.get(`/api/admin/orders/`);
            console.log("get all orders", response.data);
            dispatch({ type: GET_ORDER_SUCCESS, payload: response.data })
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: GET_ORDER_FAILURE, payload: error.message })

        }
    }
}

export const confirmOrders = (orderId) => async (dispatch) => {

    dispatch({ type: CONFIRMED_OREDER_REQUEST });

    try {
        const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        const data = response.data;
        console.log("confirm_order", data);
        dispatch({ type: CONFIRMED_OREDER_SUCCESS, payload: data })
    } catch (error) {

        dispatch({ type: CONFIRMED_OREDER_FAILURE, payload: error.message })

    }
}


export const shipOrders = (orderId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SHIP_ORDER_REQUEST })
            const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
            console.log("shipped order", data);
            dispatch({ type: SHIP_ORDER_SUCCESS, payload: data })
        } catch (error) {

            dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message })
        }
    }
}

export const deliverOrders = (orderId) => async (dispatch) => {
    dispatch({type:DELIVERED_ORDER_REQUEST})
   
        try {
            const data= await api.put(`/api/admin/orders/${orderId}/deliver`);
            console.log("delivered order", data);
            dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message })
        }
 }


// export const cancelOrders = (orderId) => async (dispatch) => {
//     dispatch({type:})
   
//         try {
//             const response= await api.put(`/api/admin/orders/${orderId}/deliver`);
//             console.log("delivered order", data);
//             dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data })
//         } catch (error) {
//             dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message })
//         }
// }

export const deleteOrders = (orderId) =>  {
    return async (dispatch) => {
        dispatch({type:DELETE_ORDER_REQUEST})

        try {
            const {data}= await api.put(`/api/admin/orders/${orderId}/delete`);
            console.log("delete order", data);
            dispatch({ type: DELETE_ORDER_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message })
        }
 }}