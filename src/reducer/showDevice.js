const initialState={}

const deviceViewReducer = (state=initialState, action)=>{
    console.log('hello ')
    switch(action.type){
        case 'GET_DATA':{
            console.log('reducer', action.payload)
            return {...action.payload}
        }
        default :{
            return {...state}
        }
    }
}

export default deviceViewReducer