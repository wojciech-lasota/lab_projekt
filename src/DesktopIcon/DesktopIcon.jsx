import React from 'react';

function DesktopIcon({ name, onDesktopIconClick }) {
    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    onDesktopIconClick(name);
                }}
            >
                {name}
            </button>
        </div>
    );
}

export default DesktopIcon;
// style={{ position: 'absolute', top: '50%' }}
