import React from 'react';

import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

function Drag({ children }) {
    //   var defaultFontSize = window.getComputedStyle("root", null).getPropertyValue("font-size");
    // var defaultFontSize = window.getComputedStyle(root,null).getPropertyValue("font-size");
    const root = document.querySelector('#root');
    const defaultFontSize = window
        .getComputedStyle(root, null)
        .getPropertyValue('font-size');
    console.log(defaultFontSize);
    const halfWidth = window.innerWidth / 2;

    const windowCenter =
        parseInt(halfWidth) - parseInt(defaultFontSize) * parseInt(15);

    console.log(windowCenter);
    const nodeRef = React.useRef(null);

    return (
        <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={() => {}}
            onDrag={() => {}}
            onStop={() => {}}
            nodeRef={nodeRef}
        >
            <div className="center" ref={nodeRef}>
                <div className="handle">Drag from here</div>
                <div className="dragContent">{children}</div>
            </div>
        </Draggable>
    );
}
Drag.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Drag;
