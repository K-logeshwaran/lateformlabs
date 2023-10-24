import * as React from 'react'

import MDEditor from '@uiw/react-md-editor';
import { useLocation } from 'react-router-dom';


function Editor() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const { state } = useLocation()
  React.useEffect(() => {

    console.log(state.filename);
    console.log("Hiiiiiiiii");
    //state.filename
    (async function () {

      const response = await fetch(`http://localhost:8001/blog/content/${state.filename}`)
      const data = await response.json()
      console.log(data);
      setValue(data.content)
    })()
  }, []);

  return (
    <div className="container">
      <button className='save-btn' onClick={e => {
        (async function () {

          const response = await fetch(`http://localhost:8001/blog/content/${state.filename}`,
            {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({content:value}), 
            })

            console.log(await response.json());
            alert("Success")
        })()
      }}>save</button>
      <MDEditor
        value={value}
        onChange={setValue}
        style={{ width: "100%", minHeight: "100vh" }}

      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />

    </div>
  );
}


export default Editor;