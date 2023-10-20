import "./Dropdown.css"
import { useState } from "react";

function Dropdown2(props) {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="flex-container">
      <div>Grouping </div>
      <div className="dropdown" onClick={()=>setIsOpen(!isOpen)}> 
        {props.now}
        <span class="material-symbols-outlined">
  arrow_drop_down
  </span>
        {isOpen?
        <div>
          <div onClick={()=>{props.change("Status")}}>Status</div>
          <div onClick={()=>{props.change("Priority")}}>Priority</div>
          <div onClick={()=>{props.change("User")}}>User</div>
        </div>
        :null
        }
      </div>
    </div>);
}
function Dropdown3(props) {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="flex-container">
      <div>Ordering </div>
      <div className="dropdown" onClick={()=>setIsOpen(!isOpen)}> 
        {props.now}
        <span class="material-symbols-outlined">
  arrow_drop_down
  </span>
        {isOpen?
        <div>
          <div onClick={()=>{props.change("Priority")}}>Priority</div>
          <div onClick={()=>{props.change("Title")}}>Title</div>
        </div>
        :null
        }
      </div>
    </div>);
}
export default function Dropdown(props) {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="dropdown">
    <div onClick={()=>setIsOpen(!isOpen)}> 
      Display
      <span class="material-symbols-outlined">
arrow_drop_down
</span>
    </div>
      {isOpen?
        <div>
        <Dropdown2 now={props.grouping} change={props.changeGrouping}/>
        <Dropdown3 now={props.ordering} change={props.changeOrdering}/>
        </div>
      :null
      }
    </div>);
}