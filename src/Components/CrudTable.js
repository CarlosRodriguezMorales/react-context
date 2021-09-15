import {useContext} from 'react'
import CRUDContext from '../Context/CRUDContext'
import CrudTableRow from './CrudTableRow'

const CrudTable = () => {
    const {db:data} = useContext(CRUDContext)

    return (
        <div>
           <h3>Tabla de datos</h3> 
           <table>
               <thead>
                   <tr>
                       <th>Nombre</th>
                       <th>Constelacion</th>
                       <th>Acciones</th>
                   </tr>
               </thead>
               <tbody>
                   {data.length>0?(
                    data.map((el)=><CrudTableRow 
                       key={el.id} 
                       el={el}
                   />)
                   ):(
                    <tr>
                        <td colSpan="3">Sin Datos</td>
                    </tr>                   
                   )}
               </tbody>
           </table>
        </div>
    )
}

export default CrudTable
