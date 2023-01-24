import React  from 'react';
import { GiCheckboxTree } from "react-icons/gi";
import { TfiCalendar } from "react-icons/tfi";

function Task({TaskView}) {
    

    
  return (  
    
    <>
        
        <section id="showing_tasks">
            <div className='task_views'>
                
                <div className='task_name'>
                    <h5 className='task_one'>Tasks - 1</h5>
                </div>

                

                <div className='enter_task'>
                    <div className='enter_lists'>
                        <label className='task_sure'>
                            <input type='checkbox' className='check_first' />
                            <span className='task_names'>Finish the essay collaboration</span>
                        </label>
                        <div className='show_date'>
                            <div className='task_display space_to'>
                                <GiCheckboxTree className='task_icon'/>
                                <span className='display_count'>0/1</span>
                            </div>

                            <div className='task_display today_task'>
                                <TfiCalendar />
                                <span className='task_date'>Today</span>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

                
            </div>
        </section>
    </>

  )
}

export default Task