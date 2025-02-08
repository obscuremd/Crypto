import { Bank, Key } from 'iconoir-react'
// import Card from '../../Component/Card'
// import { IsMobile } from '../../Exports/Constatants'
// import Logo from '../../assets/original.svg'
import { useGen } from '../../Providers/GeneralProvider'
import { useState } from 'react'
import axios from 'axios'

const Auth = () => {


  const {url} = useGen()

  const [account_number, set_account_number] = useState('')
  const [password, set_password] = useState('')

  const[loading,setLoading] = useState(false)

  const Login =async()=>{
    setLoading(true)
    try {
      const response = await axios.post(`${url}/user/login`,{account_number,password},{withCredentials:true})
      setLoading(false)
      alert('logged in successfully')
      console.log(response)
    } catch (error) {
      alert('error logging in')
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col md:flex-row gap-5 p-5 items-center justify-center w-full min-h-screen'>
        <div className=' flex flex-col items-center gap-5 '>
          <div className="card bg-base-100 w-96 shadow-xl flex flex-col gap-5 p-5">
            <p className='font-bold text-3xl'>Core wealthier investment</p>
            Sign in to with your account number and password
            <label className="input input-bordered flex items-center gap-2">
              <Bank/>
              <input type="text" className="grow" placeholder="0123456789" onChange={(e)=>set_account_number(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <Key/>
              <input type="password" className="grow" placeholder='password' onChange={(e)=>set_password(e.target.value)} />
            </label>
            <button className="btn btn-primary" onClick={Login}>
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