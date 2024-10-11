import React from "react"

export default function NavToggle(){
    return (
        <div className="flex flex-col gap-1 w-8">
            <div className="bg-darks py-[2px] px-3 rounded-full"></div>
            <div className="bg-darks py-[2px] w-3/4 px-3 rounded-full"></div>
            <div className="bg-darks py-[2px] w-2/3 px-3 rounded-full"></div>
        </div>
    )
}