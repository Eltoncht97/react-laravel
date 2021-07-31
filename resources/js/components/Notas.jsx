import React from 'react'
import { Navbar } from './Navbar'
import { NotasTable } from "./NotasTable";
import { NotasForm } from "./NotasForm";

export const Notas = () => {
    return (
        <div>
            <Navbar />
            <div className="h-full">
                <div className="container mx-auto pt-3 pb-5">
                    <NotasForm />
                    <NotasTable />
                </div>
            </div>
        </div>
    )
}
