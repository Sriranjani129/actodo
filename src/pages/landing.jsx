import Card from "../components/card";
import Todocontainer from "../components/todocontainer";
import Header from "../components/header";
import { useLocation } from "react-router-dom"

function Landing()
{ 
    const data = useLocation()
    console.log(data.state.user)
    return(
     <div className="bg-black p-16 w-100 h-full">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header username={data.state.user}></Header>

        <div className="flex justify-between my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>

          <Card
            bgcolor={"#FD6663"}
            title={"December"}
            subtitle={"14.23.09"}
          ></Card>

          <Card
            bgcolor={"#FCA201"}
            title={"Built Using"}
            subtitle={"React"}
          ></Card>
        </div>
        <Todocontainer></Todocontainer>

      </div>

    </div>
  );
    
}
export default Landing