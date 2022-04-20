import React from 'react';
import './accessTextarea';

export default function Notepad() {
    class textAreaContent {
        constructor(note = 'note') {
            this.note = note;
        }
    }
    function createLocalStorageKey() {
        localStorage.setItem('itemInputBox', JSON.stringify({ items: [] }));
    }
    function get() {
        const toGet = localStorage.getItem('itemInputBox');
        return toGet;
    }
    function parseValueToHTML() {
        const valuesJSON = get();
        if (valuesJSON == null) {
            createLocalStorageKey();
        }
        const values = JSON.parse(get());
        document.getElementById('outputArea').innerHTML =
            values.items[Math.floor(Math.random() * values.items.length)];
    }

    function saveTextAsFile() {
        const textarea = document.getElementById('textArea').value;

        console.log(textarea);
        const valuesJSON = get();

        if (valuesJSON == null) {
            createLocalStorageKey();
        }
        const values = JSON.parse(get());
        values.items.push(textarea.value);
        localStorage.setItem('itemInputBox', JSON.stringify(values));
    }

    return (
        <div>
            <h2>notepad</h2>
            <textarea name="" id="textArea" cols="80" rows="10" />
            <br />
            <button
                value="save"
                id="save"
                className="button_save"
                type="button"
                onClick={saveTextAsFile}
            >
                save
            </button>
            <button
                id="getStoredValue"
                onClick="parseValueToHTML()"
                type="button"
            >
                Get Input Value
            </button>
        </div>
    );
}
