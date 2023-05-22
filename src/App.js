import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/open/MainPage";
import AuthPage from "./pages/open/AuthPage";
import NotFoundPage from "./pages/open/NotFoundPage";
import SecureFilter from "./pages/secure/SecureFilter";
import UserPage from "./pages/secure/UserPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>

            <Route path="/secure" element={<SecureFilter/>}>
                <Route path="user" element={<UserPage/>}/>
            </Route>

        </Routes>
    );
};

export default App;