                  
import React, {useState} from "react";

function SliderOne({
    setPressed,
    styles,
    onScroll,
    styles2 ,
    setPressed1, 
    btnNeE1, 
    togglePressed1, 
    togglePressed2,
    setPressed2,
    styles3,
    togglePressed,
    pressed,      
    pressed1, 
    sizeMap,
}) {

    let meaningCl = document.getElementById("meaningCl");
    let meaningCl1 = document.getElementById("meaningCl1");
    let meaningCl2 = document.getElementById("meaningCl2");
    let targetOne = document.getElementById("targetOne");
    let targetTwo = document.getElementById("targetTwo");
    let targetFree = document.getElementById("targetFree");
    let divCan = document.getElementById("divCan");
    let divCan1 = document.getElementById("divCan1");
    let divCan2 = document.getElementById("divCan2");

    function divCanTg() {
        meaningCl.classList.remove("control_menu"); targetOne.classList.add("active_nav-menu");
        meaningCl1.classList.add("control_menu"); targetTwo.classList.remove("active_nav-menu");
        meaningCl2.classList.add("control_menu"); targetFree.classList.remove("active_nav-menu");
        divCan.classList.toggle("active_cp-box");
        divCan1.classList.remove("active_cp-box");
        divCan2.classList.remove("active_cp-box");
    };
    function divCan1Tg() {
        meaningCl.classList.add("control_menu"); targetOne.classList.remove("active_nav-menu");
        meaningCl1.classList.remove("control_menu"); targetTwo.classList.add("active_nav-menu");
        meaningCl2.classList.add("control_menu"); targetFree.classList.remove("active_nav-menu");
        divCan1.classList.toggle("active_cp-box");
        divCan.classList.remove("active_cp-box");
        divCan2.classList.remove("active_cp-box"); 
    };
    function divCan2Tg() {  
        meaningCl.classList.add("control_menu"); targetOne.classList.remove("active_nav-menu");
        meaningCl1.classList.add("control_menu"); targetTwo.classList.remove("active_nav-menu");
        meaningCl2.classList.remove("control_menu"); targetFree.classList.add("active_nav-menu"); 
        divCan2.classList.toggle("active_cp-box");   
        divCan.classList.remove("active_cp-box");
        divCan1.classList.remove("active_cp-box"); 
    };

    return (
        <div className='container-slider'>
            <div
                onWheelCapture={onScroll}
                style={sizeMap}
            >
                <div
                onClick={divCanTg}
                style={styles}
                className={pressed ? "box_0-active" : "box-0"}
                onClickCapture={() => setPressed(false)}
                onMouseDown={togglePressed}
                id='divCan'
                tabIndex={1}
                >
                    <div className="divic ">{btnNeE1}</div>
                </div>
                {/*//////////////////////////////////////*/}
                <div
                    onClick={divCan2Tg}
                    style={styles3}
                    className="rwerw box-0"
                    onClickCapture={() => setPressed2(false)}
                    onMouseDown={togglePressed2}
                    id='divCan2'
                    tabIndex={2}
                ></div>
                {/*//////////////////////////////////////*/}
                <div
                    onClick={divCan1Tg}
                    style={styles2}
                    className={pressed1 ? "box_0-active" : "box-0"}
                    onClickCapture={() => setPressed1(false)}
                    onMouseDown={togglePressed1}
                    id='divCan1'
                    tabIndex={3}
                >
                    <div>{btnNeE1}</div>
                </div>
            </div>
        </div>
    );
};

export default SliderOne;
