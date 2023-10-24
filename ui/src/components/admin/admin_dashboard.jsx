import * as React from 'react'
import "./admin-style.css"
import { Link, Outlet } from "react-router-dom"
function Dashboard() {
    
    return (
        
        <main>
            <section  className="nav-bar">
                <Link to={"allposts"}>Posts </Link>

                <Link to={"newPost"}> New Post</Link>
            </section>
            <Outlet />
        </main>
    );
}





export default Dashboard;