import React, { useState } from 'react';
import "./Loginpage.css";
import loginpage_BgImage from "../../assets/images/login-bg.gif"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Common/DashBoard/Dashboard';
import { createContext } from 'react';



export const LoginPage = () => {
    const mycontaxt = createContext();


    const [submit, setSubmit] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [newPassword, setNewPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [adminPassword, setAdminPassword] = useState('123'); // Default admin password
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    // Handle login validation
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'kalai@vebbox.in' && password === "123") {
            setSubmit(false);
            // navigate('/Dashboard'); // Redirect to dashboard if successful
        } else {
            setError('Invalid username or password !');
        }
    };

    // Handle the forgot password scenario
    // const handleForgotPassword = (e) => {
    //     e.preventDefault();
    //     setSubmit(true);
    // };

    // Handle password reset
    // const handleResetPassword = (e) => {
    //     e.preventDefault();
    //     if (newPassword === confirmPassword) {
    //         setAdminPassword(newPassword); // Update admin password
    //         setSubmit(false); // Switch back to login page
    //         setError(''); // Clear any previous errors
    //         alert('Password reset successful. Please log in with your new password.');
    //     } else {
    //         setError('Passwords do not match');
    //     }
    // };




    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <>
            {submit ? <div className="login">
                {/* <img src={loginpage_BgImage} alt="login" className="login__img" /> */}

                <form className="login__form" onSubmit={handleLogin}>
                    <h1 className="login__title">Login</h1>

                    <div className="login__content">
                        <div className="login__box">
                            <i className="ri-user-3-line login__icon"></i>

                            <div className="login__box-input">
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="email"
                                    required
                                    className="login__input"
                                    id="login-email"
                                    placeholder=" "
                                    autoComplete=''
                                />
                                <label htmlFor="login-email" className="login__label">Email</label>
                            </div>
                        </div>

                        <div className="login__box">
                            <i className="ri-lock-2-line login__icon"></i>

                            <div className="login__box-input">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className="login__input"
                                    id="login-pass"
                                    placeholder=" "
                                />
                                <label htmlFor="login-pass" className="login__label">Password</label>
                                <i
                                    className={`login__eye `}
                                    id="login-eye"
                                    onClick={togglePasswordVisibility}
                                    title={showPassword ? 'Hide Password' : 'Show Password'}
                                    style={{ cursor: "pointer" }}
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </i>
                            </div>
                        </div>
                    </div>

                    <div className="login__check">
                        <div className="login__check-group">
                            <input type="checkbox" className="login__check-input" id="login-check" />
                            <label htmlFor="login-check" className="login__check-label">Remember me</label>
                        </div>

                        <a href="#" className="login__forgot">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login__button">Login</button>
                    {error && <p className="error-message">{error}</p>}

                    <p className="login__register">
                        Don't have an account? <a href="#">Register</a>
                    </p>
                </form>
            </div> :

                <mycontaxt.Provider value={setSubmit}>
                    <Dashboard />
                </mycontaxt.Provider>
            }

        </>
    );
};
