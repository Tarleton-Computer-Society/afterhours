import React from 'react';
import PropTypes from 'prop-types';
import applogo from '../assets/images/afterhours-logo.png';
import { NavBar } from '../components';
import { Sidebar } from '../components';
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

function Messages(props) {

return (
<>

<div className='appbody'>
<Sidebar/>
<div className='message-section'>
<div className='message-info'>
<div className='msg-top'>
<div className="msg-header">
<h5>Messages</h5>
<a><i class='bx bx-edit'></i></a>
</div>
<div className='msg-search'>
<input placeholder='Search'></input>
<a><i class='bx bx-search'></i></a>
</div>

</div>
<div className='msg-body'>
{/* make a loop  */}
{

[1,2,3,4,5,6,7,8,9,0].map((item, index)=>{
 return (
<div className="msg-user">
<div className="msg-user-img">
<img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_06/3534450/220210-barack-obama-mn-1445.jpg" alt="" />
</div>
<div className="msg-user-info">
<div className="msg-user-info-top">
<label htmlFor="">Teddy Oweh</label>
<small>Dec 08</small>
</div>
<div className="msg-user-info-body">
<span>Lorem, ipsum dolor sit amet consectetur </span>
<small>2</small>
</div>

</div>
</div>)})}

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
<div className="chat-user-help">
<div className="call-icons">
<a href="">
<i class='bx bxs-phone'></i></a>
<a href="">
<i class='bx bxs-video'></i></a>


</div>
<i class='bx bx-dots-vertical-rounded'></i></div>
  </div>
  <div className="chat-body">
  
  
  </div></div>
  <div className='chat-middle'></div>
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
Messages.propTypes = propTypes;
Messages.defaultProps = defaultProps;
// #endregion

export default Messages;