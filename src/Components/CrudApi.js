import {useContext} from 'react'
import CRUDContext from '../Context/CRUDContext';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';
//const initialDb = [];

const CrudApi = () => {
    const {loading,error,db} = useContext(CRUDContext)

    return (
        <div>
            <h2>CRUD API con Context API</h2>
            <article className="grid-1-2">
                <CrudForm />
                {loading && <Loader/>}
                {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
                {db && <CrudTable/>}
            </article>
        </div>
    )
}


export default CrudApi
