import { Bank, Key } from 'iconoir-react'
import Logo from '../../assets/logo copy.png'
import { useState } from 'react'
import { useSignIn } from '@clerk/clerk-react'

const Auth = () => {

  const { isLoaded, signIn} = useSignIn()

  const [username, setUsername] = useState('')
  const [password, set_password] = useState('')

  const[loading,setLoading] = useState(false)

 const login =async()=>{
    
    if(!isLoaded){return}
    
    if(username =='' || password === ''){
      setLoading(true)
      setTimeout(()=>{
        alert('Please enter your email/ password')
        setLoading(false)  
      },1000)
    }
    else{
      
      setLoading(true)

      try {
        await signIn.create({
          identifier: username,
          password: password
        })


      
      setTimeout(()=>{
        alert('Logged in successfully')
        setLoading(false)
        window.location.reload()
        },2000)
        
        
      } catch (err:unknown) {
        
        const error = err as { errors?: { code: string }[] };
        
        setLoading(false)
        if(error.errors && error.errors[0]?.code === 'form_param_format_invalid'){
          alert('Login-Id/Login-Password is invalid')
        }else{
          alert(JSON.stringify(error.errors && error.errors[0]?.code))
          console.log(JSON.stringify(error));
          console.log(error)
        }
      }
    }
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 p-5 items-center justify-center w-full min-h-screen'>
        <div className=' flex flex-col items-center gap-5 '>
          <div className="card bg-base-100 w-96 shadow-xl flex flex-col gap-5 p-5">
            <img src={Logo} className='w-24'/>
            <p className='font-bold text-3xl'>Core wealthier investment</p>
            Sign in to with your account number and password
            <label className="input input-bordered flex items-center gap-2">
              <Bank/>
              <input type="text" className="grow" placeholder="0123456789" onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <Key/>
              <input type="password" className="grow" placeholder='password' onChange={(e)=>set_password(e.target.value)} />
            </label>
            <button className="btn btn-primary" onClick={login}>
              {loading 
              ?<span className="loading loading-spinner loading-lg"></span>
              :'Login'}
            </button>
          </div>
        </div>
        
    </div>
  )
}

export default Auth