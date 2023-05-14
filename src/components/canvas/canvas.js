import React from "react";
import './canvas.css';
import classnames from "classnames";
import useCanvas from "./useCanvas";

function Canvas() {
	const { classes, canvasRef, startDrawing, finishDrawing, onMouseMove, saveImageToLocal } = useCanvas();
	return (
		<React.Fragment>
			<canvas
				className={classnames('canvas', { active: classes })}
				onMouseDown={startDrawing}
				onMouseUp={finishDrawing}
				onMouseMove={onMouseMove}
				onTouchStart={startDrawing}
				onTouchEnd={finishDrawing}
				onMouseLeave={finishDrawing}
				onTouchMove={onMouseMove}
				ref={canvasRef}>
			</canvas>
			<button
				className='button button__big button-popup-canvas'
				type="submit"
				onClick={saveImageToLocal}>
				<span>Send</span>
			</button>
		</React.Fragment>
	)
}

export default Canvas;