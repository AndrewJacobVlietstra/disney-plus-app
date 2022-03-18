import React from 'react';
import './Login.styles.scss';

const Login = () => {
  return (
    <div className='login-page-container'>
      <div className='login-content-cta'>
        <img src='/images/cta-logo-one.svg' className='login-logo-1 login-logo' />
        <div className='sign-up'>
          <button>get all there</button>
          <p className='sign-up-description'>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. 
            As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
          </p>
        </div>
        <img src='/images/cta-logo-two.png' className='login-logo-2 login-logo' />
      </div>
    </div>
  )
}

export default Login;