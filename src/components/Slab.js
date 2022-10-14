import { useState, useEffect } from 'react'
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'

export const Slab = ({subject, msg, date, mark, Reset, sample, index}) => {

    const [letter, setLetter ] = useState("")
    const [colors] = useState([
        "#ff9700",
        "#4cb050",
        "#1b80d0",
        "#f44236"
    ])
    
    const [random] = useState(Math.round(Math.random() * 3))

    useEffect(()=>{
        setLetter(subject[0])
    }, [])

  return (
    <div className="slab-box">
      <div className='letter' style={{backgroundColor: colors[random]}}>
        <h2>{letter}</h2>
      </div>
      <div className='slab-inner'>
        <div>
          <p><b>{subject}</b></p>
          <p className='sub'>{msg.slice(0, 35) + "..."}</p>
        </div>
        <div>
            <p>{date}</p>
            <button className='icon' onClick={()=>Reset(index)}>
                {mark?<AiFillStar color='#f7a527'/>:<AiOutlineStar />}
            </button>
        </div>
      </div>
    </div>
  );
};
