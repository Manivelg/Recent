import React, { useEffect, useState } from 'react';
import Header from '../bar/header';
import Modal from '../task/Modal';

import TaskView from '../task/TaskView';
import { TfiAngleLeft, TfiMoreAlt } from "react-icons/tfi";
import { TfiPlus } from "react-icons/tfi";
 

function School() {

        //EditTodo List 

        const EditTodo = (id) => {
          console.log(id);

          return (
            <div>
              <input type="text" Name = 'Name'/>
            </div>
          )
        }
        //DeleteTodo List
        // const DeleteTodo = (id) => {
        //     const filterTask = TaskContent.filter((e,i) => {
        //         return e.id !== id
        //     })
        //     SetTaskcontent(filterTask);
        // }

        const DeleteTodo = (id) => {
          console.log(id);
          SetShowModal(true);

          const filterTask = TaskContent.filter((e,i) => {
                    return e.id !== id
                })
                
                SetTaskcontent(filterTask);

          // SetShowModal(true);
          // SetTaskcontent(pre => {
          //   const newArray = [...pre]
          //   return newArray.filter(item => item.id !== id)
            
          // })
          
        }

        // const HandleDelete = (id) => {
        //   SetTaskcontent(pre => {
        //     const newArray = [...TaskContent]
        //     return newArray.filter(e =>TaskContent.id !== Deleted)
        //   })
        //   SetShowModal(false);
        // }

        //CompleteHandle
        const completeHandle = (id)=>{
          // console.log(id);
          SetTaskcontent(
              TaskContent.map((TaskContent)=>{
                  if(TaskContent.id === id){
                      return {...TaskContent, ischecked: !TaskContent.ischecked}
                      
                  }
                  else{
                      return TaskContent;
                  }
              })
          )
        }

    //Todo Task value getting
    const SaveData = () => {
        const data = localStorage.getItem('TaskContent');
        //console.log(data);
        if(data) {
          return JSON.parse(data);
        }
        else {
          return []
        }
      }

    //Hooks
    const [Name, SetName] = useState([]);
    // const [Open, SetOpen] = useState(false);
    const [TaskContent, SetTaskcontent] = useState(SaveData());
    const [ShowModal, SetShowModal] = useState(false);


    //function
    const Task_submit = (e) => {

        e.preventDefault(e);

        if(Name !== '') {

            let TaskView = {
                id : Number(TaskContent.length+1),
                Name,
                checked : false,
            }
            
            SetTaskcontent([...TaskContent,TaskView]);
            SetName('');
            
        }
      }

        //Save data localStorage
        useEffect(() => {
            localStorage.setItem('TaskContent', JSON.stringify(TaskContent));
        },[TaskContent])
        
        // const SubmitEvents = () => {
        //   document.getElementById('submit').style.display='block';
        // }

  return (
    <>
    <Header />

    <div className='view_data'>

    <section className='list_data'>
      <div className='auto_scroll'>
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
                        type= 'text'
                        placeholder='Add a Task'
                        value={Name}
                        className='input_file'
                        onChange={(e) => {SetName(e.target.value)}}
                        // onClick={()=> SetOpen(!Open)}
                        // onClick={() => SubmitEvents()}
                        required
                  />
                  {/* <button className={`submit ${Open ? "block" : "hidden"}`} onClick={Task_submit}>Add</button> */}
                  <button className='submit' onClick={Task_submit}>Add</button>
              </div>
            </div>


            <div className='view_status'>

            { 
            TaskContent.length > 0 && 
            <TaskView TaskContent={TaskContent} DeleteTodo = {DeleteTodo} EditTodo = {EditTodo} completeHandle = {completeHandle}/>
            }

            {
            TaskContent.length < 1 && <div className='empty_task'><div className='enter_task'> No task added...</div></div>
            }


            </div>

          </div>
        </div>
    </section>

    {

ShowModal && (
    <Modal 
        title={TaskContent.Name}
        close={SetShowModal}
        DeleteTodo={TaskContent}
    />
)
}

    </div>
    </>
  )
}

export default School