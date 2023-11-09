import * as React from 'react'
import "./admin-style.css"

import { Link, useNavigate, Outlet } from "react-router-dom"
function AdminLogin() {
    const navigate = useNavigate();

  function handleClick() {
    navigate("dashboard/allposts",{replace:true});
  }
    return (
        
        <main className='admin-dashboard'>
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <button onClick={()=>handleClick()}>ok</button>
                
                
            </form>
        </main>
    );
}

{/* <section  className="nav-bar">
                <Link to={"allposts"}>Posts </Link>

                <Link to={"newPost"}> New Post</Link>
            </section> */}





export default AdminLogin;