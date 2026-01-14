import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css';

export default function StarRating({noOfStars=5}){
const [rating,setRating] = useState(0);
const [hover,sethover] = useState(0);

function handleClick(getCurrentIndex){
setRating(getCurrentIndex);

}

function handlemouseEnter(getCurrentIndex){
sethover(getCurrentIndex)
}

function handlemouseleave(){
sethover(rating)
}

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1
                return <FaStar
                key={index}
                className={index <= (hover || rating)?"active":"inactive"}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handlemouseEnter(index)}
                onMouseLeave={()=>handlemouseleave(index)}
                size={40}
                />
            })
        }
    </div>
}