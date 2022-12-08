import React from "react";

export default function FlexLayout()
{
    return (
        <>
           <div className="wrapper flex">
                <div className="wrapper border border-yellow-500 h-auto flex flex-col bg-yellow-500 basis-1/3  justify-between">
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                    <li>Home 1</li>
                </div>
                <div className="mainContent bg-red-500 h-72 flex-grow">
                    <h1>I'm the main content</h1>
                </div>
           </div>
        </>
    )
}