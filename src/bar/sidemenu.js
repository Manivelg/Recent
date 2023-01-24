import React from 'react';
import SidemenuData from '../bar/sidemenu_json/sidemenu.json';

function sidemenu() {
  return (
   
    <>
        <nav className='sidemenu'>
            
            <div className='side_header'>
                <p className='side_para'>Collections</p>
            </div>

            
            <ul className='sidemenu_list'>
            {
                
                SidemenuData.map((item,pos) => {
                    return (
                        <li key={item.id}>
                            <div className='side_menu'>
                                <img src={item.image} className='sidemenu_img' alt='School' />
                                <p className='sidemenu_para'>{item.header}</p>
                            </div>
                        </li>
                )}
                )
            }
            </ul>
        </nav>
    </>
   
  )
}

export default sidemenu