'use client'
import React, { useState } from 'react';
import './login.css'
import Link from 'next/link';
import { CiLock, CiLogin, CiUser } from 'react-icons/ci';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';

const LoginPage: React.FC = () => {
    const notify = (message: string) => toast(message);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        try {
            notify("Logging you in");
            const logindata = await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                callbackUrl: "/main/assetpage",
            });
            notify("Welcome Back");
        } catch (error) {
            notify("An Error occured try again letter");
        }
    };

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handleSubmit}>
                        <div className="login__field">
                            <CiUser className="login__icon" />
                            <input type="email" className="login__input" placeholder="User name / Email" name="email" required />
                        </div>
                        <div className="login__field">
                            <CiLock className="login__icon" />
                            <input type="password" className="login__input" placeholder="Password" name="password" required />
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <CiLogin className='button__icon ' />

                        </button>
                    </form>
                    <div className="social-login">
                        <h3><Link href={'/register'}>Sign Up</Link></h3>
                        <h3><Link href={'/'}>GO Home</Link></h3>
                        <div className="social-icons">
                            <a href="#" className="social-login__icon fab fa-instagram"></a>
                            <a href="#" className="social-login__icon fab fa-facebook"></a>
                            <a href="#" className="social-login__icon fab fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;