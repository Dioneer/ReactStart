import React from "react";
import './canvas.css';
import classnames from "classnames";
import useCanvas from "./useCanvas";
import { useTranslation } from "react-i18next";
import Button from '../UI/button.js';

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
				<Button click={clear} aux={'button-popup-canvas'} title={t("main.clear")} type={"button"}></Button>
				<Button click={saveImageToLocal} aux={'button-popup-canvas'} title={t("main.send")}></Button>
			</div>
		</React.Fragment >
	)
}

export default Canvas;