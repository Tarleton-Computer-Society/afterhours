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


function Calls(props) {
const [typeView, setView] = useState('people');
const [callView, setCallView] = useState('incoming')
function shuffleView(){
if(typeView === 'people'){
setView('recents')
}else if(typeView === 'recents'){
setView('people')
}
}

function acceptCall() {
  setCallView('accepted')
}
function declineCall() {
  setCallView('missed')
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

<div className="caller">
<div className="caller-img">
<img src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png" alt="" />
</div>
<div className="caller-info">

{typeView=='recents'&&<> 
<div className="caller-info-top">
<label htmlFor="">[NAME]</label>
<small>[DATE]</small>
</div>
<div className="caller-info-body">
<span>00:00</span>
<small>#</small>
</div>

</>}
{typeView=='people'&&<> 
<div className="caller-info-top">
<label htmlFor="">[NAME]</label>
 
</div>
 

</>}


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
 
{/* Caller ID */}
<div class="caller-id">
  <div class="caller">
<img src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users.png" alt="" />
<p class="caller-name">Jane Doe</p>
<p class="time-of-call">00:00</p>

{/* Call Options */}
{callView=='missed'&&<>
<div class="call-options">
  <div class="icon-bg">
  <i class='bx bxs-conversation' id="icon"></i>
  <p class="label">Message</p>
  </div>
  <div class="icon-bg">
    <i class="bx bxs-phone-outgoing" id="icon"></i>
    <p class="label">Call Back</p>
  </div>
</div>
<p class="call-status">Missed Call</p>
</>}

{/* During a call */}
  {/* Incoming Call */}
  {callView=='incoming'&&<>
    <div class="incoming-call-options">
      <div class="icon-bg">
        <i class= 'bx bxs-timer' id="icon"></i>
        <p class="label">Remind</p>
      </div>
      <div class="icon-bg">
        <i class="bx bxs-conversation" id="icon"></i>
        <p class="label">Message</p>
      </div>
    </div>
    <div class="call-options">
      <div class="answer-icon-bg" onClick={acceptCall}>
        <i class="bx bxs-phone" id="answer-icon"></i>
        <p class="label">Accept</p>
      </div>
      <div class="decline-icon-bg" onClick={declineCall}>
        <i class="bx bxs-phone-off" id="decline-icon"></i>
        <p class="label">Decline</p>
      </div>
    </div>
    <p class="call-status">Incoming Call</p> 
    </>}

  {/* Accepted Call */}
  {callView=='accepted'&&<>
  <div class="call-options">
    <div class="icon-bg">
      <i class="bx bxs-microphone-off" id="icon"></i>
      <p class="label">Mute</p>
    </div>
    <div class="icon-bg">
      <i class="bx bxs-user-plus" id="icon"></i>
      <p class="label">Add</p>
    </div>
  </div>
  <div class="call-options">
    <div class="decline-icon-bg">
      <i class="bx bxs-phone" id="decline-icon"></i>
      <p class="label">End</p>
    </div>
  </div>
  </>}
  

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