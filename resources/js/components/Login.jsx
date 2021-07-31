import React from "react";
import { useDispatch } from "react-redux";
import { startLoginEmailPassword } from "../actions/auth";
import { useForm } from "../hooks/useForm";

export const Login = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email: "shanahan.ferne@example.net",
        password: "password",
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword(email, password) )
    };

    return (
        <div className="w-full h-screen flex flex-wrap justify-center content-center bg-indigo-100">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleLogin}
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name="password"
                        type="password"
                        placeholder="******************"
                        onChange={handleInputChange}
                        value={password}
                    />
                    {/* <p className="text-red-500 text-xs italic">
                        Please choose a password.
                    </p> */}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    );
};
