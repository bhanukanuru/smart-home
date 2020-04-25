const initialState={}

const devicesReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'GET_DEVICES':{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default devicesReducer