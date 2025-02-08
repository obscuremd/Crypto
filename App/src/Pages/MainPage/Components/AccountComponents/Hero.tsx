import { Link } from 'react-router-dom'
import Logo from '../../../../assets/Hero.jpg'

const Hero = () => {
  return (
    <div>
        <div 
            style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            className={`hero min-h-[30vh] rounded-2xl`}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome Back</h1>
                    <p className="py-6">
                        We are committed to delivering an exceptional crypto investment experience, offering personalized services, flexible earning opportunities, tailored portfolio solutions, and expert guidance in digital asset investments. Our mission is to empower you to achieve your financial goals with confidence and ease in the dynamic world of cryptocurrency.
                    </p>
                    <div className="join">
                      <button className="btn join-item">
                        <Link to={'/transfers'}>
                          Transfer
                        </Link>
                      </button>
                      <button className="btn join-item">
                        <Link to={'/add-money'}>
                          Add Money
                        </Link>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero