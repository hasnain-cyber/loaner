import { createContext } from "react";
import { StorageUserData } from "./globalTypes";

export const emptyUserData: StorageUserData = {
    uid: '',
    firstName: '',
    lastName: '',
    email: '',
}

const userDataContext = createContext<{ userData: StorageUserData , setUserData: Function}>({
    userData: emptyUserData,
    setUserData: (userData: StorageUserData) => { }
});

export default userDataContext;