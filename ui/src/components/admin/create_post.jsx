import * as React from 'react'

import MDEditor from '@uiw/react-md-editor';



function NewPost() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [fileName, setFileName] = React.useState("**Hello world!!!**");

    
    React.useEffect(() => {
        let fff = prompt("Enter FileName:")
        setFileName(fff)

    }, []);

    return (
        <div className="container">
            <button className='save-btn' onClick={() => {
                (async function () {
                    alert("clicked")
                    const response = await fetch(`http://localhost:8001/blog/content/${fileName}`,
                        {
                            method: "POST", // *GET, POST, PUT, DELETE, etc.
                            headers: {
                                "Content-Type": "application/json",
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({ content: value }),
                        })

                    console.log(await response.json());
                    alert("Success")
                })()
            }}>Upload</button>
            <MDEditor
                value={value}
                onChange={setValue}
                style={{ width: "100%", minHeight: "100vh" }}

            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />

        </div>
    );
}


export default NewPost;