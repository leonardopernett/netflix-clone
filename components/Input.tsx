import React from "react"

interface InputProps {
  id?:string
  onChange:any
  value:string 
  type?:string
  name:string
  placeholder:string
}

const Input:React.FC<InputProps> = ({
  onChange,
  name,
  value, 
  type,
  placeholder
}) => {
  return (
    <>

     
      <input 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange}
        className="
          rounded-md
        bg-neutral-700 
          appearance-none 
          focus:outline-none 
          w-full 
        text-white
          mb-3 
          px-6 py-3" 
        placeholder={placeholder}
     />
    </>
  )
}
export default Input