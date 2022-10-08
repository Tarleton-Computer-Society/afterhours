import React,{useState} from 'react';
import PropTypes from 'prop-types';
import applogo from '../assets/images/afterhours-logo.png';
import { NavBar } from '../components';
import { Sidebar } from '../components';
import majorsdata from '../assets/data/majors.json';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */

function Groups(props) {
const [grouptypeview, setGrouptypeview] = useState('majors');
const [majorlist, setMajorlist] = useState(majorsdata);
const [majorlist1, setMajorlist1] = useState(majorsdata);
const [searchinput, setSearchinput] = useState('');
function shufflegrouptypeview(){
if(grouptypeview === 'majors'){
setGrouptypeview('courses')
}else if(grouptypeview === 'courses'){
setGrouptypeview('majors')
}
}
console.log(majorlist)
function searchMajors(e){
setSearchinput(e.target.value)
setMajorlist(majorlist1.filter(major => major.major.toLowerCase().includes(searchinput.toLowerCase())))

function filterMajors(){
  if(searchinput === ''){
    return majorlist
    }else{
    return majorlist.filter((major)=>{
    return major.major.toLowerCase().includes(searchinput.toLowerCase())
    })
    }
  
  }

}
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
<label onClick={shufflegrouptypeview} className={grouptypeview=='majors'&&'active'} htmlFor="">Majors</label>
<label onClick={shufflegrouptypeview} className={grouptypeview=='courses'&&'active'}htmlFor="">Courses</label>
</div>
<div className="body">

<div className="group-list">
{majorlist && majorlist.map((majorss,index)=>{
return (
<label htmlFor="">

{majorss.major}
</label>)
})}

 
</div>
</div>
</div>

</div>

</div>
<div className="middbar">
<NavBar/>
<div className='dashboard-bar msc-w'>
  <div className='chatbox'>
<div className="chat-top">
  <div className="chat-header-info">
  <div className="chat-user-top-left">
  <div className="chat-user-img">
<img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_06/3534450/220210-barack-obama-mn-1445.jpg" alt="" />
</div>
<div className="chat-user-name">
<label htmlFor="">Teddy Oweh</label>
<small><span></span> <label htmlFor="">Active</label></small>
</div>
</div>
<div className="chat-user-help"><i class='bx bx-dots-vertical-rounded'></i></div>
  </div>
  <div className="chat-body"></div></div>
  
  <div className="chat-bottom">
  <div className="chat-message-box">
  <input placeholder='Type Message ... ' type="text" />
  <div className="chat-message-box-btns">
  <a><i class='bx bx-microphone'></i></a>
  
  <a><i class='bx bx-file'></i></a>

  <a><i class='bx bx-send'></i></a>
  </div>
  </div></div>
  
  
  </div>
  
</div></div>
</div>
</div>
</>
)
}
Groups.propTypes = propTypes;
Groups.defaultProps = defaultProps;
// #endregion

export default Groups;