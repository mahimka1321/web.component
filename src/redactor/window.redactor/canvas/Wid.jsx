
import React, {useEffect, useRef} from "react";

function Wid({htmlContainer,cssSlider,jsContainer}) {

    function none()
    {
        let ContentNone = document.getElementById('ContentNone')
        ContentNone.classList.remove("none")
    }

    const iframe = useRef(null);

    useEffect(() => {iframe.current.srcdoc = `${htmlContainer}<style>${cssSlider}</style><script>${jsContainer}</script>`;},
    [htmlContainer, cssSlider, jsContainer]);

    return (
        <div  className="content-none" id="ContentNone">
            <button className="rtertegdf" onClick={none}>Закрыть</button>
            <iframe scrolling="no" className="Preview" title="Preview" ref={iframe}></iframe>
        </div>
    );
};

export default Wid;
