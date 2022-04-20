import React from 'react';
import './accessTextarea';

export default function Notepad() {
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
                onClick=""
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
