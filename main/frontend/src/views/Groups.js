import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import applogo from '../assets/images/afterhours-logo.png';
import { NavBar } from '../components';
import { Sidebar } from '../components';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { setGroups } from '../store/groups-slice';
import majorsdata from '../assets/data/majors.json';
import ChatBox from '../components/ChatBox';

 

function Groups(props) {
  const dispatch = useDispatch();
  const [grouptypeview, setGrouptypeview] = useState('mine');
 
  const [majorlist, setMajorlist] = useState([]);
  const [focusmajor, setFocusmajor] = useState(null)
  const [majorlist1, setMajorlist1] = useState(majorlist);
  const [searchinput, setSearchinput] = useState('');
const [mydata, setMydata] = useState(JSON.parse(localStorage.getItem('user')))

  function shufflegrouptypeview(what){
   
  setGrouptypeview(what)
  getGroups(what)
  
  }

  const getMe = async ()=> {
    await axios.get('http://localhost:3001/v1/me').then(res => {
      console.log(res.data)
      // dispatch(setGroups(res.data))
      setMydata(res.data)
    })
    // console.log(res.data)
     
}
const joinGroup = async (groupname)=> {
  await axios.post('http://localhost:3001/groups/join',{id:mydata.id,groupname:groupname}).then(res => {
    shufflegrouptypeview('mine')
    const newffgroup =   [...focusmajor]
    newffgroup.members.push(mydata.id)
    setFocusmajor(newffgroup)
  
  })


  // console.log(res.data)
   
}

  const getGroups = async (what)=> {
      await axios.get('http://localhost:3001/groups/all').then(res => {
      
        // dispatch(setGroups(res.data))

        if(what === 'mine'){
          let tempsgroups= [];
          for(let i=0; i <res.data.length-1; i++){
         
           if(res.data[i].members.includes(mydata.id)){
    
             tempsgroups.push(res.data[i])
           }
         }
        
         setMajorlist(tempsgroups)
         setMajorlist1(tempsgroups)
   
         }
         else if(what === 'majors'){
          let tempsgroups = res.data
          setMajorlist(tempsgroups)
          setMajorlist1(tempsgroups)
          }
      
      })
      // console.log(res.data)
       
  }

  console.log(mydata)

 
function searchMajors(e){
setSearchinput(e.target.value)
// filterMajors()
setMajorlist(majorlist1.filter(major => major.name.toLowerCase().includes(searchinput.toLowerCase())))

function filterMajors(){
  if(searchinput === ''){
    return majorlist
    }else{
    return majorlist.filter((major)=>{
    return major.name.toLowerCase().includes(searchinput.toLowerCase())
    })
    }
  
  }

}
function sendmessage(e,message){
  e.preventDefault()
  const fromid = mydata.id
  const fromname = mydata.name
  const  typeid = focusmajor._id
  const type = 'group'

  const body ={
  message:message,
        fromid:fromid,
        fromname:fromname,
        typeid:typeid,
        type:type}
  axios.post('http://localhost:3001/chat/sendmessage',body).then(res => {
      console.log(res.data)
      // dispatch(setGroups(res.data))
    })


}
useEffect(() => {
  getGroups(grouptypeview)
  getMe()
  }, []);
return (
<>

<div className='appbody'>
<Sidebar/>
<div className='message-section'>
<div className='message-info'>
<div className='msg-top'>
<div className="msg-header">
<h5>Groups</h5>
<a><i class='bx bx-edit'></i></a>
</div>
<div className='msg-search'>
<input onChange={e=>searchMajors(e)}value={searchinput}placeholder='Search'></input>
<a><i class='bx bx-search'></i></a>
</div>

</div>
<div className='msg-body'>
{/* make a loop  */}
 
<div className="groups-side-bar">
<div className="top">
<label onClick={()=>shufflegrouptypeview('mine')} className={grouptypeview=='mine'&&'active'}htmlFor="">My Groups</label>
<label onClick={()=>shufflegrouptypeview('majors')} className={grouptypeview=='majors'&&'active'} htmlFor="">Majors</label>
<label onClick={()=>shufflegrouptypeview('courses')} className={grouptypeview=='courses'&&'active'}htmlFor="">Courses</label>

</div>
<div className="body">

<div className="group-list">
{majorlist && majorlist.map((majorss,index)=>{
return (
<label onClick={()=>setFocusmajor(majorss)} htmlFor="">

{majorss.name}
</label>)
})}



</div>
</div>
</div>

</div>

</div>
<div className="middbar">
 
<div className='dashboard-bar msc-w'>
  {focusmajor!=null &&
  <div className='chatbox'>
<div className="chat-top">
  <div className="chat-header-info">
  <div className="chat-user-top-left">
  {/* <div className="chat-user-img">
<img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_06/3534450/220210-barack-obama-mn-1445.jpg" alt="" />
</div> */}
<div className="chat-user-name">
<label htmlFor="">{focusmajor.name}</label>
<small> <label> <i class='bx bxs-group'></i> <label htmlFor="">{focusmajor.members.length} Members</label></label></small>
</div>
</div>
<div className="chat-user-help"><i class='bx bx-dots-vertical-rounded'></i></div>
  </div>


  </div>
  {
      focusmajor.members.includes(mydata.id) ?
      <>
  <div className="chat-body">
    
    <ChatBox sendmessage={sendmessage} myid={mydata.id} typeid={focusmajor._id}/>
    </div> 
 
  </>:<>
  <div className="unmember">
    <p>You are not a member of this groups</p>
    <button onClick={()=>joinGroup(focusmajor.name) } >Join</button>


    </div>
  </>
    }
  </div>
}
  {focusmajor==null &&
  <div className="chat-box unactivechat">
    <label htmlFor="">Select a group to start chatting</label>
  </div>
  }
  
</div></div>
</div>
</div>
</>
)
}
 
// #endregion

export default Groups;