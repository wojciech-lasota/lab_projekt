import { render } from '@testing-library/react';
import React from 'react';
// import ReactDOM from 'react-dom';
// import Drag from './Drag';

import { features } from './toolbarFeatures';

function Toolbar({ openApp }) {
    return (
        <div className="footer__toolbar flex flex-jc-c">
            {features.map((e) => {
                return (
                    <div
                        key={e.id}
                        className="footer__icon "
                        onClick={() => {
                            if (e.className == 'notepad_btn') {
                                openApp('notepad');
                                // render(<Drag></Drag>);
                            } else if (e.className == 'minesweeper_btn') {
                                console.log('saper');
                                // render(<Sapper />);
                            }
                        }}
                    >
                        <img src={e.img} alt={e.alt} />
                    </div>
                );
            })}
        </div>
    );
}

export default Toolbar;
