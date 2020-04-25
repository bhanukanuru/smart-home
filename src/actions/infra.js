import axios from '../config/axios'

export const getInfra=(infra)=>{
        return {
            type:'GET_INFRA', payload:infra
        }
}

export const startGetInfraAction=()=>{
    return(dispatch)=>{
        axios.get('/infrastructures' )
        .then((response)=>{
            if(response.data.message){
              // console.log(response.data)
               const infra = response.data
               dispatch(getInfra(infra))
            }
            else{
                alert('no data')
            }
           
        })
    }
}