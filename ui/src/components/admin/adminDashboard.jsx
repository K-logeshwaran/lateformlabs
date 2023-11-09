import * as React from 'react'
import "./admin-style.css"

import { Link, useNavigate, Outlet } from "react-router-dom"
function AdminDashboard() {
    const navigate = useNavigate();
    return (
        
        <main className='admin-dashboard'>
           <nav  className="admin-nav-bar">
                <Link to={"allposts"}>Posts </Link>
                <Link to={"newPost"}> New Post</Link>
            </nav>
            <Outlet></Outlet>
        </main>
    );
}

{/* <section  className="nav-bar">
                <Link to={"allposts"}>Posts </Link>

                <Link to={"newPost"}> New Post</Link>
            </section> */}





export default AdminDashboard;