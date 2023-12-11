import UserContext from "../context/UserContext";
import {useContext} from "react";


// import UserName from "./UserName";


function UserInfo() {
   const {user} = useContext(UserContext)
    return (
     /*   <UserContext.Consumer>
            {value => <h1>{value}</h1>}
        </UserContext.Consumer>*/
        <h1>{user}</h1>
    );

    /*    return(
            <UserName>
                {value => <h1>{value}</h1>}
            </UserName>
        )*/
}

export default UserInfo;
