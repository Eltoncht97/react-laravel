import React from "react";

export const NotasForm = () => {
    return (
        <form className="w-full max-w-lg mx-auto">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                    >
                        Titulo
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                    >
                        Descripcion
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                    />
                </div>
            </div>
            <div>
                <button
                    className="button rounded px-2 py-2 bg-green-400 w-full"
                    type="submit"
                >
                    Agregar Nota
                </button>
            </div>
        </form>
    );
};
