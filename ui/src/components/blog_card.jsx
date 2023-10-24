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

function Card({ title, caption, cover_image, time, slug ,uploaded_at:created_at,content}) {   
    return (
        <section className={`card`}>
            <div className={"top"}>
                <Link to={`/blog/${slug}`} className={"title"} state={{content}} >{title}</Link>
                <h4>{getRelativeDate(created_at)}</h4>
                <h4 className={"reder"}><span className="material-symbols-outlined" style={{ "color": "blue" }}>
                {time} min read</span> </h4>
                <p className={"para"}>{caption}...</p>
                {/* <Link  style={{"color":"#0BAAFF","fontWeight":"bolder"}} href={`/blogs/${slug}`}>Read more</Link> */}

            </div>
            <div className={"bottom"}>
                <img src={cover_image} className={"img"} alt="" />
            </div>
        </section>
    );
}

export default Card;