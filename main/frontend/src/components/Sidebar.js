 
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import logo from '../assets/images/afterhours-logo.png'
export default function Sidebar(props) { 

return (
<>
<div className='sideb-m'>
<div className="logo">
<img src={logo} alt="logo" />
</div>

<div className="side-bar">

{props.active === 'home' ?
 <a href="" className='active'><GridViewOutlinedIcon/>
<label htmlFor="">Dashboard</label>
</a>
: 
<a href=""><GridViewOutlinedIcon/>
<label htmlFor="">Dashboard</label>
</a>}

{props.active === 'calendar' ?
  <a href="" className='active'><CalendarMonthOutlinedIcon/>
  <label htmlFor="">Calendar</label>
  </a>
  :

<a href=""><CalendarMonthOutlinedIcon/>
<label htmlFor="">Schedule</label>
</a>}

{props.active === 'resources' ?
  <a href="" className='active'><BookmarkBorderOutlinedIcon/>
  <label htmlFor="">Resources</label>
  </a>
  :

<a href=""><BookmarkBorderOutlinedIcon/>
<label htmlFor="">Resources</label></a>}
<a href=""><SendOutlinedIcon/>
<label htmlFor="">Messages</label></a>
   <a href=""><PermPhoneMsgOutlinedIcon />
   <label htmlFor="">Call</label>
   </a>
   <a href=""><SettingsOutlinedIcon/>
   <label htmlFor="">Settings</label>
   </a>
 </div>
 
 </div></>)  }