import React from 'react';


const Login = () => {

    const handleNotify = () => {
        window.alert('Chức năng đang phát triển!');
    }

    return (
        <div className="form">
            <form className="login-form">
                <h1>Đăng nhập</h1>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                <p className="message"><a onClick={handleNotify}>Not registered?</a></p>
            </form>
        </div>
    )
}

export default Login;