import * as React from 'react'

import MDEditor from '@uiw/react-md-editor';



function NewPost() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [fileName, setFileName] = React.useState("**Hello world!!!**");


  
    return (
        <div className="container">

            <div className="admin-ctrl-post">
                <input onChange={e=>setFileName(e.target.value)} placeholder='Enter file name' type="text" />
                <button className='button-3'  onClick={() => {
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
            </div>
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