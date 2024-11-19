import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props)
{
    
        const navigate= useNavigate()
        const users = props.users
        const setusers = props.setusers
      
        const[eusername,esetusername]=useState()
        const[epassword,esetpassword]=useState()
      
        function handleuserinput(evt)
        {
          esetusername(evt.target.value)
        }
        function handlepassinput(evt)
        {
          esetpassword(evt.target.value)
        }
      
        function adduser()
        {
          setusers([...users,{username:eusername,password:epassword}])
          navigate("/")
        }
        return(
          <div className="bg-black p-10">
              <div className="bg-[#EFEFEF] p-10 border rounded-md">
               <h1 className="text-3xl font-medium">Hey,hi</h1>
               <p>I help you manage your activities after you login:)</p>
               <div className="flex flex-col gap-2 my-2 ">
      
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Username" onChange={handleuserinput}></input>
                
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Password" onChange={handlepassinput}></input>
      
                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
                placeholder="Confirm Password"></input>
      
                <button className="bg-[#ffdd40] w-24 p-1 rounded-md" onClick={adduser}>Signup</button>
      
                <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
      
               </div>
              </div>
          </div>
        )
    
}
export default Signup