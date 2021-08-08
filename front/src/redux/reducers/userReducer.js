//actions
import { LOGIN_WITH_USER, LOGIN_SUCESS, LOGIN_ERROR, USER_LOG_OUT, LOGIN, LOGIN_SUCESS_GOOGLE, GET_USER_TYPE, ORDERS_BY_USER_ID } from "../actions/userActions"


//states 
const initialState = {
    loggedIn: false,
    fetching: false, //el fetching es el que usamos cuando nos logueamos y esta cargando... cuando ingresa exitosamente, pasa el fetching a false y el loggedIn a true
    userType: "",
    orders: null
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOG_OUT:
            return {
                loggedIn: false,
                fetching: false
            }
        case LOGIN_WITH_USER:
            return {
                ...state,
                fetching: true
            }
        case LOGIN:
            return {
                ...state,
                fetching: true
            }
        case LOGIN_SUCESS:
            return {
                ...state,
                fetching: false,
                loggedIn: true,
                ...action.payload
            }
        case LOGIN_SUCESS_GOOGLE:
            return {
                ...state,
                fetching: false,
                loggedIn: true,
                googleUser: action.payload
            }
        case LOGIN_ERROR:
            return {
                fetching: false,
                error: action.payload
            }
            case GET_USER_TYPE:
                return {
                    ...state,
                    userType: action.payload
                }
                case ORDERS_BY_USER_ID:
                    return {
                        ...state,
                        orders: action.payload
                    }

        default:
            return state
    }
}