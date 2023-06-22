import React, { createContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../store/actions/userActions';
import Validation from '../components/validation';

export const UserInfoContext = createContext();

const ContextState = ({ children }) => {
    // const listUserData = useSelector((state) => state.userReducers.allUserData);
    const [showUserModel, setShowUserModel] = useState(false);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        jobTitle: "",
        userRole: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [userProfile, setUserProfile] = useState();

    const onChangeFun = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }


    const setProfile = (e) => {
        // console.log(e.target.files[0])
        const rightURL = URL.createObjectURL(e.target.files[0])
        setUserProfile(rightURL);
    }

    // console.log(errors)

    const submitAddUserData = (e) => {
        e.preventDefault();
        const { fullName, jobTitle, userRole, email, password, confirmPassword } = userInfo;
        setErrors(Validation(userInfo));
        if(fullName && jobTitle && userRole && email && password && confirmPassword){
            dispatch(addUser(userInfo));
            setShowUserModel(false);
        }
        // setErrors(Validation(userInfo));
    }
    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo, userProfile, setUserProfile, onChangeFun, setProfile, submitAddUserData, showUserModel, setShowUserModel, errors }}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default ContextState;
