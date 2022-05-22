import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const auth = localStorage.getItem("auth");

    const login = () => {
        localStorage.setItem("auth", "token");
    };
    const logout = () => {
        localStorage.setItem("auth", "");
    };

    return (
        <Card>
            <Component isAuth={auth} onLogin={login} onLogout={logout} />
        </Card>
    );
};
export default withFunctions;
