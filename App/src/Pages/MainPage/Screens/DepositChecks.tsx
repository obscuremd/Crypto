import { useGen } from "../../../Providers/GeneralProvider"

const DepositChecks = () => {

  const { userData } = useGen()

  return (
    <div className="px-5 flex flex-col gap-5 w-full">
      <img 
        src="https://plus.unsplash.com/premium_photo-1661757762481-676c2690d8ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D" 
        alt="" 
        className="rounded-xl"/>
      <p className="uppercase font-bold text-lg">Hi, {userData?.full_name}</p>
      
      <p className="opacity-95">
        Recieve Money from your friends on CoreWealthier Investments with your Btc or Eth Address
      </p>

      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body flex">
          <p>your BTC Address</p>
          <h2 className="card-title">{userData?.btc_account_number}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Copy</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body flex">
          <p>your ETH Address</p>
          <h2 className="card-title">{userData?.eth_account_number}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Copy</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DepositChecks