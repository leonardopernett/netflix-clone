import Input from "@/components/Input";
import { useState } from "react";

export default function auth() {


  const [input, setInput] = useState({
    email:'',
    password:''
  })

  const inputChage = (e:any) => setInput({...input, [e.target.name]:e.target.value})

  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black h-full lg:bg-opacity-50 w-full">

         <nav className="w-full px-12 py-5">
             <img src="/images/logo.png" alt="logo" className="h-12" />
         </nav>

         <div className="flex justify-center items-center">
            <div className="bg-black rounded-md bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md  lg:w-2/5">
                <h2 className="text-white font-semibold text-2xl mb-5">
                   Signin
                </h2>
                <div className="flex flex-col w-full">
                  <Input 
                    type="email" 
                    value={ input.email } 
                    name="email"
                    id="email"
                    onChange={ inputChage }
                    placeholder="Email"
                  />

                  <Input 
                    type="password" 
                    value={ input.password } 
                    name="password"
                    id="password"
                    onChange={ inputChage }
                    placeholder="*******"
                  />
                  <button className="bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold py-2">Login</button>
                </div>
            </div>
         </div>
       
      </div>
    </div>
  )
}
