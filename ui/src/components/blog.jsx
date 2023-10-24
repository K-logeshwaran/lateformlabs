import md from "markdown-it";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";

function Blog() {
    const {state} = useLocation()
    //console.log(dd);
    //console.log({ frontMatter, slug, content });
    useEffect(() => {
        hljs.highlightAll(); // apply highlighting

    }, []);
    return (
        <>
            <main className="main" >

                <section className="section">
                    <Link to="/blogs">
                        <button className="button-3">Back</button>
                    </Link>
                    <article
                        
                        className="post-body"
                        dangerouslySetInnerHTML={{ __html: md().render(state.content) }}
                    />
                </section>
            </main>
        </>
    );
}

export default Blog;