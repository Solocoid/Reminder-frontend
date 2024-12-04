import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signup() {
    const usernameRef = useRef<any>();
    const passwordRef = useRef<any>();
    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
       await axios.post(BACKEND_URL + "api/v1/signup", {
            data: {
                username,
                password
            }
        })
        alert("you have signed up")

    }
 return  <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input ref={usernameRef} placeholder="username" />
        <Input ref={passwordRef} placeholder="password" />
        <div className="flex justify-center pt-4">
        <Button onClick={signup} variant="primary" text="Signup" fullWidth={true}/>
        </div>
        
    </div>
 </div>
}