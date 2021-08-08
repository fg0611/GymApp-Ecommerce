//actions
import { GET_ORDERS, GET_USERS, GET_USER_ORDERS, ORDER_DETAIL, USER_DETAIL } from "../actions/adminActions"

//states 
const initialState = {
    users: null,
    userDetail: null,
    orders: null,
    orderDetail: null,
}


export default function admReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload
            }
        case GET_USER_ORDERS:
            return {
                ...state,
                userDetail: {
                    ...state.userDetail, 
                    userOrders: action.payload
                },
            }
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload,
            }
        case ORDER_DETAIL:
            return {
                ...state,
                orderDetail: action.payload,
            }
        default:
            return state
    }
}