import { useState } from "react"
import Todoitem from "./todoitem"
function Todolist()
{
    const[activityarr,setactivityarr]=useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have some tea"
        },
        {
            id:3,
            activity:"Take Rest"
        }
    ])
    return(
          <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow my-2">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityarr.length==0?<p>You haven't added any activity yet</p>:""}
           
            {
                activityarr.map(function(item,index)
            {
                return <Todoitem id={item.id} activity={item.activity} index={index} activityarr={activityarr} setactivityarr={setactivityarr}/>

            })
            }
        </div>
    )
}
export default Todolist