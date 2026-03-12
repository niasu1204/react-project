import React, { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false); // 상태 저장용 (리렌더링 필요 없음)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 400;
    canvas.style.border = "2px solid black";

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round"; //끝을 둥글게 butt, square
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 배경색 지정

    ctxRef.current = ctx;
  }, []);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.beginPath(); //새로운 그림 시작
    ctxRef.current.moveTo(offsetX, offsetY); //pen를 해당 위치로 이동
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY); //다음 지점으로 선을 그림
    ctxRef.current.stroke(); //선을 화면에 출력
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    ctxRef.current.closePath();//선 끝냄
  };

  const handleDownload = () => {
    const image = canvasRef.current.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = 'drawing.png';

    link.click();
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // 캔버스를 벗어날 때도 종료
      />
      <button onClick={handleDownload}>다운로드</button>
    </>
  );
};

export default Canvas;
