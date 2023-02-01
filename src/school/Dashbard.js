import React from 'react';
import Header from '../bar/header';

function Dashbard() {
  
  let hideSideMenu = true;

  return (
    <>
    <section id="Dashboard">

      <Header hideSideMenu = {hideSideMenu}/>

      <div className='container'>
          <div>Welcome to Dashbard</div>
      </div>

    </section>
    </>
    
  )
}

export default Dashbard