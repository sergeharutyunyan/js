import {createContext} from "react";

const UserContext = createContext({
    userNme:'',
    setUserName: () => {}
})

export default UserContext
