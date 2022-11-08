
 import React, {useState, useRef} from "react";
 import styled from "styled-components";

// настройка инпута колор пикер
const Container = styled.span`
{display: inline-flex;align-items: center;width: 100px;padding: 3px 10px;border: 0.1px solid #bfc9d9;border-radius: 5px;
input[type="color"] {margin-right: 0.5vw;-webkit-appearance: none;border: none;width: auto;
height: auto;cursor: pointer;background: none;
&::-webkit-color-swatch-wrapper {padding: 0;width: 13px;height: 13px;}
&::-webkit-color-swatch {border: 1px solid #bfc9d9;border-radius: 0.2vw;padding: 0;}}
input[type="text"] {border: none;width: 100%;font-size: 14px;  background: #2b2b2b;color: #ffffff;outline: none;}}`;

const ColorPicker = props => {
const inputCP = useRef(); const editItemCP = () => {inputCP.current.select();};
  return (
    <Container className='fgd'>
      <input type="color" {...props} className="box_color-page" id="boxColorPage1"/>
      <input type="text" {...props}  ref={inputCP} onClick={editItemCP}/>
    </Container>
  );
};

 function ControlMenu( 
    {position,handleChange,editItemX,inputX,editItemY,inputY,MeaningWnumber,onChangeW,editItemW,inputW,
        MeaningHnumber,onChangeH,editItemH,inputH,MeaningRnumber,onChangeR,editItemR,inputR,MeaningBRnumber,
        onChangeBR,editItemBR,inputBR,handleInput,state,MeaningPXnumber,onChangePX,editItemPX,inputPX,
        MeaningSnumber,onChangeS,

        Irot, setIrot,

        handleInput4, state4, SvgControl, onChangeSvg,editItemSvg,inputSvg,


    }
  ) {










    let controlRpoo = JSON.parse(localStorage.getItem("controlRpoo"));
    let [controlRpoo00, setControlRpoo00] = useState(controlRpoo || 0)
    localStorage.setItem("controlRpoo", JSON.stringify(controlRpoo00));


    let [rpoo02 , setRpoo02] =useState("none")
    let [rpoo03 , setRpoo03] =useState("block")

    let [rpoo01 , setRpoo01] =useState("")
    let [rpoo011 , setRpoo011] =useState("")

    if(controlRpoo00 == 0){
        rpoo01 = rpoo03
        rpoo011 = rpoo02
    }
    if(controlRpoo00 == 1){
        rpoo011 = rpoo03
        rpoo01 = rpoo02
    }

    function rpoo(){
        setIrot(Irot = 1)      
        setControlRpoo00(controlRpoo00 = 1)  
    }
    function rpooP(){
        setIrot(Irot = 0)
        setControlRpoo00(controlRpoo00 = 0)  
     }

     

    let rpoo1 = {
        display: `${rpoo01}`,
        margin: '0',
        padding: '0',
        marginTop: '-7px',
        marginLeft: '20px',
        fontSize: '24px'
    }

    let rpoo2 = {
        display: `${rpoo011}`,
        margin: '0',
        padding: '0',
        marginTop: '-7px',
        marginLeft: '20px',
        fontSize: '24px'
    }
     return (
        <div className='meaning-cl control_menu' id='meaningCl'>
            <div className='input_con'>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>X</p>
                    {/* поле ввода значений по X */}
                    <input 
                    type="number" 
                    min="-9999" 
                    max="9999"  
                    className='input-controls' 
                    value={position.x} 
                    onChange={(e) => handleChange(e, "x")}
                    onClick={editItemX}
                    ref={inputX}
                    name="MeaningX" 
                    id="MeaningX"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>Y</p>
                    {/* поле ввода значений по Y */}
                    <input type="number" 
                    min="-9999" 
                    max="9999" 
                    className='input-controls' 
                    value={position.y} 
                    onChange={(e) => handleChange(e, "y")}
                    onClick={editItemY}
                    ref={inputY}
                    name="MeaningY" 
                    id="MeaningY"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>W</p>
                    {/* поле ввода значений по W */}
                    <input 
                    type="number" 
                    min="0" 
                    max="9999" 
                    className='input-controls' 
                    value={MeaningWnumber} 
                    onChange={onChangeW}
                    onClick={editItemW}
                    ref={inputW}
                    name="MeaningW" 
                    id="MeaningW"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x'>H</p>
                    {/* поле ввода значений по H */}
                    <input 
                    type="number" 
                    min="0" 
                    max="9999" 
                    className='input-controls' 
                    value={MeaningHnumber} 
                    onChange={onChangeH}
                    onClick={editItemH}
                    ref={inputH}
                    name="MeaningH" 
                    id="MeaningH"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x' style={{paddingTop:"3px"}}>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 13V0H1V8.41742C1.61283 8.14996 2.27611 8.00684 2.95107 8.00024C3.93993 7.99056 4.90945 8.27433 5.73703 8.81567C6.56461 9.357 7.21309 10.1316 7.60045 11.0415C7.86535 11.6637 8 12.3301 8 13H16V14H0V13ZM6.93408 13C6.93408 12.4729 6.82813 11.9486 6.61971 11.459C6.31493 10.7431 5.8047 10.1336 5.15354 9.7077C4.50238 9.28177 3.73955 9.05849 2.9615 9.06611C2.26958 9.07288 1.59327 9.26199 1 9.61223V13H6.93408Z" fill="white"/>
                    </svg>
                </p>
                    {/* поле ввода значений по R */}
                    <input 
                    type="number" 
                    min="-180" 
                    max="180"  
                    className='input-controls' 
                    value={MeaningRnumber} 
                    onChange={onChangeR}
                    onClick={editItemR}
                    ref={inputR}
                    name="MeaningR" 
                    id="MeaningR"
                    />
                </div>
                <div className='input_w-0'>
                <p className='meaning_txt-x' style={{paddingTop:"3px"}}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M14 1H7.5C3.91015 1 1 3.91015 1 7.5V14" stroke="white"/>
                    </svg>
                </p>
                    {/* поле ввода значений по BR */}
                    <input 
                    type="number" 
                    min="0" 
                    max="9999"  
                    className='input-controls'    
                    value={MeaningBRnumber} 
                    onChange={onChangeBR}  
                    onClick={editItemBR}
                    ref={inputBR}                  
                    name="MeaningBR" 
                    id="MeaningBR"
                    />
                </div>
            </div>
            <div className='color_stoke-container'>
                <div className='container-color'>
                    <div style={{display:"flex"}}> 
                        {/* поле ввода значений по C */}
                        <ColorPicker onChange={handleInput} value={state}/>
                        <p
                        className="control_bg-items"
                        style={rpoo1}
                         onClick={rpoo}

                         id="minusBgSt1"
                         >-</p>
                        <p
                        className="tototo control_bg-items"
                        style={rpoo2}
                         onClick={rpooP}
                         id="plusBgSt1"
                         >+</p>
                    </div>
                </div>
                <div className='container-stoke'>
                    <div style={{display:"flex", marginLeft:"-25px"}}>
                        {/* поле ввода значений по PX */}
                        <input 
                        className="ffg"
                        type="number" 
                        min="0" 
                        max="9999"  
                        value={MeaningPXnumber} 
                        onChange={onChangePX}
                        onClick={editItemPX}
                        ref={inputPX}
                        name="MeaningPX" 
                        id="MeaningPX"
                        /> 
                        {/* поле ввода значений по S */}
                        <ColorPicker  value={MeaningSnumber} onChange={onChangeS}/>
                    </div>
                </div>
                <p className="svg_text-cnt">SVG</p>
                <div style={{display:"flex", marginTop:"10px"}}>
                    <input 
                        type="number" 
                        min="0" 
                        max="9999" 
                        className='ffg' 
                        value={SvgControl} 
                        onChange={onChangeSvg}
                        onClick={editItemSvg}
                        ref={inputSvg}
                        name="MeaningW" 
                        id="MeaningW"
                    />
                    <ColorPicker onChange={handleInput4} value={state4} />
                </div>
            </div>
        </div>  
     );
 };
 
 export default ControlMenu;