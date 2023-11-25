import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import CallIcon from '@mui/icons-material/Call';
import "./Signup.css";
const Signup=()=>{
    const s=useNavigate();
    function Sign()
    {
        s('/')
    }
    return(
            <center>
                <div className="div2">
                    <h1 className='header'>Sign up</h1><br/>
                    <div className="div3">
                        <form>
                            <table cellSpacing={20}>
                                <tr>
                                <td><AccountBoxIcon sx={{width:'40px',height:'40px'}}/></td>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                                </tr>
                                <tr>
                                <td><MailIcon sx={{width:'40px',height:'40px'}}/></td>
                                <TextField id="outlined-basic" label="email" variant="outlined" type="email" />
                                </tr>
                                <tr>
                                <td><KeyIcon sx={{width:'40px',height:'40px'}}/></td>
                                <TextField id="outlined-basic" label="password" variant="outlined" type="password"/>
                                </tr>
                                <tr>
                                <td><CallIcon/></td>
                                <TextField id="outlined-basic" label="Mobile" variant="outlined" type="number" />
                                </tr>
                            </table>
                            <button onClick={Sign} style={{width:'90px',height:'30px'}} className="rrr">Create</button>
                        </form> 
                    </div> 
                </div>          
            </center>   
    )
}
export default Signup