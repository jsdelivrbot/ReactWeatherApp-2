import {FETCH_WEATHER} from '../actions';
export default function (state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            const exists = state.some((data) => (data.city.name === action.payload.data.city.name));
            console.log(state);
            console.log('Action recieved', action);
            if(!exists) {

                return [action.payload.data, ...state];
            }
    }
    return state;
}