const initialState ={}

const infraReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'GET_INFRA':{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default infraReducer