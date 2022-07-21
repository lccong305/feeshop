import React from 'react'
import { Link } from 'react-router-dom'
import './popper.scss'
import { BiFemaleSign, BiLogIn } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const Popper = () => {
    const currentUser = useSelector((state) => state.auth.login.currentUser);

    return (
        <div className="popper-container">
            <div className="">
                {
                    currentUser
                        ? <div className="popper-input">  <AiOutlineLogout /> <p className="popper-link">Logout</p> </div>
                        :
                        (<div className="popper-input">
                            <BiLogIn /> <Link to="/login" className="popper-link" >Login</Link>
                        </div>)
                }
            </div>
            <div className="popper-input">
                <BiFemaleSign /><Link to="/register" className="popper-link" >Register</Link>
            </div>
        </div>
    )
}

export default Popper