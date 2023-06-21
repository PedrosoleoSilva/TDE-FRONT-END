import './UserList.css'
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {

    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)

    const fechUserData = useCallback(async () =>{
        try {
            setLoading(true)
            const{data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setUserData(data)
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    },[])
    useEffect(() => {
        fechUserData()
    }, []);


    const renderUserData = ()=>{
        if(loading || !userData.length){
            return(
                <h3>Carregando</h3>
            )
        } return (
            <div>
                <h3>Dados do usúario</h3>
                {userData.map(user =>(
                    <div>
                          <h4>"userId":{user.userId}</h4>
                          <h4>"id":{user.id}</h4>
                          <h4>"title":{user.title}</h4>
                          <h4>"completed":{user.completed}</h4>
                          <h3>"/"</h3>
                    </div>
                  
                ))}
            </div>
        )
    }
    return (
        <div className='conatiner'>
            <h2>Listagem</h2>
            {renderUserData()}
        </div>
    );
}

export default UserList;