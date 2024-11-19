import Addtodoform from "./addtodoform"
import Todolist from "./todolist"
function Todocontainer()
{
  return(
    <div>
        <div className="flex gap-5 flex-wrap">
        <Addtodoform></Addtodoform>
        <Todolist></Todolist>
        </div>
    </div>
  )
}
export default Todocontainer