import React from 'react';
import DesktopIcon from '../DesktopIcon/DesktopIcon';

import objTriangle from './assets/img/obj_triangle.png';

function Background({ onDesktopIconClick }) {
    const currentFiles = JSON.parse(localStorage.getItem('fileRegistry'));

    // ('./assets/img/obj_triangle.png');
    return (
        <div className="abs">
            <div className="jumbotron d-flex align-items-center">
                <div className="container text-center">
                    <h1 className="display-1 mb-4">
                        s96
                        <br />
                        718
                    </h1>
                </div>
                {currentFiles && (
                    <div style={{ position: 'absolute', top: '50%' }}>
                        {Object.keys(currentFiles).map((key) => (
                            <DesktopIcon
                                name={key}
                                onDesktopIconClick={onDesktopIconClick}
                            />
                        ))}
                    </div>
                )}
                <div className="rectangle-1" />
                <div className="rectangle-2" />
                <div className="rectangle-transparent-1" />
                <div className="rectangle-transparent-2" />
                <div className="circle-1" />
                <div className="circle-2" />
                <div className="circle-3" />
                <div className="triangle triangle-2">
                    <img src={objTriangle} alt="website template " />
                </div>
                <div className="triangle triangle-1">
                    <img src={objTriangle} alt="website template image" />
                </div>
                <div className="triangle triangle-3">
                    <img src={objTriangle} alt="website template image" />
                </div>
                <div className="triangle triangle-4">
                    <img src={objTriangle} alt="website template image" />
                </div>
            </div>
        </div>
    );
}

export default Background;
