import axiosUtil from '../utils/axiosUtils.js'

class Api{
    findallfood(){
        return axiosUtil.get('/food')
    }




    create(data){

        return axiosUtil.post('/tutorials',data)
    }

    getAll(){
        return axiosUtil.get('/tutorials')

    }
    getOneByID(id){
        return axiosUtil.get("/tutorials/get-tutorial",{
            params:{
                id:id
            }
        })

    }
    update(data){
        return axiosUtil.post("/tutorials/update",data)
    }

    destroy(data){
        console.log(data)
        return axiosUtil.post("/tutorials/destroy",data)
    }

    getuser(){
        return axiosUtil.get("/user")

    }
    getone(id){
        return axiosUtil.get("/user/getuser",{
            params:{
                id:id
            }
        })

    }
    getimg(data){
        return axiosUtil.get("/user/upload",data)

    }
    updateuser(data){
        return axiosUtil.post("/user/update",data)
    }
}

export default new Api();