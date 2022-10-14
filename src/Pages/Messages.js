import { useState, useEffect } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import { Slab } from "../components/Slab"
import data  from "../assets/messages.json"

export const Messages = () =>{
    
    const [ messages, setMessages] = useState(null)

    const resetMessages = () =>{
        let arr = data.map(item=>({...item, marked: false}))
        setMessages(arr)
    }

    const Reset2 = (compare) =>{
        let change = messages.map((item, index)=>{
            if(index === compare){
                return({
                    display: item.display,
                    marked: !item.marked,
                    message: item.message,
                    subject: item.subject
                })
            }else{
                return item
            }
        })
        setMessages(change)
    }

    useEffect(()=>{
        resetMessages()
    },[data])

    return(
        <div>
            <header className="head">
                <Link to="/" style={{marginTop: 9}}>
                    <AiOutlineArrowLeft color="#fff" size={26}/>
                </Link>
                <h2 style={{marginLeft: 20}}>Messgaes</h2>
            </header>
            <div>
                {messages?(
                    messages.map((item, index)=><Slab 
                    key={index}
                    msg={item.message}
                    subject={item.subject}
                    date={item.display}
                    mark={item.marked}
                    Reset={Reset2}
                    index={index}
                />)
                ):null}
            </div>
        </div>
    )
}