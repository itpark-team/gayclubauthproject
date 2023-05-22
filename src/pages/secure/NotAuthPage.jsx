import React from 'react';
import {Link} from "react-router-dom";

const NotAuthPage = () => {
    return (
        <div>
            <h1>Это зона для авторизированных пользователей</h1>
            <p>Для начала работы с системой пожалуйста
                <Link to="/auth"> войдите</Link>
            </p>
        </div>
    );
};

export default NotAuthPage;