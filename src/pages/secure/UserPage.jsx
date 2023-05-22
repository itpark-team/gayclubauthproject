import React, {useEffect, useState} from 'react';
import UserApiWorker from "../../api/UserApiWorker";
import LocalStorageWorker from "../../store/LocalStorageWorker";

import {useNavigate} from "react-router-dom";

const UserPage = () => {

    let navigate = useNavigate();

    let localStorageWorker = new LocalStorageWorker();
    let userApiWorker = new UserApiWorker();

    let [userData, setUserData] = useState({
        "name": "",
        "email": ""
    });

    const loadUserData = () => {
        let token = localStorageWorker.getToken();

        userApiWorker.getUser(token).then(
            response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        loadUserData();
    }, []);

    const logout = () => {
        localStorageWorker.deleteToken();
        navigate("/");
    }

    return (
        <div>
            <h1>User page</h1>
            <div>data: {userData.name} | {userData.email}</div>
            <button onClick={logout}>logout</button>
        </div>
    );
};

export default UserPage;