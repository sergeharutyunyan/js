import React, {useContext} from 'react';
import UserContext from "../context/UserContext";



function ChangeUser(props) {
    const {user, setUser} = useContext(UserContext)
    return (
        <div>
            <button onClick={()=> setUser(user === 'Serge123' ? 'Serge1234' : 'Serge123')}>
                Change User
            </button>
        </div>
    );
}

export default ChangeUser;
