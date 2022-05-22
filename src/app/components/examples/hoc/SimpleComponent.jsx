import React from "react";
import PropTypes from "prop-types";
import Subtitle from "../../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    return (
        <Subtitle>
            {isAuth === true || isAuth === "token" ? (
                <button className="btn btn-primary" onClick={onLogout}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={onLogin}>
                    Войти
                </button>
            )}
        </Subtitle>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export default SimpleComponent;
