import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { ChatEngine } from "react-chat-engine";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/AppContext";
import Navbar from "./Navbar";

export default function Chats() {
    const { currentUser ,setCurrentUser} = useContext(UserContext);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
    // useEffect(()=>{
    //   // const username = emailCutter(currentUser.email);
    //    if(!currentUser){
    //      navigate('/login')
    //    }
    //    //check if user exist in chatapp engine or nah!
    //    axios.get("https://api.chatengine.io/users/me",{
    //      headers:{
    //       "project-ID":"9d386fbc-b2a4-4d62-b037-500c3947dc9d",
    //       "user-name":currentUser.email
    //      }
    //    }).then(setLoading(false))
    //    //so if user not exist in chatapp engine now we create one
    //    .catch(()=>{
    //      let formData = new FormData();
    //      formData.append('email',currentUser.email);
    //      formData.append('username',currentUser.email);
    //      formData.append('secret',currentUser.uid); //user secret id
    //      formData.append('email',currentUser.email);
    //      getFile(currentUser.photoURL)
    //      .then(avatar=>
    //       formData.append('avatar',avatar,avatar.name))
    //       axios.post("https://api.chatengine.io/users",formData,{
    //         headers:{
    //           'PRIVATE-KEY':"1fef12dd-7124-4207-9d8d-c2f391b2f9fa"
    //         }
    //       }).then(()=>{setLoading(false)})
    //       .catch((error)=>console.log(error))
    //    });



    // },[currentUser,navigate])

    //معمولا عکس رو به این صورت به ما میدن که یه آدرسه و ریسپانس آن شبیه به آبجکته-بلاب- و ما باید اونرو دریافت کنیم و یه فایل جدید بسازیم
    // const getFile = async (url)=>{
    //   const response = await fetch(url);
    //   const data = await response.blob();
    //   return new File([data],'userPhoto.jpg',{type:'image/jpeg'})
    //   //یه فایل عکس برای ما درست کرد
    // }
    
    //logoutHandler
    const logOutHandler =()=>{
        setCurrentUser(null);
        navigate('/login')
    }
  if(!currentUser || loading){
      return (
        <div style={{height:'100vh',width:'100vw'}} className="flex flex-auto  text-center justify-center items-center content-center ">
          <svg role="status" className="self-center justify-self-center inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>
      )
  }
  return (
    <>
    <Navbar logOutHandler={logOutHandler}/>
      {/* <ChatEngine 
      height="calc(100vh-60px)"
      projectID="9d386fbc-b2a4-4d62-b037-500c3947dc9d"
      userName={currentUser.email}
      userSecret={currentUser.uid}
      /> */}
    </>
  );
}
