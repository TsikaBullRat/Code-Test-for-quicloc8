import { useState, useEffect } from "react"
import logo from "../assets/Quicloc8-logo.png"

export const Splash = () =>{
    
    const [sizer, setSizer] = useState(500)
    
    useEffect(()=>{
        setInterval(()=>{
            if(sizer === 500)setSizer(600)
            else setSizer(500)
        }, 1000)
    })
    
    return(
        <div className="splash">
            <img src={logo} width={sizer} height={"auto"}/>
        </div>
    )
}