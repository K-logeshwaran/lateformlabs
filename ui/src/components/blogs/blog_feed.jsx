import * as React from 'react'
import Card from './blog_card';
function Feed() {
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        (async function () {

            const response = await fetch("http://localhost:8001/blog")
            const data = await response.json()
            console.log(data);
            setPosts(data)
        })()

    }, [])

    function compare(a, b) {
        return (new Date(b.frontmatter.uploaded_at) - new Date(a.frontmatter.uploaded_at));
    }
    return (
        <div className="feed">
            {
                posts
                    .sort(compare)
                    .map(post => {

                        return (
                            <Card
                                caption={post.frontmatter.caption}
                                cover_image={post.frontmatter.cover_image}
                                slug={post.slug}
                                time={post.frontmatter.time}
                                title={post.frontmatter.title}
                                uploaded_at={post.frontmatter.uploaded_at}
                                content={post.content}
                            />
                        )
                    })
            }
        </div>
    );
}

export default Feed;
