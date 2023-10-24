import './App.css';
import * as React from 'react'
import Card from './components/blog_card';
function App() {
  const [posts,setPosts]=React.useState([])
  React.useEffect(()=>{
    (async function(){
      
      const response=await fetch("http://localhost:8001/blog")
      const data = await response.json()
      setPosts(data)
    })()
    
  },[])
  return (
    <div className="App">
     <h1>Hello broooooo 🔥</h1>
     {
      posts.map(post=>{
        
        return(
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

export default App;
