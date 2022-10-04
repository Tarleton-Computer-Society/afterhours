 
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import logo from '../assets/images/afterhours-logo.png'
import { Transform } from '@mui/icons-material';
export default function Sidebar(props) { 

return (
<>
<div className="sidebar">

<a className='applogo'><i class='bx bxs-hourglass'></i><label htmlFor="">A</label></a>


<div className='sideitems'>

<a href='./'><i class='bx bxs-dashboard'></i><p class="label">DASHBOARD</p></a>
<a href='./search'><i class='bx bxs-search'></i><p class="label">SEARCH</p></a>
<a href='./groups'> <i class='bx bxs-group' ></i><p class="label">GROUPS</p></a>
<a href='./messages'><i class='bx bxs-conversation'></i><p class="label">MESSAGES</p></a>
<a><i class='bx bxs-calendar'></i><p class="label">CALENDAR</p></a>
<a><i class='bx bxs-bookmark-alt'></i><p class="label">[BLANK]</p></a>
<a><i class='bx bxs-phone-call'></i><p class="label">[BLANK]</p></a>
</div>
</div>
 
 
 </>)  }