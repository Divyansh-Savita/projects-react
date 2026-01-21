import { useState } from "react";
import MenuList from "./menu-list";


export default function MenuItem({item}){
    const [displaycurrentChildren,setDIsplaychildren]=useState({});
    function handleToggleChildren(getCurrentId){
        setDIsplaychildren({
        ...displaycurrentChildren,
        [getCurrentId]:!displaycurrentChildren[getCurrentId],});
        console.log(displaycurrentChildren);
        
    }
    return <li>
        <div style={{display:"flex",gap:"20px"}}>
            <p>{item.label}</p>
        
        {
            item && item.children && item.children.length>0? <span onClick={()=>handleToggleChildren(item.id)}>
                {
                    displaycurrentChildren[item.id]?'-':'+'
                }
            </span>:null
        }
        </div>
        {
            item && item.children && item.children.length>0 && displaycurrentChildren[item.id]?
            <MenuList list={item.children} />
            :null
        }
    </li>
}