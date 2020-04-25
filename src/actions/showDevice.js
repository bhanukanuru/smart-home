import axios from '../config/axios'

export const getDevice=(data)=>{
    console.log('sync', data)
    // return{
    //     type:'GET_DATA',
    //     payload:data
    // }
    return{type:'GET_DATA', payload:data}
}

export const startDeviceAction=(id)=>{
    return(dispatch)=>{
        axios.get(`/device/${id}`)
        .then((response)=>{
            console.log('device data', response.data)
            const data = response.data
            dispatch(getDevice(data))
        })
    }
}

