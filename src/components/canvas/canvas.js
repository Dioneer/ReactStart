import React, { useEffect, useContext } from "react";
import './canvas.css';
import classnames from "classnames";
import Context from '../context.js';

function Canvas() {
	const { changeImages } = useContext(Context);
	let [classes, setClasses] = React.useState('');
	const canvasRef = React.useRef(null);
	const contextRef = React.useRef(null);
	let [drawing, setDrawing] = React.useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		let rect = canvas.getBoundingClientRect();
		const context = canvas.getContext('2d');
		contextRef.current = context;

		canvas.width = rect.width;
		canvas.height = 50;

		context.scale(1, 1);
		context.lineCap = 'round'
		context.strokeStyle = '#333'
		context.lineWidth = 1

		const onClick = (e) => {
			if (!canvas) return;
			if (!canvas.contains(e.target)) {
				canvas.height = 50;
				setClasses(classes = '')
			}
		}

		document.addEventListener('click', onClick);
		return () => {
			document.removeEventListener('click', onClick);
		}

	}, [])

	const startDrawing = (e) => {
		canvasRef.current.height = 100;
		setClasses(classes = 'active')
		let rect = e.target.getBoundingClientRect();
		clearCanvas(rect.width, rect.height);
		const { offsetX, offsetY } = e.nativeEvent;
		if (offsetX && offsetY) {
			contextRef.current.beginPath();
			contextRef.current.moveTo(offsetX, offsetY);
			contextRef.current.lineTo(offsetX, offsetY);
			contextRef.current.stroke();
			setDrawing(drawing = true);
		} else {
			let touchX = e.targetTouches[0].pageX - rect.left;
			let touchY = e.targetTouches[0].pageY - rect.top;
			contextRef.current.beginPath();
			contextRef.current.moveTo(touchX, touchY);
			setDrawing(drawing = true);
			contextRef.current.lineTo(touchX, touchY);
			contextRef.current.stroke();
		}
	}

	const clearCanvas = (width, height) => {
		contextRef.current.clearRect(0, 0, width, height)
	}

	const finishDrawing = (e) => {
		contextRef.current.closePath();
		setDrawing(drawing = false);
	}

	const onMouseMove = (e) => {
		if (drawing) {
			const { offsetX, offsetY } = e.nativeEvent;
			if (offsetX && offsetY) {
				contextRef.current.lineTo(offsetX, offsetY);
				contextRef.current.stroke();
			} else {
				let rect = e.target.getBoundingClientRect();
				let touchX = e.targetTouches[0].pageX - rect.left;
				let touchY = e.targetTouches[0].pageY - rect.top;
				contextRef.current.lineTo(touchX, touchY);
				contextRef.current.stroke();
			}
		} else return
	}

	const saveImageToLocal = (event) => {
		const id = new Date();
		let link = event.currentTarget;
		link.setAttribute('download', id);
		let image = canvasRef.current.toDataURL('image/png');
		link.setAttribute('href', image);
		changeImages(image)
	};

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
				className='button button__big'
				type="submit"
				onClick={saveImageToLocal}>
				<span>Send</span>
			</button>
		</React.Fragment>
	)
}

export default Canvas;