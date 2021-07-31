import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export const NotasTable = () => {
    const { notes } = useSelector(state => state.notes)
    return (
        <div>
            <table className="table-auto font-rale w-full mt-3">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-indigo-600">Id</th>
                        <th className="px-4 py-2 text-indigo-600">Nota</th>
                        <th className="px-4 py-2 text-indigo-600">
                            Descripcion
                        </th>
                        <th className="px-4 py-2 text-indigo-600">
                            Opciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes
                            ? notes.map(
                                nota => (
                                    <tr key={nota.id}>
                                        <td className="border border-indigo-500 px-4 py-2 text-danger font-medium">
                                            {nota.id}
                                        </td>
                                        <td className="border border-indigo-500 px-4 py-2 text-info-100 font-medium">
                                            {nota.title}
                                        </td>
                                        <td className="border border-indigo-500 px-4 py-2 text-info-200 font-medium">
                                            {nota.description}
                                        </td>
                                        <td className="border border-indigo-500 px-4 py-2 text-info-200 font-medium">
                                            Editar |  Eliminar
                                        </td>
                                    </tr>
                                )
                            )
                            : <tr key={0}>
                            <td className="border border-indigo-500 px-4 py-2 text-danger font-medium">
                                -
                            </td>
                            <td className="border border-indigo-500 px-4 py-2 text-info-100 font-medium">
                                -
                            </td>
                            <td className="border border-indigo-500 px-4 py-2 text-info-200 font-medium">
                                -
                            </td>
                            <td className="border border-indigo-500 px-4 py-2 text-info-200 font-medium">
                                -
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};
