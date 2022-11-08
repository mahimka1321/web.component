import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";

import LeftColumn from "./left.column/main.left.column/LeftColumn";
import RightColumn from "./right.column/main.right.column/RightColumn";
import TopMenu from "./top.menu/TopMenu";
import PopupCode from "./PopupCode"
import Canvas from "./canvas/Canvas"
import Wid from "./canvas/Wid"

import "./left.column/main.left.column/leftColumn.scss"
import "./left.column/main.left.column/сontainerAtwSwap.scss"
import "./right.column/main.right.column/rightColumn.scss"
import "./top.menu/topMenu.scss"
import "./canvas/canvas.scss"
import "./popupCode.scss"
import "../color.scss"
import "../animatic/animation.scss"

import "../../main.min.css"
import "../../logic/main.min.ts"

const Container = styled.span`
{display: inline-flex;align-items: center;width: 100px;padding: 3px 10px;border: 0.1px solid #bfc9d9;border-radius: 5px;     
position: absolute; z-index: 100; top: 635px; left: 40px;
input[type="color"] {margin-right: 0.5vw;-webkit-appearance: none;border: none;width: auto;
height: auto;cursor: pointer;background: none;
&::-webkit-color-swatch-wrapper {padding: 0;width: 13px;height: 13px;}
&::-webkit-color-swatch {border: 1px solid #bfc9d9;border-radius: 0.2vw;padding: 0;}}
input[type="text"] {border: none;width: 100%;font-size: 14px;  background: #2b2b2b;color: #ffffff;outline: none;}}`;


function RedactorMenu() {

////////////////////////////////////////////////////////////////////////////////
/////////////////////// НАСТРОЙКИ СТРЕЛКИ НАЗАД ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// перемещинире по нажатию лкм + localStorage //
///////////////////////////////////////////////
const [pressed, setPressed] = useState(false);
const [position, setPosition] = useState(() => {
    const pos = JSON.parse(localStorage.getItem('pos'));
    if (pos && pos.hasOwnProperty('x') && pos.hasOwnProperty('y')) {
      return pos;
    } 
    return { x: -300, y: -40}
  });

useEffect(() => {
    if (pressed && iui != 1) {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", togglePressed);
    };

    return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", togglePressed);
    };
    }, [position, pressed]);

    const onMouseMove = (event) => {
      const x = position.x + event.movementX;
      const y = position.y + event.movementY;
      setPosition({ x, y });
      localStorage.setItem('pos', JSON.stringify({x, y}));
    };
  
    const togglePressed = () => {
      setPressed((prev) => !prev);
    };

    const handleChange = (e, type) => {
      setPosition((prev) => {
          const posNew = { ...prev, [type]: e.target.valueAsNumber }
          localStorage.setItem('pos', JSON.stringify(posNew))
          return posNew;
      });
    };


    // БЭКГРАУНД БЛОКА + localStorage //
    //////////////////////////////////////
    let saveBackgroundDiv1 = localStorage.getItem("BackgroundDiv1");
    let [state, updateState] = useState(saveBackgroundDiv1 || "#4aff93"); 
    const setLocalStorageBG1 = (value) => {
        localStorage.setItem("BackgroundDiv1", value);
    };
    
    const handleInput = (e) => {
        updateState(e.target.value);
        setLocalStorageBG1(e.target.value);
    };

    // ОТКЛЮЧЕНИЕ bg БЕЗ localStorage //
    //////////////////////////////////////
    let [rot, setRot] = useState("none");
    let [Irot, setIrot] = useState(0);

    if(Irot != 0) {
        state =  rot
    };

    // БОРДЕР БЛОКА + localStorage //
    //////////////////////////////////////
    let saveBorderColorDiv1 = localStorage.getItem("BorderColorDiv1");
    const [MeaningSnumber, setMeaningS] = useState(saveBorderColorDiv1 || "#000000");  
    const setLocalStorageBC1 = (value) => {
        localStorage.setItem("BorderColorDiv1", value);
    };
    
    const onChangeS = (e) => {
        setMeaningS(e.target.value);
        setLocalStorageBC1(e.target.value);
    };

    // left X  top Y 
    const inputX = useRef(); const editItemX = () => { inputX.current.select(); };
    const inputY = useRef(); const editItemY = () => { inputY.current.select(); };

    // ПРИСВАИВАНИЯ ПО W + localStorage //
    //////////////////////////////////////
    let saveWidthDiv1 = localStorage.getItem("WidthDiv1");
    let [MeaningWnumber, setMeaningW] = useState(saveWidthDiv1 || 50);
    const setLocalStorageW1 = (value) => {
        localStorage.setItem("WidthDiv1", value);
    };
    
    const onChangeW = (e) => {
        setMeaningW(e.target.value);
        setLocalStorageW1(e.target.value);
    };
    const inputW = useRef(); const editItemW = () => { inputW.current.select(); };

    // ПРИСВАИВАНИЯ ПО H + localStorage //
    //////////////////////////////////////
    let saveHeightDiv1 = localStorage.getItem("HeightDiv1");
    const [MeaningHnumber, setMeaningH] = useState(saveHeightDiv1 || 80);
    const setLocalStorageH1 = (value) => {
        localStorage.setItem("HeightDiv1", value);
    };
    
    const onChangeH = (e) => {
        setMeaningH(e.target.value);
        setLocalStorageH1(e.target.value);
    };
    const inputH = useRef(); const editItemH = () => { inputH.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО R + localStorage //
    //////////////////////////////////////
    let saveRotateDiv1 = localStorage.getItem("RotateDiv1");
    const [MeaningRnumber, setMeaningR] = useState(saveRotateDiv1 || 0); 
    const setLocalStorageR1 = (value) => {
        localStorage.setItem("RotateDiv1", value);
    };
    
    const onChangeR = (e) => {
        setMeaningR(e.target.value);
        setLocalStorageR1(e.target.value);
    };
    const inputR = useRef(); const editItemR = () => { inputR.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО BR + localStorage //
    //////////////////////////////////////
    let saveBorderRadiusDiv1 = localStorage.getItem("BorderRadiusDiv1");
    const [MeaningBRnumber, setMeaningBR] = useState(saveBorderRadiusDiv1 || 0); 
    const setLocalStorageBR1 = (value) => {
        localStorage.setItem("BorderRadiusDiv1", value);
    };
    
    const onChangeBR = (e) => {
        setMeaningBR(e.target.value);
        setLocalStorageBR1(e.target.value);
    };
    const inputBR = useRef(); const editItemBR = () => { inputBR.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО PX + localStorage //
    //////////////////////////////////////
    let saveBorderDiv1 = localStorage.getItem("BorderDiv1");
    const [MeaningPXnumber, setMeaningPX] = useState(saveBorderDiv1 || 0); 
    const setLocalStoragePX1 = (value) => {
        localStorage.setItem("BorderDiv1", value);
    };
    
    const onChangePX = (e) => {
        setMeaningPX(e.target.value);
        setLocalStoragePX1(e.target.value);
    };
    const inputPX = useRef(); const editItemPX = () => { inputPX.current.select(); };

    // стили дива на холсте 1
    const styles = {
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${MeaningWnumber}px`,
        height: `${MeaningHnumber}px`,
        transform: `rotate(${MeaningRnumber}deg)`,
        borderRadius: `${MeaningBRnumber}px`,
        background: `${state}`,
        border: `${MeaningPXnumber}px solid${MeaningSnumber}`,
        zIndex: `10`
    };

////////////////////////////////////////////////////////////////////////////////
/////////////////////// НАСТРОЙКИ СТРЕЛКИ ВПЕРЕД //////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// перемещинире по нажатию лкм + localStorage //
////////////////////////////////////////////////
    const [pressed1, setPressed1] = useState(false);
    const [position1, setPosition1] = useState(() => {
        const pos1 = JSON.parse(localStorage.getItem('pos1'));
        if (pos1 && pos1.hasOwnProperty('x') && pos1.hasOwnProperty('y')) {
            return pos1;
        } 
        return { x: 250, y: -40}
    });

    useEffect(() => {
    
        if (pressed1 && iui != 1) {
            window.addEventListener("mousemove", onMouseMove1);
            window.addEventListener("mouseup", togglePressed1);
        };
    
        return () => {
            window.removeEventListener("mousemove", onMouseMove1);
            window.removeEventListener("mouseup", togglePressed1);
        };
    }, [position1, pressed1]);
    
    const onMouseMove1 = (event) => {
        const x = position1.x + event.movementX;
        const y = position1.y + event.movementY;
        setPosition1({ x, y });
        localStorage.setItem('pos1', JSON.stringify({x, y}));
    };
    
    const togglePressed1 = () => {
      setPressed1((prev) => !prev);
    };
    
    const handleChange1 = (e, type) => {
        setPosition1((prev) => {
            const posNew1 = { ...prev, [type]: e.target.valueAsNumber }
            localStorage.setItem('pos1', JSON.stringify(posNew1))
            return posNew1;
        });
    };

    // БЭКГРАУНД БЛОКА + localStorage //
    //////////////////////////////////////
    let saveBackgroundDiv2 = localStorage.getItem("BackgroundDiv2");
    let [state1, updateState1] = useState(saveBackgroundDiv2 || "#80bdff"); 
    const setLocalStorageBG2 = (value) => {
        localStorage.setItem("BackgroundDiv2", value);
    };
    
    const handleInput1 = (e) => {
        updateState1(e.target.value);
        setLocalStorageBG2(e.target.value);
    }

    let [rot1, setRot1] = useState("none");
    let [Irot1, setIrot1] = useState(0);

    if(Irot1 != 0) {
        state1 =  rot1
    };

    // БОРДЕР БЛОКА + localStorage //
    //////////////////////////////////////
    let saveBorderColorDiv2 = localStorage.getItem("BorderColorDiv2");
    const [MeaningSnumber1, setMeaningS1] = useState(saveBorderColorDiv2 || "#000000");
    const setLocalStorageBC2 = (value) => {
        localStorage.setItem("BorderColorDiv2", value);
    };
    
    const onChangeS1 = (e) => {
        setMeaningS1(e.target.value);
        setLocalStorageBC2(e.target.value);
    };

    // left X  top Y 
    const inputX1 = useRef(); const editItemX1 = () => { inputX1.current.select(); };
    const inputY1 = useRef(); const editItemY1 = () => { inputY1.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО W + localStorage //
    //////////////////////////////////////
    let saveWidthDiv2 = localStorage.getItem("WidthDiv2");
    const [MeaningWnumber1, setMeaningW1] = useState(saveWidthDiv2 || 50);
    const setLocalStorageW2 = (value) => {
        localStorage.setItem("WidthDiv2", value);
    };
    
    const onChangeW1 = (e) => {
        setMeaningW1(e.target.value);
        setLocalStorageW2(e.target.value);
    };
    const inputW1 = useRef(); const editItemW1 = () => { inputW1.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО H + localStorage //
    //////////////////////////////////////
    let saveHeightDiv2 = localStorage.getItem("HeightDiv2");
    const [MeaningHnumber1, setMeaningH1] = useState(saveHeightDiv2 || 80);
    const setLocalStorageH2 = (value) => {
        localStorage.setItem("HeightDiv2", value);
    };
    
    const onChangeH1 = (e) => {
        setMeaningH1(e.target.value);
        setLocalStorageH2(e.target.value);
    };
    const inputH1 = useRef(); const editItemH1 = () => { inputH1.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО R + localStorage //
    //////////////////////////////////////
    let saveRotateDiv2 = localStorage.getItem("RotateDiv2");
    const [MeaningRnumber1, setMeaningR1] = useState(saveRotateDiv2 || 0);
    const setLocalStorageR2 = (value) => {
        localStorage.setItem("RotateDiv2", value);
    };
    
    const onChangeR1 = (e) => {
        setMeaningR1(e.target.value);
        setLocalStorageR2(e.target.value);
    };
    const inputR1 = useRef(); const editItemR1 = () => { inputR1.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО BR + localStorage //
    //////////////////////////////////////
    let saveBorderRadiusDiv2 = localStorage.getItem("BorderRadiusDiv2");
    const [MeaningBRnumber1, setMeaningBR1] = useState(saveBorderRadiusDiv2 || 0);
    const setLocalStorageBR2 = (value) => {
        localStorage.setItem("BorderRadiusDiv2", value);
    };
    
    const onChangeBR1 = (e) => {
        setMeaningBR1(e.target.value);
        setLocalStorageBR2(e.target.value);
    };
    const inputBR1 = useRef(); const editItemBR1 = () => { inputBR1.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО PX + localStorage //
    //////////////////////////////////////
    let saveBorderDiv2 = localStorage.getItem("BorderDiv2");
    const [MeaningPXnumber1, setMeaningPX1] = useState(saveBorderDiv2 || 0);
    const setLocalStoragePX2 = (value) => {
        localStorage.setItem("BorderDiv2", value);
    };
    
    const onChangePX1 = (e) => {
        setMeaningPX1(e.target.value);
        setLocalStoragePX2(e.target.value);
    };
    const inputPX1 = useRef(); const editItemPX1 = () => { inputPX1.current.select(); };

    // стили дива на холсте 2
    const styles2 = {
        position: 'absolute',
        left: `${position1.x}px`,
        top: `${position1.y}px`,
        width: `${MeaningWnumber1}px`,
        height: `${MeaningHnumber1}px`,
        transform: `rotate(${MeaningRnumber1}deg)`,
        borderRadius: `${MeaningBRnumber1}px`,
        background: `${state1}`,
        border: `${MeaningPXnumber1}px solid${MeaningSnumber1}`,
        zIndex: `10`
    };

////////////////////////////////////////////////////////////////////////////////
/////////////////////// НАСТРОЙКИ СТРЕЛКИ ВПЕРЕД //////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// перемещинире по нажатию лкм + localStorage //
///////////////////////////////////////////////
    const [pressed2, setPressed2] = useState(false);
    const [position2, setPosition2] = useState(() => {
        const pos2 = JSON.parse(localStorage.getItem('pos2'));
        if (pos2 && pos2.hasOwnProperty('x') && pos2.hasOwnProperty('y')) {
            return pos2;
        } 
        return { x: -225, y: -140}
    });

    useEffect(() => {
        if (pressed2 && iui != 1) {
            window.addEventListener("mousemove", onMouseMove2);
            window.addEventListener("mouseup", togglePressed2);
        };
    
        return () => {
            window.removeEventListener("mousemove", onMouseMove2);
            window.removeEventListener("mouseup", togglePressed2);
        };
    }, [position2, pressed2]);


    const onMouseMove2 = (event) => {
        const x = position2.x + event.movementX;
        const y = position2.y + event.movementY;
        setPosition2({ x, y });
        localStorage.setItem('pos2', JSON.stringify({x, y}));
    };

    const togglePressed2 = () => {
        setPressed2((prev) => !prev);
    };

    const handleChange2 = (e, type) => {
        setPosition2((prev) => {
            const posNew2 = { ...prev, [type]: e.target.valueAsNumber }
            localStorage.setItem('pos2', JSON.stringify(posNew2))
            return posNew2;
        });
    };


    // БОРДЕР БЛОКА + localStorage //
    /////////////////////////////////
    let saveBorderColorDiv3 = localStorage.getItem("BorderColorDiv3");
    const [MeaningSnumber2, setMeaningS2] = useState(saveBorderColorDiv3 || "#ffffff");
    const setLocalStorageBC3 = (value) => {
        localStorage.setItem("BorderColorDiv3", value);
    };
    
    const onChangeS2 = (e) => {
        setMeaningS2(e.target.value);
        setLocalStorageBC3(e.target.value);
    };

    // left X  top Y 
    const inputX2 = useRef(); const editItemX2 = () => { inputX2.current.select(); };
    const inputY2 = useRef(); const editItemY2 = () => { inputY2.current.select(); };

    // ПРИСВАИВАНИЯ ПО W + localStorage //
    //////////////////////////////////////
    let saveWidthDiv3 = localStorage.getItem("WidthDiv3");
    const [MeaningWnumber2, setMeaningW2] = useState(saveWidthDiv3 || 450);
    const setLocalStorageW3 = (value) => {
        localStorage.setItem("WidthDiv3", value);
    };
    
    const onChangeW2 = (e) => {
        setMeaningW2(e.target.value);
        setLocalStorageW3(e.target.value);
    };
    const inputW2 = useRef(); const editItemW2 = () => { inputW2.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО H + localStorage //
    /////////////////////////////////////
    let saveHeightDiv3 = localStorage.getItem("HeightDiv3");
    const [MeaningHnumber2, setMeaningH2] = useState(saveHeightDiv3 || 280);
    const setLocalStorageH3 = (value) => {
        localStorage.setItem("HeightDiv3", value);
    };
    
    const onChangeH2 = (e) => {
        setMeaningH2(e.target.value);
        setLocalStorageH3(e.target.value);
    };
    const inputH2 = useRef(); const editItemH2 = () => { inputH2.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО R + localStorage //
    /////////////////////////////////////
    let saveRotateDiv3 = localStorage.getItem("RotateDiv3");
    const [MeaningRnumber2, setMeaningR2] = useState(saveRotateDiv3 || 0);
    const setLocalStorageR3 = (value) => {
        localStorage.setItem("RotateDiv3", value);
    };
    
    const onChangeR2 = (e) => {
        setMeaningR2(e.target.value);
        setLocalStorageR3(e.target.value);
    };
    const inputR2 = useRef(); const editItemR2 = () => { inputR2.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО BR + localStorage //
    //////////////////////////////////////
    let saveBorderRadiusDiv3 = localStorage.getItem("BorderRadiusDiv3");
    const [MeaningBRnumber2, setMeaningBR2] = useState(saveBorderRadiusDiv3 || 0);
    const setLocalStorageBR3 = (value) => {
        localStorage.setItem("BorderRadiusDiv3", value);
    };
    
    const onChangeBR2 = (e) => {
        setMeaningBR2(e.target.value);
        setLocalStorageBR3(e.target.value);
    };
    const inputBR2 = useRef(); const editItemBR2 = () => { inputBR2.current.select(); };
    
    // ПРИСВАИВАНИЯ ПО PX + localStorage //
    //////////////////////////////////////
    let saveBorderDiv3 = localStorage.getItem("BorderDiv3");
    const [MeaningPXnumber2, setMeaningPX2] = useState(saveBorderDiv3 || 0);
    const setLocalStoragePX3 = (value) => {
        localStorage.setItem("BorderDiv3", value);
    };
    
    const onChangePX2 = (e) => {
        setMeaningPX2(e.target.value);
        setLocalStoragePX3(e.target.value);
    };
    const inputPX2 = useRef(); const editItemPX2 = () => { inputPX2.current.select(); };

    // стили дива на холсте 3
    const styles3 = {
        position: 'absolute',
        left: `${position2.x}px`,
        top: `${position2.y}px`,
        width: `${MeaningWnumber2}px`,
        height: `${MeaningHnumber2}px`,
        transform: `rotate(${MeaningRnumber2}deg)`,
        borderRadius: `${MeaningBRnumber2}px`,
        border: `${MeaningPXnumber2}px solid ${MeaningSnumber2}`,
        zIndex: `1`
    };

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

    let iui = 1; let [pop, setPop] = useState(0); if (pop == 1) { iui = 0 };
    
    
    let storedNames = JSON.parse(localStorage.getItem("posZ"));
    const [pos, setPos] = useState(storedNames || {scale: 1});
    localStorage.setItem("posZ", JSON.stringify(pos));
    
    const [scroller, setScroller] = useState(0);
    const onScroll = (e) => { 
        if (scroller >= 1) { 
            let delta = e.deltaY * -0.0005; 
            let newScale = pos.scale + delta; 
            setPos({
                scale: newScale
            });
        };
    };

    let sizeMap = {
        transform: `scale(${pos.scale})`,
        display: `flex`
    };

    let saveColorSvg1 = localStorage.getItem("ColorSvg1");
    let [state4, updateState4] = useState(saveColorSvg1 || "#ffffff");
    const setLocalStorageCSvg1 = (value) => {
        localStorage.setItem("ColorSvg1", value);
    };
        
    const handleInput4 = (e) => {
        updateState4(e.target.value);
        setLocalStorageCSvg1(e.target.value);
    };

    let saveSizeSvg1 = localStorage.getItem("SizeSvg1");
    const [SvgControl, setSvgControl] = useState(saveSizeSvg1 || 20);
    const setLocalStorageSSvg1 = (value) => {
        localStorage.setItem("SizeSvg1", value);
    };
        
    const onChangeSvg = (e) => {
        setSvgControl(e.target.value);
        setLocalStorageSSvg1(e.target.value);
    };
    const inputSvg = useRef(); const editItemSvg = () => { inputSvg.current.select(); };

    let svg = {
        width: `${SvgControl}px`,
        height: 'auto'
    };
        
    let svgColor = {
        fill: `${state4}`,
    };

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// ВЫВОД НА  ФРЕЙМ /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
    let storageBtn = JSON.parse(localStorage.getItem("btnNeE"));
    let [btnNeE, setBtnNeE] = useState(storageBtn || 1);
    localStorage.setItem("btnNeE", JSON.stringify(btnNeE));
/////////////////////////////////////////////////////////////////////////////////////////////
    let [btnNeE1, setbtnNeE1] = useState();
/////////////////////////////////////////////////////////////////////////////////////////////
    let [btnNeEPsevdo1, setBtnNeEPsevdo1] = useState(``);
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

    const plusClick1 = () => {
        setBtnNeE(btnNeE = 1);
    }; if (btnNeE == 1) {
        let e4r = <svg style={svg} className="svt_t" width="14" height="24" viewBox="0 0 14 24" fill="none"><path style={svgColor} d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z"/></svg>
        btnNeE1 = e4r;
/////////////////////////////////////////////////////////////////////////////////////////////
        let e4r1 = 
        `<svg class="svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                <path
                    class="svg-color"
                    d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 
                    10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 
                    1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 
                    3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 
                    22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 
                    3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z"
                />
            </svg>`;
        btnNeEPsevdo1 = e4r1;
    };
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

    const plusClick2 = () => {
        setBtnNeE(btnNeE = 2);
    }; if (btnNeE == 2) {
        let e4r = <svg style={svg} className="svt_t" width="15" height="21" viewBox="0 0 15 21" fill="none"><path style={svgColor} d="M13.8764 9.68911C14.4295 10.0882 14.4295 10.9117 13.8764 11.3109L1.58521 20.1813C0.923842 20.6586 0 20.186 0 19.3704L0 1.62959C0 0.813983 0.923841 0.341408 1.58521 0.818706L13.8764 9.68911Z" fill="black"/></svg>
        btnNeE1 = e4r;

/////////////////////////////////////////////////////////////////////////////////////////////
        let e4r1 = 
        `<svg class="svg" width="15" height="21" viewBox="0 0 15 21" fill="none">
                <path
                    class="svg-color"
                    d="M13.8764 9.68911C14.4295 10.0882 14.4295 10.9117 13.8764 
                    11.3109L1.58521 20.1813C0.923842 20.6586 0 20.186 0 19.3704L0 
                    1.62959C0 0.813983 0.923841 0.341408 1.58521 0.818706L13.8764 9.68911Z"
                />
            </svg>`;
        btnNeEPsevdo1 = e4r1;
    };

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

    const plusClick3 = () => {
        setBtnNeE(btnNeE = 3);
    }; if (btnNeE == 3) {
        let e4r = <svg style={svg} className="svt_t" width="22" height="24" viewBox="0 0 22 24" fill="none"><path style={svgColor} d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z"/></svg>
        btnNeE1 = e4r;

/////////////////////////////////////////////////////////////////////////////////////////////
        let e4r1 = 
        `<svg class="svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
                <path
                    class="svg-color"
                    d="M21.0607 13.0607C21.6464 12.4749 21.6464 11.5251 21.0607 
                    10.9393L11.5147 1.3934C10.9289 0.807611 9.97919 0.807611 
                    9.3934 1.3934C8.80761 1.97919 8.80761 2.92893 9.3934 
                    3.51472L17.8787 12L9.3934 20.4853C8.80761 21.0711 8.80761 
                    22.0208 9.3934 22.6066C9.97919 23.1924 10.9289 23.1924 
                    11.5147 22.6066L21.0607 13.0607ZM0 13.5L20 13.5V10.5L0 10.5L0 13.5Z"
                />
            </svg>`;
        btnNeEPsevdo1 = e4r1;
    };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Вывод кода в попап ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Вывод html разметки  ////////
let htmlContainer =
        `
<div class="сontainer">
        <div class="box btn-n" id="bntL">
            <div class="strelka">
                ${btnNeEPsevdo1}
            </div>
        </div>
            <img id="photos" class="photos" src="https://content1.rozetka.com.ua/goods/images/original/94786788.jpg"/>
        <div class="box1 btn-n" id="bntR">
            <div class="strelka">
                ${btnNeEPsevdo1}
            </div>
        </div>
</div>`;

// Вывод css разметки ///////////////////////////
let cssSlider =
        `
.сontainer {
    position: absolute;
    top: 50%; /* изменять расположение тут */
    left: 50%;
    transform: translate(-50%,-50%); /* второе значение удалять */
    display: flex;

    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none;
}

.photos
{
    position: absolute;
    top: ${position2.y}px; 
    left: ${position2.x}px; 
    transform: rotate(${MeaningRnumber2}deg);
    border-radius: ${MeaningBRnumber2}px;
    width: ${MeaningWnumber2}px;
    height: ${MeaningHnumber2}px;
    border: ${MeaningPXnumber2}px solid ${MeaningSnumber2};
    z-index: 1;
}

.box {
    position: absolute;
    top: ${position.y}px; 
    left: ${position.x}px; 
    transform: rotate(${MeaningRnumber}deg);
    border-radius: ${MeaningBRnumber}px;
    width: ${MeaningWnumber}px;
    height: ${MeaningHnumber}px;
    background: ${state}; 
    border: ${MeaningPXnumber}px solid ${MeaningSnumber};
    cursor: pointer;
    z-index: 10;
}
.box1 {
    position: absolute;
    top: ${position1.y}px; 
    left: ${position1.x}px; 
    transform: rotate(${MeaningRnumber1}deg);
    border-radius: ${MeaningBRnumber1}px;
    width: ${MeaningWnumber1}px;
    height: ${MeaningHnumber1}px;
    background: ${state1}; 
    border: ${MeaningPXnumber1}px solid ${MeaningSnumber1};
    cursor: pointer;
    z-index: 10;
}

.btn-n:active {
    transform: scale(0.9);
    transition: 0.2s;
}

.box > .strelka {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transform: rotate(180deg);
}

.box1 > .strelka {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.svg-color {
    fill: ${state4}
}
.svg {
    width: ${SvgControl}px;
    height: auto;
}`;

// Вывод js разметки //////////////
let jsContainer = 
        `
let slider_cfg = {
    1: "https://phonoteka.org/uploads/posts/2021-06/1624303226_38-phonoteka_org-p-oboi-dlya-makbuka-krasivo-42.jpg",
    2: "https://mobimg.b-cdn.net/v3/fetch/9e/9ef75ed161ec520413d664a40dc450af.jpeg",
    3: "https://vsegda-pomnim.com/uploads/posts/2022-03/1648674100_11-vsegda-pomnim-com-p-krasivie-gornie-reki-foto-11.jpg",
    4: "https://phonoteka.org/uploads/posts/2021-06/1624079183_11-phonoteka_org-p-oboi-na-rabochii-stol-gori-krasivo-11.jpg",
    5: "https://img1.fonwall.ru/o/n2/more-otdyh-bungalo-tropiki.jpg?route=mid&amp;h=750",
    6: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614612176_27-p-fon-dlya-fotoshopa-priroda-39.jpg",
}

let photos = document.getElementById('photos');
let bntL = document.getElementById('bntL');
let bntR = document.getElementById('bntR');

let sin = 1;

let size = Object.keys(slider_cfg).length;
let path = slider_cfg[sin];

function update(){
    path = slider_cfg[sin];
    photos.setAttribute("src", path);
}

bntL.onclick = function(){
    if (sin > 1){ sin = sin - 1 } 
    else{ sin = 1 }
    if(sin < 6){ bntR.style.opacity = 1 }
    if(sin < 2){ bntL.style.opacity = 0.6 }
    update();
}

bntR.onclick = function(){
    if (sin < size){ sin = sin + 1 } 
    else{ sin = size; bntR.style.opacity = 0.6 }
    if(sin > 1){ bntL.style.opacity = 1 }
    update();
}

update();
`;


return (
    <div
        className="container-main anim-c"
        style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            animation: "1s Redactiractive"
        }}
    >    
        {/* <Wid htmlContainer={htmlContainer} cssSlider={cssSlider} jsContainer={jsContainer} /> */}
        <PopupCode 
            htmlContainer={htmlContainer} cssSlider={cssSlider} jsContainer={jsContainer} 
            position={position} handleChange={handleChange} editItemX={editItemX} 
            inputX={inputX} styles={styles} 
        />
        <LeftColumn
            position={position} handleChange={handleChange} editItemX={editItemX}
            inputX={inputX} editItemY={editItemY} inputY={inputY}
            MeaningWnumber={MeaningWnumber} onChangeW={onChangeW} editItemW={editItemW}
            inputW={inputW} MeaningHnumber={MeaningHnumber} onChangeH={onChangeH}
            editItemH={editItemH} inputH={inputH} MeaningRnumber={MeaningRnumber}
            onChangeR={onChangeR} editItemR={editItemR} inputR={inputR}
            MeaningBRnumber={MeaningBRnumber} onChangeBR={onChangeBR} editItemBR={editItemBR}
            inputBR={inputBR} handleInput={handleInput} state={state}
            MeaningPXnumber={MeaningPXnumber} onChangePX={onChangePX} editItemPX={editItemPX}
            inputPX={inputPX} MeaningSnumber={MeaningSnumber} onChangeS={onChangeS}

            Irot={Irot} setIrot={setIrot}

            handleInput4={handleInput4} state4={state4} SvgControl={SvgControl} onChangeSvg={onChangeSvg}
            editItemSvg={editItemSvg} inputSvg={inputSvg}


            state1={state1} updateState1={updateState1} handleInput1={handleInput1}
            position1={position1} handleChange1={handleChange1} editItemX1={editItemX1}
            inputX1={inputX1} editItemY1={editItemY1} inputY1={inputY1}
            MeaningWnumber1={MeaningWnumber1} onChangeW1={onChangeW1} editItemW1={editItemW1}
            inputW1={inputW1} MeaningHnumber1={MeaningHnumber1} onChangeH1={onChangeH1}
            editItemH1={editItemH1} inputH1={inputH1} MeaningRnumber1={MeaningRnumber1}
            onChangeR1={onChangeR1} editItemR1={editItemR1} inputR1={inputR1}
            MeaningBRnumber1={MeaningBRnumber1} onChangeBR1={onChangeBR1} editItemBR1={editItemBR1}
            inputBR1={inputBR1}
            MeaningPXnumber1={MeaningPXnumber1} onChangePX1={onChangePX1} editItemPX1={editItemPX1}
            inputPX1={inputPX1} MeaningSnumber1={MeaningSnumber1} onChangeS1={onChangeS1}

            setIrot1={setIrot1} Irot1={Irot1}

            position2={position2} handleChange2={handleChange2} editItemX2={editItemX2}
            inputX2={inputX2} editItemY2={editItemY2} inputY2={inputY2}
            MeaningWnumber2={MeaningWnumber2} onChangeW2={onChangeW2} editItemW2={editItemW2}
            inputW2={inputW2} MeaningHnumber2={MeaningHnumber2} onChangeH2={onChangeH2}
            editItemH2={editItemH2} inputH2={inputH2} MeaningRnumber2={MeaningRnumber2}
            onChangeR2={onChangeR2} editItemR2={editItemR2} inputR2={inputR2}
            MeaningBRnumber2={MeaningBRnumber2} onChangeBR2={onChangeBR2} editItemBR2={editItemBR2}
            inputBR2={inputBR2}
            MeaningPXnumber2={MeaningPXnumber2} onChangePX2={onChangePX2} editItemPX2={editItemPX2}
            inputPX2={inputPX2} MeaningSnumber2={MeaningSnumber2} onChangeS2={onChangeS2}


        />
        <TopMenu
            setPressed={setPressed} pressed={pressed} setPosition={setPosition} position={position}
            setPop={setPop} pop={pop} setScroller={setScroller} scroller={scroller} setPos={setPos}
        />
        <p
        style={
            {
                position: 'absolute',
                width: '79px',
                height: '25px',
                overflow: 'hidden',
                top: '0px',
                fontSize: '20px',
                fontWeight: 'bold',
                right: '400px',
                color: '#fff',
                zIndex: '5',
                display: 'flex'
            }
        } 
        ><span>size:&ensp;</span>{pos.scale}</p>
        <Canvas
            setPressed={setPressed} styles={styles} onMouseMove={onMouseMove} togglePressed={togglePressed}
            sizeMap={sizeMap}

            svg={svg}

            setPressed1={setPressed1} styles2={styles2} 
            onScroll={onScroll} pos={pos} btnNeE1={btnNeE1} togglePressed1={togglePressed1}

            setPressed2={setPressed2} onMouseMove2={onMouseMove2} styles3={styles3}  togglePressed2={togglePressed2}

            pressed={pressed} pressed1={pressed1} pressed2={pressed2}
        />

        
        <RightColumn
            plusClick1={plusClick1} plusClick2={plusClick2} plusClick3={plusClick3}
            handleInput4={handleInput4} state4={state4} btnNeE={btnNeE}
        />
    </div>
);};

export default RedactorMenu;