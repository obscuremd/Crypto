import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Accounts from './Screens/Accounts'
import BottomNav from './Components/BottomNav'
// import PayTransfer from './Screens/PayTransfer'
import DepositChecks from './Screens/DepositChecks'
import Trade from './Screens/Trade'
import Navbar from './Components/Navbar'
import Transfers from './Screens/Transfers'
import PayBills from './Screens/PayBills'
import WireTransfers from './Screens/WireTransfers'
import Zelle from './Screens/Zelle'
import Profile from './Screens/Profile'
import { useEffect } from 'react'
import { useGen } from '../../Providers/GeneralProvider'
import { useClerk } from '@clerk/clerk-react'
import axios from 'axios'

const Main = () => {

  const { url,userData, setUserData, setHistory} = useGen()
  const {user} = useClerk()

  console.log(user?.username)

  useEffect(()=>{
    const getUser =async()=>{
      try {
        const res = await axios.get(`${url}/user/${user?.username}`)
        if(res.data.success){
          setUserData(res.data.user)
        }else{
          alert('error getting user')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  },[])
  useEffect(()=>{
    const getHistory =async()=>{
      try {
        const res = await axios.get(`${url}/history/user/${userData?._id}`)
        console.log('histor:',res)
        if(res.data.success){
          setHistory(res.data)
        }else{
          alert('error getting user')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getHistory()
  },[userData])

  return (
    <BrowserRouter>
        <div className='flex flex-col gap-10'>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Accounts/>}/>
              {/* <Route path='/transfer' element={<PayTransfer/>}/> */}
              <Route path='/add-money' element={<DepositChecks/>}/>
              <Route path='/trade' element={<Trade/>}/>
              
              <Route path='/profile' element={<Profile/>}/>
              
              <Route path='/transfers' element={<Transfers/>}/>
              <Route path='/bills' element={<PayBills/>}/>
              <Route path='/wire' element={<WireTransfers/>}/>
              <Route path='/zelle' element={<Zelle/>}/>
          </Routes>
          <BottomNav/>
        </div>
    </BrowserRouter>
  )
}

export default Main