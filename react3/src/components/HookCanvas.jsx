import { useEffect, useRef, useState } from "react";

const HookCanvas = ()=>{
    const paper = useRef();  //useRef로 DOM에 접근
    const [pen, setPen] = useState(); // 2D context

    useEffect(() => {
        setPen(paper.current.getContext("2d")); // canvas DOM
    }, []);

    return (
        <canvas
            onClick={(e) => {
                pen.fillRect(
                    e.nativeEvent.offsetX - 25,
                    e.nativeEvent.offsetY - 25,
                    50,
                    50
                );
            }}
            ref={paper}
            width={300}
            height={300}
            style={{ border: "black solid 2px" }}
        />
    );


};
export default HookCanvas;
