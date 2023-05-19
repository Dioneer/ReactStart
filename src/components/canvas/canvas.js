import React from "react";
import './canvas.css';
import classnames from "classnames";
import useCanvas from "./useCanvas";
import { useTranslation } from "react-i18next";

function Canvas() {
	const { classes, canvasRef, startDrawing, finishDrawing, onMouseMove, saveImageToLocal, clear } = useCanvas();
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
			<div className="button-block">
				<button
					className='button button__big button-popup-canvas'
					type="submit"
					onClick={clear}>
					<span>{t("main.clear")}</span>
				</button>
				<button
					className='button button__big button-popup-canvas'
					type="submit"
					onClick={saveImageToLocal}>
					<span>{t("main.send")}</span>
				</button>
			</div>
		</React.Fragment>
	)
}

export default Canvas;