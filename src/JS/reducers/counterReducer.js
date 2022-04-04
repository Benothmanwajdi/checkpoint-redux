import { INCREMENT } from "../actionstypes/countertypes"



const initialState = {
    count: 0
}

const counterReducer = (state = initialState, { type, payload }) => {


    switch (type) {

        case INCREMENT: return {


            ...state,
            count: state.count + 1
        }

        default: return state
    }

}

export default counterReducer