import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { Button } from 'bootstrap';

function Editor() {
    const [inputData, setInputData] = useState("");
    const [getInputData, setGetInputData] = useState("");
    const getData = () => {
        setGetInputData(inputData);
    }
    return (
        <div className="App">
            <h2>Using CKEditor 5</h2>
            <div style={{width:"80%", margin:"auto"}}>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setInputData(data)
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            </div>

            <div style={{marginTop:"10px"}}>
                <button onClick={getData}>Get Input Data</button>
                <p>Input Data: {getInputData}</p>
            </div>
        </div>
    )
}

export default Editor
