
import React, {useEffect, useRef} from "react";
import Hoocks from "./Hoocks"

function Title() {
    const {
        htmlContainer, cssSlider, jsContainer
    }  = Hoocks();

    const iframe = useRef(null);

    useEffect(() => {iframe.current.srcdoc = `${htmlContainer}<style>${cssSlider}</style><script>${jsContainer}</script>`;},
    [htmlContainer, cssSlider, jsContainer]);

    return (
        <div  className="ку" id="ContentNone">
            <iframe scrolling="no" className="Preview" title="Preview" ref={iframe}></iframe>
        </div>
    )
}

export default Title;