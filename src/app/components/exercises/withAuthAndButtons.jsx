import React from "react";

const withAuthAndButtons = (Component) => (props) => {
    const auth = false;
    const login = () => {
        console.log("login");
    };
    const logout = () => {
        console.log("logout");
    };
    return (
        <>
            <Component isAuth={auth} onLogin={login} onLogout={logout} />
        </>
    );
};
export default withAuthAndButtons;
