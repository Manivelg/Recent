import React, {useRef} from 'react';
import { GiCheckboxTree } from "react-icons/gi";
import { BsTrash, BsPencil, BsClock } from 'react-icons/bs';

function TaskView({TaskContent,DeleteTodo,EditTodo,completeHandle,currentParentId}) {

const nameRef = useRef();

// let storedtime = [day +' | ',time +' | ',date];
// let taskCount = TaskContent.filter((response) => !response.ischecked);

let totalTask = TaskContent.filter((response) => { return (response.parent_id == currentParentId)});
let taskCount = TaskContent.filter((response) => { return (!response.ischecked && response.parent_id == currentParentId )});
let taskCompletedCount = TaskContent.filter((response) => { return (response.ischecked && response.parent_id == currentParentId)} );

  return (
    <>
        <div className='task_name'>Total Tasks - {totalTask.length}</div>
        <div className='task_name'>Tasks - {taskCount.length}</div>
        {
            TaskContent && 
                taskCount.length ?
                    TaskContent.map((TaskContent, index) => (
                        
                        !TaskContent.ischecked && (
                          TaskContent.parent_id == currentParentId && (
                            <div className='enter_task' key={index}>
                            <div className='enter_lists'>
                                {/* <div className='task_sure'> */}
                                    <input type='checkbox' 
                                        className='check_first' 
                                        //id={TaskContent.id} 
                                        checked={TaskContent.ischecked}
                                        value={TaskContent.id}
                                        ref={nameRef}
                                        onChange={(e) => {completeHandle(TaskContent)}}/>
                                {/* </div> */}
                                <div className='show_data'>
                                    <label className='task_names'>{TaskContent.Name}</label>

                                    <div className='show_date'>
                                    <div className='task_display'>
                                        <GiCheckboxTree className='task_icon'/>
                                        <span className='display_count'>0/{TaskContent.count}</span>
                                    </div>

                                    <div className='task_display today_task'>
                                        <BsClock className='clock_set'/>
                                        <span className='task_date'>
                                            <span className='sp'>{TaskContent.day}</span>
                                            <span className='sp'>{TaskContent.time}</span>
                                            <span className='sp'>{TaskContent.date}</span>
                                        </span>
                                    </div>
                                    
                                </div>

                                </div>
                                
                                
                            </div>
                                <div className='task_status'>
                                    <BsPencil className='status_act mr_right' onClick={(e) => {EditTodo(TaskContent)}}/>
                                    <BsTrash className='status_act' onClick={(e) => {DeleteTodo(TaskContent)}}/>

                                </div>
                        </div>

                        )
                        
                    ))
                    )
                    :
                    <div className='empty_task'><div className='enter_task'> No task added...</div></div>
        }
        
        <div className='task_name'>Completed - {taskCompletedCount.length}</div>
        {
            TaskContent &&
                taskCompletedCount.length > 0 ?
                    TaskContent.map((TaskContent, index) => (
                        TaskContent.ischecked && (
                          TaskContent.parent_id == currentParentId && (
                            <div className='enter_task' key={index}>
                            <div className='enter_lists'>
                                {/* <div className='task_sure'> */}
                                    <input type='checkbox' 
                                        className='check_first' 
                                        // id={TaskContent.id} 
                                        checked={TaskContent.ischecked}
                                        value={TaskContent.id}
                                        onChange={(e) => {completeHandle(TaskContent.id)}}/>
                                {/* </div> */}

                                <div className='show_data'>
                                    <label className='task_names'>{TaskContent.Name}</label>
                                        <div className='show_date'>
                                            <div className='task_display today_task'>
                                            <BsClock className='clock_set'/>
                                                <span className='task_date'>
                                                    <span className='sp'>{TaskContent.day}</span>
                                                    <span className='sp'>{TaskContent.time}</span>
                                                    <span className='sp'>{TaskContent.date}</span>
                                                </span>
                                            </div>
                                        </div>
                                </div>
                                
                                
                            </div>
                                <div className='task_status'>
                                    {/* <BsPencil className='status_act mr_right' onClick={(e) => {EditTodo(TaskContent.id)}}/> */}
                                    <BsTrash className='status_act' onClick={(e) => {DeleteTodo(TaskContent)}}/>

                                </div>
                        </div>
                        )

                        )
                    )
                    )
                    :
                    <div className='empty_task'><div className='enter_task'> No Completed task...</div></div>
        }
    
    </>
  )
}

export default TaskView