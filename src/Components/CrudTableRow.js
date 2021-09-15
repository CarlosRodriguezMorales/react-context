import {useContext} from 'react'
import CRUDContext from '../Context/CRUDContext';

const CrudTableRow = ({el}) => {
    const {deleteData, setDataToEdit} = useContext(CRUDContext)
    let {name, constellation, id}=el; 


    return (
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick={()=>setDataToEdit(el)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
