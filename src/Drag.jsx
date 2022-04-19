import React from 'react';

import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

import './drag.scss';

function Drag({ children, onClose, id }) {
    //   var defaultFontSize = window.getComputedStyle("root", null).getPropertyValue("font-size");
    // var defaultFontSize = window.getComputedStyle(root,null).getPropertyValue("font-size");
    const root = document.querySelector('#root');
    const defaultFontSize = window
        .getComputedStyle(root, null)
        .getPropertyValue('font-size');
    // console.log(defaultFontSize);
    const halfWidth = window.innerWidth / 2;

    // const windowCenter =
    //     parseInt(halfWidth) - parseInt(defaultFontSize) * parseInt(15);

    // console.log(windowCenter);
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
            <div ref={nodeRef} className="drag-container">
                <button
                    type="button"
                    onClick={() => {
                        onClose(id);
                    }}
                >
                    close
                </button>
                <div className="handle">Drag from here</div>
                <div className="dragContent">{children}</div>
            </div>
        </Draggable>
    );
}
Drag.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};
export default Drag;
