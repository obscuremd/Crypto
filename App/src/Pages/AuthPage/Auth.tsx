import { Bank, Key, Mail } from "iconoir-react";
import Logo from "../../assets/logo copy.png";
import { useState } from "react";
import { useSignIn, useSignUp } from "@clerk/clerk-react";
import axios from "axios";
import { useGen } from "../../Providers/GeneralProvider";

const Auth = () => {
  const {url} = useGen()
  const { isLoaded: SignInIsLoaded, signIn } = useSignIn();
  const { isLoaded: SignUpIsLoaded, signUp } = useSignUp();

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState("");
  const [password, set_password] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!SignInIsLoaded) {
      return;
    }

    if (username == "" || password === "") {
      setLoading(true);
      setTimeout(() => {
        alert("Please enter your email/ password");
        setLoading(false);
      }, 1000);
    } else {
      setLoading(true);

      try {
        await signIn.create({
          identifier: username,
          password: password,
        });

        setTimeout(() => {
          alert("Logged in successfully");
          setLoading(false);
          window.location.reload();
        }, 2000);
      } catch (err: unknown) {
        const error = err as { errors?: { code: string }[] };

        setLoading(false);
        if (
          error.errors &&
          error.errors[0]?.code === "form_param_format_invalid"
        ) {
          alert("Login-Id/Login-Password is invalid");
        } else {
          alert(JSON.stringify(error.errors && error.errors[0]?.code));
          console.log(JSON.stringify(error));
          console.log(error);
        }
      }
    }
  };

  const createClerkUser = async () => {
    if(!SignUpIsLoaded){return}
    if (
      !username||
      !password
    ) {
      alert("all fields must be filled");
      return
    }
    try {
      await signUp?.create({
        username,
        password
      })
      alert("User Created");
      window.location.reload()
    } catch (error) {
      console.error("Create user error:", error);
      alert("error registering user");
      throw error;
    }
  };
  

  const CreateUser = async () => {
    setLoading(true);
  
    // Validate data
    if (!email) {
      alert('Email is required.');
      setLoading(false);
      return;
    }
  
    else if (!username) {
      alert('Full name is required.');
      setLoading(false);
      return;
    }
  
  
    else if (!password) {
      alert('Password is required.');
      setLoading(false);
      return;
    }
    
    // If validation passes, proceed with the API request
    else{
      const lowerCaseName = username.toLowerCase()
        try {
          const response = await axios.post(`${url}/user/register`, {
            email,
            full_name:lowerCaseName,
            password,
          });
          console.log("Updated user data:", response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error updating user data:", error);
          alert('error')
          setLoading(false)
        }
    }
  };

  const create =async()=>{
    try {
      await CreateUser()
      await createClerkUser()
    } catch (error) {
      alert('error creating user')
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-5 p-5 items-center justify-center w-full min-h-screen">
      <div className=" flex flex-col items-center gap-5 ">
        <div className="card bg-base-100 w-96 shadow-xl flex flex-col gap-5 p-5">
          <img src={Logo} className="w-24" />
          <p className="font-bold text-3xl">Core wealthier investment</p>
          Sign in to with your account number and password
          <label className="input input-bordered flex items-center gap-2">
            <Mail />
            <input type="text" className="grow" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <Bank />
            <input
              type="text"
              className="grow"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <Key />
            <input
              type="password"
              className="grow"
              placeholder="password"
              onChange={(e) => set_password(e.target.value)}
            />
          </label>
          <div className="flex gap-3">
            <button className="btn btn-primary" onClick={login}>
              {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                "Login"
              )}
            </button>
            <button className="btn btn-neutral" onClick={create}>
              {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
