import Input from "@/components/Input";
import { useCallback, useState } from "react";

export default function auth() {


  const [input, setInput] = useState({
    username:'',
    email:'',
    password:''
  })
  const [variant, setvariant] = useState("login")

  const inputChage = (e:any) => setInput({...input, [e.target.name]:e.target.value})

  const toggleVariant = useCallback(() => {
    console.log('renderizado')
      setvariant(prev => prev === 'login' ? 'register':'login')
  },[])
   

  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black h-full lg:bg-opacity-50 w-full">

         <nav className="w-full px-12 py-5">
             <img src="/images/logo.png" alt="logo" className="h-12" />
         </nav>

         <div className="flex justify-center items-center">
            <div className="bg-black rounded-md bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md  lg:w-2/5">
                <h2 className="text-white font-semibold text-2xl mb-5">
                   {variant ==='login' ? 'Sign in' : 'Register' }
                </h2>
                <div className="flex flex-col w-full">
                   {
                      variant ==='register' && (
                        <Input 
                          type="text" 
                          value={ input.email } 
                          name="username"
                          id="username"
                          onChange={ inputChage }
                          placeholder="Username"
                        />
                      )
                   }
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
                  <button className="bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold py-2">
                     { variant ==='login' ? 'Login' : 'Sign up' }
                  </button>
                  <p className="text-neutral-500 mt-10">   { variant ==='login' ? 'First time using Netflix? ' : 'Already have an account? ' } 
                     <span className="text-white hover:underline cursor-pointer" onClick={toggleVariant}>
                     { variant ==='login' ? 'Create and account' : 'Login' } 
                       </span>
                  </p>
              
                </div>
            </div>
         </div>
       
      </div>
    </div>
  )
}
