import { Link } from "react-router-dom";
import "./blog_styles.css"
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

function Card({ title, caption, cover_image, time, slug, uploaded_at: created_at, content }) {
  return (
    <div className="blg-card" >
      <div className="blg-card-top" >
        <img src={cover_image} alt="" />
      </div>
      <div className="blg-fillers blg-card-btm">
        <h4 className="weight-600 blg-time" ><span >
          {time}min read</span> </h4>
        <Link to={`/blog/${slug}`} className="blg-title" state={{ content }} >{title}</Link>
        <h4 className="weight-600">{getRelativeDate(created_at)}</h4>
        <p >{caption}...</p>
        <Link className="blg-readmore" to={`/blog/${slug}`} state={{ content }}>Read more {"->"}</Link>

      </div>

    </div>
  );
}

export default Card;