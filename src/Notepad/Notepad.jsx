import React, { useState } from 'react';
import './accessTextarea';

// const currentId = 1;
// const messageMap = { id: 0, message: '' };
// const currentId = 1;
// const [messageRegistry, setMessageRegistry] = useState({});
export default function Notepad() {
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
        const textAreatValue = document.getElementById('textArea').value;
        localStorage.setItem(1, textAreatValue);
        const wiadomsoc = localStorage.getItem(1);
        console.log(wiadomsoc);
    };
    return (
        <div>
            <h2>notepad</h2>
            <textarea name="" id="textArea" cols="80" rows="10" />
            <br />
            <div className="button_contener">
                <button
                    value="save"
                    id="save"
                    className="button_save"
                    type="button"
                    onClick={save}
                >
                    save
                </button>
            </div>
        </div>
    );
}
