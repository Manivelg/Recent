import React from 'react'

function Modal({title, close, DeleteTodo}) {
  console.log("DeleteTodo", DeleteTodo);
  

  return (
    <>
      <div className='modal'>
        <div className='modal_content'>

          <div className='modal_close'><span className='close_button' onClick={()=>close(false)}>&times;</span></div>
            <div className='modal_header'>
              <span className='modal_title'>Do you want to Delete?</span>
            </div>

            <div className='modal_container'>
              <p className='modal_body'>{title}</p>
            </div>

            <div className='modal_footer'>
              <button className='btn btn_confirm btn_right' onClick={(e) => DeleteTodo(e.id)}>Confirm</button>
              <button className='btn btn_close' onClick={()=> close(false)}>Cancel</button>
            </div>

        </div>
      </div>
    </>
    
  )
}

export default Modal