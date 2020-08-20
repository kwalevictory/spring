export default class Madia{
    getPermission(){
        return new Promise((res,rej)=>{
            navigator.mediaDevices.getUserMedia({video:{width:'100%',height:'100%'}, audio:true})
            .then(stream=>{
                res(stream)
            })
            .catch(err=>{
                throw new Error(err)
            })
        })
    }
}