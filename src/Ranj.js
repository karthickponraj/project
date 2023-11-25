import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Ranj.css';
function Ranj() {
  const a = useNavigate();
  function aa() {
    a('/sign');
  }
  function change() {
    a('/home');
  }
  function cc()
  {
    var c=document.getElementById('s1').value;
    var d=document.getElementById('s2').value;
    console.log(c);
    console.log(d);
  }
  return (
    <center>
      <div className='faf'>
        <div className='div'>
          <h2>LOG IN</h2><br />
        </div><br />
        <div className='div1'>
          <form onSubmit={change}>
            <table >
              <tr>
                <td><AccountCircleIcon sx={{ width: '40px', height: '40px' }} /></td>
                <TextField id="s1" label="Name" variant="outlined" required onBlur={cc}/>
              </tr>
              <tr>
                <td><KeyIcon sx={{ width: '40px', height: '40px' }} /></td>
                <TextField id="s2" label="Password" variant="outlined" type='password' required onBlur={cc}/>
              </tr>
            </table><br />
            <button type='submit' style={{ width: '90px', height: '30px' }} className='rrr'>SUBMIT</button>
            <br />
            <p>New User?</p><button onClick={aa} style={{ width: '90px', height: '30px' }} className='rrr'>Signup
            </button>
          </form>
        </div>
      </div>
    </center>
  );
}

export default Ranj;

