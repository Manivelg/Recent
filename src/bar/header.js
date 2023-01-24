import React , {useState} from 'react';
import { FiMenu } from "react-icons/fi";
import { BsGrid1X2Fill, BsFillFolderFill } from "react-icons/bs";
import { TfiPlus, TfiSearch, TfiBell } from "react-icons/tfi";
import Sidemenu from '../bar/sidemenu';


function Header() {

    const [ShowMenu, SetShowMenu] = useState(false);

    // const ShowMenu=() => {
    // alert('hai');
    // }

  return (

    <>
    <section id="header_menu">
        <div className='dashboard_menu'>

            <div className='hidden'>
                <div className='menu_bar' onClick={() => {SetShowMenu(!ShowMenu)}}>
                  <FiMenu />
                </div>
            </div>

            <div className='left_one'>
                <div className='short_one'>
                    <div className='menu_bar' onClick={() => {SetShowMenu(!ShowMenu)}}>
                        <FiMenu />
                    </div>
                </div>

                <div className='short_two'>
                <BsGrid1X2Fill />
                <span className='head_para'>Dashboard</span>
                </div>

                <div className='short_two'>
                    <BsFillFolderFill />
                    <span className='head_para'>Collections</span>
                </div>
            </div>

            <div className='left_one'>
            <div className='short_one'>
                    <div className='add_button'>
                        <TfiPlus />
                    </div>
                </div>

                <div className='short_four'>
                    <span className='search'>
                         <TfiSearch/>
                    </span>
                </div>

                <div className='short_three'>
                    <span className='pointer'>
                        <TfiBell className='top_set'/>
                    </span>
                </div>

                <div className='short_three'>
                    <span className='user_blog'>
                        <img src='../../user/user.jpg' alt='User' className='user_logo' />
                    </span>
                </div>
            </div>

            
        </div>
    </section>

    <section id="add_mobile_show">
    <div className='hidden'>
                <div className='mobile_set'>
                    <div className='add_button add_users'>
                        <TfiPlus />
                    </div>
                </div>
            </div>
    </section>
    <div className={`${ShowMenu ? "not_show" : "show"}`}>
    <Sidemenu />
    </div>
    
    </>
    
  )
}

export default Header