import React from 'react';



const Sapper = () => {


    const script = document.createElement("script");

    script.src = "./sapperscript.js";
    script.async = true;

    document.body.appendChild(script);



    // let scriptsrc = './sapperscript.js';
    return (<React.Fragment>
        {/* <script src={srcsaper}></script> */}
        <div id="box" >
            <h2>MINESWEEPER!</h2><hr /><br /><br />
            <div id="field"></div>
            <br />
            <div id="lost" >
                <h3>You got bombed!</h3>
                <button id="new-game-button" type="button" onClick="reload" >Start Again</button>
            </div>
        </div>

    </React.Fragment>

    );
}

export default Sapper;
