import React, { useContext, useState } from 'react'
import './Sidebar.css'
// {../..} first .. is for main and sidebar and second .. is for assets,context,componets (any selection)
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context';
const Sidebar = () => {
  // State variables hold data that can be updated as the program executes
    const [extended,setExtended]=useState(false);
    const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context)

    const loadPrompt=async(prompt)=>{
      setRecentPrompt(prompt)
      await onSent(prompt)
    }
  return (
    // sidebar html top
    <div className='sidebar'>
      <div className="top">
        {/* setExtended check whether the value of prev is false or true , if true  display all item , else hide the icon message*/}
        <img onClick={()=>setExtended(prev=>!prev)}className='menu' src={assets.menu_icon} alt="" />
        <div onClick ={()=>newChat()}className="new-chat">
            <img src={assets.plus_icon} alt="" />
           {extended?<p>New Chat</p>:null} 
        </div>
        {extended
        ?
        <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
              // The map function iterates over each prompt (item) in the prevPrompts array,
                return (
            <div  onClick={()=>loadPrompt(item)}className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0,18)} ...</p>
            </div> 
                )
            })}
        </div>:null
    }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}  
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
