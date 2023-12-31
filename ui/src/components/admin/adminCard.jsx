import { Link } from "react-router-dom";

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

function AdminCard({ filename, title, caption, cover_image, time, slug, uploaded_at: created_at, content, changeHook }) {
  return (
    <div className="blg-card">
      <div className="blg-card-top" >
        <img src={cover_image} className={"img"} alt="" />
      </div>
      <div className="blg-fillers blg-card-btm">
        <p className="blg-title"  >{title}</p>
        <div className="admin-control-btns">
          <Link to={`/admin/dashboard/edit/${filename}`} state={{ filename }} >Edit</Link>          
          <button onClick={async () => {
            const response = fetch(`http://localhost:8001/blog/content/${filename}`, {
              method: 'DELETE'
            })
            changeHook()
          }}>delete</button>
        </div>

      </div>
    </div>
  );
}

export default AdminCard;