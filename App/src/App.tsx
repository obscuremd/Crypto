import './App.css'
import './fonts.css'
import Main from './Pages/MainPage/Main'
import Auth from './Pages/AuthPage/Auth'
import axios from 'axios';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

function App() {

  axios.defaults.withCredentials = true;

  



  return (
    <div className='font-connections'>
      <SignedIn>
        <Main/>
      </SignedIn>
      <SignedOut>
        <Auth/>
      </SignedOut>
    </div>
  )
}

export default App
