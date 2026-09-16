"use client"
import React from 'react'
import Script from 'next/script';
import { useState } from 'react';
import { useEffect } from 'react';
//the form except the button is rendered over server. so in order to use the form we will have to use html stuff inside here cancelButton to get access to the form

/*
NextJS initilly converts the code into html and the js is executed and necesssary html and js is generated 
which will be executed over client side. Now if there is a js that requires browser functionality then it
wont run over server. But if that is wrapped inside if condition then it can be solved.
*/

function Cancelbutton() {
useEffect(() => {
  const input=document.querySelector(".input_box");
}, [])
const [vis, setVis] = useState(false)
if(input.value.trim() == "") {setVis(true)}
    return (
        <>
                {vis? <button
                type="button"
                className="buttonn absolute right-34 top-3  flex h-8 w-8 items-center justify-center rounded-full bg-[#14110F] text-lg leading-none text-white shadow-md transition hover:scale-105 hover:bg-amber-500 hover:text-[#14110F]"
                aria-label="Clear search"
                name="query" >
                ×
            </button>:none}
        </>

    )
}

export default Cancelbutton
