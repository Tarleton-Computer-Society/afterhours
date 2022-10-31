 
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import logo from '../assets/images/afterhours-logo.png'
import { Transform } from '@mui/icons-material';
export default function Sidebar(props) { 
const userdata=localStorage.getItem('myData');
const udata = JSON.parse(userdata)
const firstname = udata['firstname']
const lastname = udata['lastname']
return (
<>
<div className="sidebar">
<div className='top'>
<a className='applogo'><i class='bx bxs-hourglass'></i><label htmlFor="">A</label></a>


<div className='sideitems'>

<a href='./'><i class='bx bxs-dashboard'></i><p class="label">DASHBOARD</p></a>
<a href='./search'><i class='bx bxs-search'></i><p class="label">SEARCH</p></a>
<a href='./groups'> <i class='bx bxs-group' ></i><p class="label">GROUPS</p></a>
<a href='./messages'><i class='bx bxs-conversation'></i><p class="label">MESSAGES</p></a>
<a><i class='bx bxs-calendar'></i><p class="label">CALENDAR</p></a>
<a><i class='bx bxs-bookmark-alt'></i><p class="label">[BLANK]</p></a>
<a href='./calls'><i class='bx bxs-phone-call'></i><p class="label">CALLS</p></a>
</div>
</div>
<div className='bottom'>
    <label>{firstname[0]+lastname[0]}</label>
</div>
</div>
 
 
 </>)  }