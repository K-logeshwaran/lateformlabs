import * as React from 'react'
import AdminCard from './admin/adminCard'
function AllPosts() {
    const [posts, setPosts] = React.useState([])
    const [ischanged,setChanged]=React.useState(false)
    React.useEffect(() => {
        (async function () {

            const response = await fetch("http://localhost:8001/blog")
            const data = await response.json()
            setPosts(data)
        })()

    }, [ischanged]);
    const useChanged=()=>setChanged(!ischanged)
    return (  
        <section className="blog-admin-panel">
        {
            posts.map(post => {

                return (
                    <AdminCard
                    changeHook={useChanged}
                        caption={post.frontmatter.caption}
                        cover_image={post.frontmatter.cover_image}
                        slug={post.slug}
                        time={post.frontmatter.time}
                        title={post.frontmatter.title}
                        uploaded_at={post.frontmatter.uploaded_at}
                        content={post.content}
                        filename={post.filename}
                    />
                )
            })
        }
    </section>
    );
}

export default AllPosts;