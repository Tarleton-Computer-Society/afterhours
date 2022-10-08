import React,{useState} from 'react';
import PropTypes from 'prop-types';
import applogo from '../assets/images/afterhours-logo.png';
import { NavBar } from '../components';
import { Sidebar } from '../components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

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
function displayCaller() {
  document.getElementByClass("caller").classList.toggle("toggle-caller");
}

function Calls(props) {
const [typeView, setView] = useState('people');
function shuffleView(){
if(typeView === 'people'){
setView('recents')
}else if(typeView === 'recents'){
setView('people')
}
}
return (
<>

<div className='appbody'>
<Sidebar/>
<div className='call-section'>
<div className='call-info'>
<div className='top'>
<div className="header">
<h5>Calls</h5>
<a><i class='bx bx-edit'></i></a>
</div>
<div className='search'>
<input placeholder='Search'></input>
<a><i class='bx bx-search'></i></a>
</div>

</div>
<div className='body'>
{/* make a loop  */}
 
<div className="calls-side-bar">
<div className="top-buttons">
<label onClick={shuffleView} className={typeView=='people'&&'active'} htmlFor="">People</label>
<label onClick={shuffleView} className={typeView=='recents'&&'active'} htmlFor="">Recents</label>
</div>
<div className="body">

<div className="caller" onClick={displayCaller}>
<div className="caller-img">
<img src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png" alt="" />
</div>
<div className="caller-info">
<div className="caller-info-top">
<label htmlFor="">[NAME]</label>
<small>[DATE]</small>
</div>
<div className="caller-info-body">
<span>00:00</span>
<small>#</small>
</div>
</div>
</div>

<div className="caller" onClick={displayCaller}>
<div className="caller-img">
<img src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png" alt="" />
</div>
<div className="caller-info">
<div className="caller-info-top">
<label htmlFor="">[NAME]</label>
<small>[DATE]</small>
</div>
<div className="caller-info-body">
<span>00:00</span>
<small>#</small>
</div>
</div>
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
</div>
</div>
{/* Caller ID */}
<div class="caller-id">
  <div class="caller">
<img src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png" alt="" />
<p class="caller-name">Jane Doe</p>
<p class="time-of-call">00:00</p>
{/* Call Options */}
<div class="call-options">
  <div class="icon-bg">
  <i class='bx bxs-conversation' id="icon"></i>
  <p class="label">Message</p>
  </div>
  <div class="icon-bg">
    <i class="bx bxs-phone-call" id="icon"></i>
    <p class="label">Call Back</p>
  </div>
</div>
<p class="call-status">Missed Call</p>
</div>
</div>
</div>
</div></div>
</div>
</div>
</>
)
}
Calls.propTypes = propTypes;
Calls.defaultProps = defaultProps;
// #endregion

export default Calls;