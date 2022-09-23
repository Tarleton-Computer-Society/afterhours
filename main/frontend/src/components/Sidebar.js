 
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
<div className="sidebar">

<a className='applogo'><i class='bx bxs-hourglass'></i><label htmlFor="">A</label></a>


<div className='sideitems'>

<a href='./'><i class='bx bxs-dashboard'></i></a>
<a href='./search'><i class='bx bxs-search'></i></a>
<a href='./groups'> <i class='bx bxs-group' ></i></a>
<a href='./messages'><i class='bx bxs-conversation'></i></a>
<a><i class='bx bxs-calendar'></i></a>
<a><i class='bx bxs-bookmark-alt'></i></a>
<a><i class='bx bxs-phone-call'></i></a>
</div>
</div>
 
 
 </>)  }