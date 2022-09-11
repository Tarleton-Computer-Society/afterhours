 
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';

export default function Sidebar() { 

return (
<><div className="side-bar">
<a href=""><GridViewOutlinedIcon/></a>
<a href=""><CalendarMonthOutlinedIcon/></a>
<a href=""><BookmarkBorderOutlinedIcon/></a>
<a href=""><SendOutlinedIcon/></a>
   <a href=""><PermPhoneMsgOutlinedIcon /></a>
   <a href=""><SettingsOutlinedIcon/></a>
 </div></>)  }