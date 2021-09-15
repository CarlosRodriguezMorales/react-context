import React, {createContext, useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';


const CRUDContext = createContext()


const CRUDProvider =({children}) => {
    const [db, setDb] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    let api = helpHttp()
    let url = "http://localhost:5000/santos"

    useEffect(() => {
        setLoading(true)
        helpHttp().get(url).then((res)=>{
            //console.log(res)
            if(!res.err){
                setDb(res)
                setError(null)
            }else{
                setDb(null)
                setError(res)
            }

            setLoading(false)
        })
    }, [url])

    const createData = (data) => {
        data.id = Date.now();

        let options ={
            body:data,
            headers:{"content-type":"application/json"}
        }

        api.post(url,options).then((res)=>{
           // console.log(res)
            if(!res.err){
                setDb([...db, res])
            }else{
                setError(res)
            }
        })
        //console.log(data);
        //setDb([...db, data]);
    };

    const updateData = (data) => {
        let endpint=`${url}/${data.id}`

        let options ={
            body:data,
            headers:{"content-type":"application/json"}
        }

        api.put(endpint,options).then((res)=>{
           // console.log(res)
            if(!res.err){
                let newData = db.map(el=>el.id===data.id?data:el)
                setDb(newData)
            }else{
                setError(res)
            }
        })
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );

        if(isDelete){
            let endpint=`${url}/${id}`

            let options ={
                headers:{"content-type":"application/json"}
            }
    
            api.del(endpint,options).then((res)=>{
               // console.log(res)
                if(!res.err){
                    let newData = db.filter((el)=>el.id!==id)
                    setDb(newData)
                }else{
                    setError(res)
                }
            })
        }else{
            return
        }
    }

    const data = {db, error, loading, createData, dataToEdit, setDataToEdit, updateData, deleteData}

    return <CRUDContext.Provider value={data}>{children}</CRUDContext.Provider>
}

export {CRUDProvider}

export default CRUDContext;