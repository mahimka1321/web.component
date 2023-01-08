
import React from "react";
import SliderOne from "./SliderOne"

function Canvas({
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


    let toos =
    (    
        <SliderOne 
            setPressed={setPressed} 
            styles={styles}
            onScroll={onScroll}
            styles2={styles2}
            setPressed1={setPressed1}
            btnNeE1={btnNeE1}
            togglePressed1={togglePressed1}
            togglePressed2={togglePressed2}
            setPressed2={setPressed2}
            styles3={styles3}
            togglePressed={togglePressed}
            pressed={pressed}
            pressed1={pressed1}
            sizeMap={sizeMap}
        />
    )

    let papa

    let i = 0

    if(i != 0){
        toos =  papa
    }


    return (
        <div className='boxControl'  id='boxSliderOne'> 
            {/* блок по смене контента */}
            <div id="priem">
                {toos}
            </div>
        </div>
    );
};

export default Canvas;
