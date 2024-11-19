import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate = useNavigate()
  const[eusername,esetusername]=useState()
  const[epassword,esetpassword]=useState()
  const[reguser,setreguser]=useState(true)
  const users = props.users
  function checkuser()
  {
    var userfound = false
    users.forEach(function(item)
  {
    if(item.username === eusername && item.password === epassword)
    {
      console.log("Login successful")
      userfound = true
      navigate("/landing" ,{state:{username:eusername}})
    }
   
  })
  if(userfound===false)
  {
    console.log("Login failed")
    setreguser(false)
  }
  }
  function handleuserinput(evt)
  {
    esetusername(evt.target.value)
  }
  function handlepassinput(evt)
  {
    esetpassword(evt.target.value)
  }
  return(
    <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
     <h1 className="text-3xl font-medium">Hey,hi</h1>
    {reguser? <p>I help you manage your activities after you login:)</p>:<p className="text-red-500">please signup before you login!</p>}
     <div className="flex flex-col gap-2 my-2 ">

      <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
      placeholder="Username" onChange={handleuserinput}></input>
      
      <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
      placeholder="Password" onChange={handlepassinput}></input>

      <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>

      <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>

     </div>
    </div>
</div>

  )
}
export default Login