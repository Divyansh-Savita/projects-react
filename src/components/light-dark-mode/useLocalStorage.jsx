import { useEffect, useState } from "react";


export default function useLocalStorage(key,defaultvalue){
    const [value,setvalue]=useState(()=>{
        let currentValue;
        try{
            currentValue.JSON.parse(localStorage.getItem(key)||String(defaultvalue))
        }catch(error){
            console.log(error);
            currentValue=defaultvalue;
        }
        return currentValue;
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return [value,setvalue]
}