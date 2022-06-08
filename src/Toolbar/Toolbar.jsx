/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { render } from '@testing-library/react';
import React from 'react';
import moment from 'moment';
// import ReactDOM from 'react-dom';
// import Drag from './Drag';
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { features } from './toolbarFeatures';

function Toolbar({ openApp }) {
    return (
        <div className="footer__toolbar flex flex-jc-c">
            {features.map((e) => {
                return (
                    <div
                        key={e.id}
                        className="footer__icon flex flex-ai-c"
                        onClick={() => {
                            if (e.className == 'notepad_btn') {
                                openApp('notepad');
                                // render(<Drag></Drag>);
                            } else if (e.className == 'minesweeper_btn') {
                                openApp('minesweeper');
                                // render(<Sapper />);
                            }
                        }}
                    >
                        <img src={e.img} alt={e.alt} />
                    </div>
                );
            })}{' '}
            <div id="clock">{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
    );
}

export default Toolbar;
