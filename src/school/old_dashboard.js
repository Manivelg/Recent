import React, { useState, useEffect } from 'react';

import { TfiAngleLeft, TfiMoreAlt } from "react-icons/tfi";
import { TfiPlus } from "react-icons/tfi";

import CreateTask from '../task/CreateTask';
import Header from '../bar/header';
import Sidemenu from '../bar/sidemenu';

import '../main.scss';



//getting the localstorage datas
const getTask = () => {
  const data = localStorage.getItem('TaskView');
  if(data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

function Dashboard() {

  const [open, SetOpen] = useState(false);
  const [TaskView, SetTaskView] = useState(getTask());
  const id = 1;
  const [Name, setName] = useState([]);

  const Task_submit = (e) => {
    console.log(Name);
    e.preventDefault(e);
    // SetTask ([...Name, {name: Name}]);
    if(!Name) return;

    let showTask = {
        id,
        Name
    }
    
    SetTaskView([...TaskView, showTask]);
    setName('');
  }

  //Save to localstorage

  useEffect (() => {
    localStorage.setItem('TaskView',JSON.stringify(TaskView));
  },[TaskView]);
  
  return (
    <>
    <Header />

    <div className='view_data'>
      <Sidemenu />

      <section className='list_data'>

        <div className='list_dashboard'>
          <div className='dashboard_view'>
            <div className='dashboard_set'>
                <div className='left_chevron'>
                  <TfiAngleLeft className='back_to_chevron'/>
                </div>
                <div className='dash_head'>School</div>
            </div>
            
            <div className='list_view'>
              <TfiMoreAlt className='show_view'/>
            </div>
            
          </div>

          <div className='add_task'>
            <div className='task_plus'>
            <TfiPlus className='plus_sign' />
            <input 
                  type='text' 
                  placeholder='Add a task' 
                  className='input_file'
                  value={Name} 
                  onChange={(e)=> setName(e.target.value)}
                  onClick={() => SetOpen(!open)}
                  required
            />
            <button className={`submit ${open ? "block" : "hidden"}`} onClick={Task_submit}>Add</button>
                
            </div>
            
          </div>
            
            <div className=''>

            {TaskView.length > 0 && 
              <CreateTask TaskView = {TaskView}/>
              }

              {TaskView.length <1 && <div className='empty_task'><div className='enter_task'> No task added...</div></div>}
              
              

            </div>

            

          {/* <div className='task_show'>
            <Task TaskView = {TaskView}/>
          </div> */}

        </div>

      </section>

    </div>
    </>
  )
}

export default Dashboard