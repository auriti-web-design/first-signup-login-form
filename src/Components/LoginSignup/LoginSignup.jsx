import React, { useState}  from 'react';

import { HiMiniUserCircle } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <>
            <div
                className="pt-52 h-screen mx-auto my-auto items-center justify-center">
                <div
                    className="max-w-xl mx-auto flex flex-col p-8 border border-slate-200 rounded-md">
                    <div
                        className="container flex justify-center">
                        <span className="text-2xl font-semibold text-slate-800">{action}</span>
                    </div>
                    <div
                        className="container mx-auto flex flex-col gap-8 mb-6">
                        {/* Name */}
                        <div className="container flex flex-col gap-4">
                            {action==="Login"?<div></div>:
                                <>
                                    <div className="container">
                                        <label className="text-lg text-neutral-700 leading-normal ">Name</label>
                                    </div>
                                    <div className="flex gap-6 items-center">
                                        <HiMiniUserCircle className="text-4xl text-neutral-800"/>
                                        <input type="text"
                                               className="border border-slate-400 w-full py-1.5 px-4 rounded-sm"
                                               placeholder="Complete Name"/>
                                    </div>
                                </>
                            }
                        </div>
                        {/* Email */}
                        <div
                            className="container flex flex-col gap-4">
                            <div
                                className="container">
                                <label
                                    className="text-lg text-neutral-700 leading-normal">Email</label>
                            </div>
                            <div
                                className="flex gap-6 items-center">
                                <HiEnvelope className="text-4xl text-neutral-800"/>
                                <input
                                    type="email"
                                    className="border border-slate-400 w-full py-1.5 px-4 rounded-sm"
                                    placeholder="Your Best Email Address"/>
                            </div>
                        </div>
                        {/* Password */}
                        <div
                            className="container flex flex-col gap-4">
                            <div
                                className="container">
                                <label
                                    className="text-lg text-neutral-700 leading-normal">Password</label>
                            </div>
                            <div
                                className="flex gap-6 items-center">
                                <HiLockClosed
                                    className="text-4xl text-neutral-800"/>
                                <input
                                    type="password"
                                   className="border border-slate-400 w-full py-1.5 px-4 rounded-sm"
                                    placeholder="Choose your Password"/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="container mx-auto w-full mt-6 flex justify-center">
                        <div
                            className="container mx-auto flex flex-row gap-4">
                            <div className="container flex justify-center">
                                <button
                                    className={action==="Login"?"submit gray":"submit"}
                                    onClick={()=>{setAction("Sign Up")}}>
                                    Sign Up
                                </button>
                            </div>
                            <div
                                className="container flex justify-center">
                                <button
                                    className={action==="Sign Up"?"submit gray":"submit"}
                                    onClick={()=>{setAction("Login")}}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginSignup
