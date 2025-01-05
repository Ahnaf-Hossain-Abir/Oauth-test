"use client"
import { credentialLogin } from '@/app/actions';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const Credential = () => {
    const [error, setError] = useState("")
    const router = useRouter();
    async function handleFormData(event){
        event.preventDefault();
       try{
        const formData = new FormData(event.currentTarget);
        const response = await credentialLogin(formData);

        if(!!response.error){
            setError(response.error)
        } else{
            router.push("/home")
        }
       } catch(e){
        console.log(e);
        setError("Something went wrong");
       }
    }

    return (
        <form className="flex flex-col items-center justify-center" onSubmit={handleFormData}>
        <div className="my-5">
        <label>Email</label>
        <input type="email" name="email" id="email" className="border mx-2 rounded border-gray-500 p-2" />
        </div>
        <div className="">
        <label>Password</label>
        <input type="password" name="password" id="password" className="border mx-2 rounded border-gray-500 p-2" />
        </div>
        <button className="my-5 border bg-green-400 w-36 p-2">Login</button>
        </form>
    );
};

export default Credential;