import {  Link } from "react-router-dom";

function getRelativeDate(date) {
    const formatter = new Intl.RelativeTimeFormat("en", {
      style: "long",
      numeric: "auto",
    });
  
    let num = new Date() - new Date(date);
    let daysPassed = -num / (24 * 60 * 60 * 1000);
    let monthsPassed = -num / (24 * 60 * 60 * 1000 * 30);
    let year = -num / (24 * 60 * 60 * 1000 * 30 * 12);
    if (daysPassed * -1 < 32) {
      return formatter.format(Math.floor(daysPassed), "day");
    } else {
      if (monthsPassed * -1 < 12) {
        // console.log(true);
        // console.log(monthsPassed);
        return formatter.format(Math.floor(monthsPassed), "month");
      } else {
        // console.log(true);
        return formatter.format(Math.floor(year), "year");
      }
    }
}

function AdminCard({filename, title, caption, cover_image, time, slug ,uploaded_at:created_at,content,changeHook}) {   
    return (
        <section className={`card`}>
            <div className={"top"}>
                <p  className={"title"}  >{title}</p>
                <Link to={`/admin/dashboard/edit/${filename}`}  state={{filename}} >Edit</Link>
                <button onClick={async ()=>{
                  const response=fetch(`http://localhost:8001/blog/content/${filename}`,{
                    method: 'DELETE'
                  })
                  changeHook()
                }}>delete</button>
                {/* <h4>{getRelativeDate(created_at)}</h4> */}
                {/* <h4 className={"reder"}><span className="material-symbols-outlined" style={{ "color": "blue" }}>
                {time} min read</span> </h4> */}
                {/* <p className={"para"}>{caption}...</p> */}


            </div>
            <div className={"bottom"}>
                <img src={cover_image} className={"img"} alt="" />
            </div>
        </section>
    );
}

export default AdminCard;