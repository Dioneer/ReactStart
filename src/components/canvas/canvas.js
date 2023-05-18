import React from "react";
import './canvas.css';
import classnames from "classnames";
import useCanvas from "./useCanvas";
import { useTranslation } from "react-i18next";

function Canvas() {
	const { classes, canvasRef, startDrawing, finishDrawing, onMouseMove, saveImageToLocal } = useCanvas();
	const { t } = useTranslation();

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
				<span>{t("main.send")}</span>
			</button>
		</React.Fragment>
	)
}

export default Canvas;