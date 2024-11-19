function Todoitem(props)
{
    const activityarr = props.activityarr
    const setactivityarr=props.setactivityarr
    
    function handledelete(deleteid)
    {
         var temparr=activityarr.filter(function(item)
        {
            {
                if(item.id==deleteid)
                {
                    return false
                }
                else
                {
                    return true
                }
            }
        })
        setactivityarr(temparr)
    }
    return(
        <div className="flex justify-between gap-96 p-1 m-2">
        <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-600" onClick={()=>handledelete(props.id)}>Delete</button>
        </div>
    )
}
export default Todoitem