import React,{useEffect,useState,useRef} from "react";
import jerryimg from "../assets/images/jerry.webp";
import axios from "axios";
 function Labelbox({word}){
const [worda, setWorda] = React.useState(word)
const [viewmore, setViewmore] = React.useState(false)
if(worda.length > 300 && !viewmore){
    


    return (
        <label> {worda.slice(0,200)} <small><b onClick={()=>setViewmore(!viewmore)} > more... </b> </small></label>
    )
 }
 else{
    return (
        <label className={viewmore==true&& "active"}> {worda} {viewmore==true&& <small><b onClick={()=>setViewmore(!viewmore)} > less... </b> </small>} </label>
    )
 }
}

function ChatBox(props){
    const chatDiv =useRef(null)
    const [message, setMessage] = React.useState('')
    const [messages, setMessages] = React.useState([])

const getChats = async () => {
    await axios.post('http://localhost:3001/chat/all',{id:props.typeid}).then(res => {
        setMessages(res.data)
    })
}
console.log(messages)

useEffect(() => {
    getChats()
    const lastChild = chatDiv.current.lastChild;

    // Use the scrollIntoView method to automatically scroll to the bottom of the div
 
        chatDiv.current?.scrollIntoView({ })
   

}, [messages])

const sendmessage = (e)=>{
    e.preventDefault()
if(message.length !=0){
    props.sendmessage(e,message)
    setMessage('')
}
}


const wrods='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis eros, tincidunt ut purus ac, luctus placerat purus. Etiam vestibulum mattis arcu non consectetur. Etiam sed magna felis. Aliquam non porta magna, non vestibulum sapien. Quisque pellentesque condimentum dignissim. Maecenas vitae varius mauris, convallis porttitor purus. Ut eget accumsan enim. Aenean massa tortor, venenatis a ultrices vel, iaculis id ligula. Ut id luctus tellus. Nam nec dui ut diam laoreet consectetur. Nulla facilisi. Proin a dictum ante. Vestibulum venenatis, sem eget euismod vestibulum, justo ex convallis magna, ac euismod risus nisi non est. Integer id rutrum dui.'
    return(
        <>
        <div id="chat-div" className="chatsystem">
            {
                messages.map((item,index)=>{
                return (
                    <>
         {item.fromid==props.myid
     &&
            <div className="chat in">
    
            <label>{item.message}</label>
            </div>
        }  {item.fromid!=props.myid
            &&
            <div className="chat out">
            <img src={jerryimg}></img>
        <div className="chat-msg">
            <span>
                {item.fromname}
            </span>
          <Labelbox word={item.message}/>
          </div> 
            </div>
             }
            </>
                )
            })}
            <div ref={chatDiv}></div>
        </div>
        <div className="chat-input">
        <div className="chat-bottom">
  



  <div  className="chat-message-box">
    <form  onSubmit={(e)=>sendmessage(e,message)}  >
      

  <input onChange={(e)=>setMessage(e.target.value)} onSubmit={(e)=>sendmessage(e,message)} value={message} placeholder='Type Message ... ' type="text" />
  </form>
  <div className="chat-message-box-btns">
  <a><i class='bx bx-microphone'></i></a>
  
  <a><i class='bx bx-file'></i></a>

  <a  onClick={(e)=>sendmessage(e,message)} > <i class='bx bx-send'></i></a>
  </div>
  </div>

    
  </div>
        </div>
        
        </>
    )
}

export default ChatBox;