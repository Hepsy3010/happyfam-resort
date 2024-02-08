import React ,{useState, useEffect} from 'react'
import axios from"axios"
import Loader from "../components/Loader";
import Error from '../components/Error';
import Success from '../components/Success';

function Registerscreen() {
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[cpassword,setcpassword]=useState('')
  const [loading, setLoading] = useState(false); // Initialize loading as true
  const [error, setError] = useState();
  const [success,setSuccess]=useState()

  async function register(){
   if(password===cpassword)
   {
    const user={
      name,
      email,
      password,
      cpassword
    };
    try {
      setLoading(true);
      const result= (await axios.post('/api/users/register',user)).data
      setLoading(false)
      setSuccess(true)
      setError(false)

      setname('')
      setemail('')
      setpassword('')
      setcpassword('')

    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)
      setSuccess(false)
    }
   }
   else{
    alert("Password not matched")
   }

  }
  return (
    <div>
      {loading &&(<Loader/>)}
      {error &&(<Error/>)}
     <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
        {success && (<Success message='Registration success' />)}
          <div className='bs'>
            <h2>Register</h2>
            <input type="text" className="form-control" placeholder="name"
             value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input type="text" className="form-control" placeholder="email"
            value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="text" className="form-control" placeholder="password"
            value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            <input type="text" className="form-control" placeholder="confirm password"
            value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
            
            <button className='btn btn-primary mt-3'onClick={register}>Register</button>
            
          </div>
        </div>
       </div>
    </div>

  )
}

export default Registerscreen