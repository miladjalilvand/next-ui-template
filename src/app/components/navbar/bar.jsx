"use client"
import { useState } from "react";
import MenuICON from "./menuIcon";
import Menu from "./menu";
export default function Bar (){

    const [isOpen , setOpen] = useState(false);

    return (

        <div className="fixed flex-row w-full z-40 h-12 bg-background shadow-foreground-200 shadow-sm">

           <div className="z-50">
           <MenuICON isopen={isOpen} setopen={setOpen}></MenuICON>
           </div>
           <div className="z-40"></div>
            <Menu isopen={isOpen}/>
            {  (isOpen && <div onClick={() => setOpen(!isOpen)} className="fixed md:w-screen z-30 md:h-screen bg-red-600 opacity-70"></div>)}
            
        </div>
    );
}