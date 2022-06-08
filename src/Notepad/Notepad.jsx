/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './accessTextarea';

// const currentId = 1;
// const messageMap = { id: 0, message: '' };
const currentId = 1;
export default function Notepad({ openFileName, setUpdate }) {
    const currentFiles = JSON.parse(localStorage.getItem('fileRegistry'));
    let initialContent = '';
    let initialFileName = '';

    if (openFileName) {
        initialFileName = openFileName;
        initialContent = currentFiles[initialFileName];
    }

    const [content, setContent] = useState(initialContent);
    const [fileName, setFileName] = useState(initialFileName);
    // const saveMessage = () => {
    //     const textAreatValue = document.getElementById('textArea').value;
    //     const newMessage = { textAreatValue, id: currentId };
    //     setMessageRegistry({ ...messageRegistry, [currentId]: newMessage });
    //     currentId++;
    // };
    // const [noteRegistry, setNoteRegistry] = useState({});
    // const save = () => {
    //     const newNote = { id: currentId };
    //     setNoteRegistry({ ...noteRegistry, [currentId]: newNote });
    //     currentId++;
    //     // console.log(textAreatValue);
    // };
    // function save() {
    // const [messageRegistry, setMessageRegistry] = useState({});
    // const textAreatValue = document.getElementById('textArea').value;
    // const newMessage = { text: textAreatValue, id: currentId };
    // setMessageRegistry({ ...messageRegistry, [currentId]: newMessage });
    // currentId++;
    // console.log(newMessage);
    // }
    const save = () => {
        let currentFiles = JSON.parse(localStorage.getItem('fileRegistry'));
        if (!currentFiles) {
            currentFiles = {};
        }
        currentFiles[fileName] = content;
        console.log(currentFiles);
        const fileObjectToString = JSON.stringify(currentFiles);

        localStorage.setItem('fileRegistry', fileObjectToString);
        setUpdate({});

        // const wiadomsoc = localStorage.getItem(currentId);
        // console.log(currentId);
        // currentId++;
    };
    return (
        <div>
            {/* <h2>notepad</h2> */}
            <textarea
                name=""
                id="textArea"
                cols="80"
                rows="10"
                value={content}
                onChange={({ target: { value } }) => {
                    setContent(value);
                }}
            />
            <br />
            <div className="button_contener">
                <input
                    type="text"
                    id="fileName"
                    name="fileName"
                    placeholder="file name"
                    onChange={({ target: { value } }) => setFileName(value)}
                    value={fileName}
                />

                <button
                    value="save"
                    id="save"
                    className="button_save"
                    type="button"
                    onClick={save}
                    disabled={!fileName.trim()}
                >
                    save
                </button>
            </div>
        </div>
    );
}
