import React, { useState } from "react"
import { Responsive } from "semantic-ui-react"
import { Link } from "react-router-dom"
import Lottie from "../util/Lottie"

function Header() {
  const [rightMenu, setRightMenu] = useState(false)
  const rightBartoggle = () => {
    setRightMenu(!rightMenu)
  }

  return (
    <>
      <div className="nav-wrapper">
        <div className="logo-wrapper login-logo">
          <Link to="/signin">
            <Responsive minWidth={767}>
              <img src="/assets/images/colored-logo.svg" alt="Coloured Logo" width="83.27" height="46.8" />
            </Responsive>
            <Responsive maxWidth={767}>
              <img src="/assets/images/colored-logo-red-orange.svg" alt="Logo" width="83.269" height="46.796" />
            </Responsive>
          </Link>
        </div>
      </div>
      <Responsive minWidth={767} className="bg-left">
        <h1 className="text-center">MotoMob.me</h1>
        <p className="text-center">bikers only</p>
        <Lottie></Lottie>
      </Responsive>
    </>
  )
}

export default Header
