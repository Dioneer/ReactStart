import { useEffect, useContext, useState, useRef } from "react";
import Context from '../context.js';

function useCanvas() {
	const { changeImages } = useContext(Context);
	let [classes, setClasses] = useState('');
	const canvasRef = useRef(null);
	const contextRef = useRef(null);
	let [drawing, setDrawing] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvasRef.current.getContext('2d');

		context.scale(2, 2);
		context.lineCap = 'round'
		context.strokeStyle = '#333'
		context.lineWidth = 1

		contextRef.current = context;
		canvasRef.current.width = parseInt(getComputedStyle(canvas).width)
		canvasRef.current.height = parseInt(getComputedStyle(canvas).height)

		const onClick = (e) => {
			if (canvas.contains(e.target)) {
				setClasses(classes = 'active');
			}
			if (!canvas.contains(e.target)) {
				setClasses(classes = '')
			}
		}
		document.addEventListener('click', onClick);
		return () => {
			document.removeEventListener('click', onClick);
		}
	}, [])

	const startDrawing = (e) => {
		let rect = e.target.getBoundingClientRect();

		const { offsetX, offsetY } = e.nativeEvent;

		if (offsetX && offsetY && !e.targetTouches) {
			contextRef.current.beginPath();
			contextRef.current.moveTo(offsetX, offsetY);
			setDrawing(drawing = true);
		} else {
			let touchX = e.targetTouches[0].pageX - rect.left;
			let touchY = e.targetTouches[0].pageY - rect.top;
			contextRef.current.beginPath();
			contextRef.current.moveTo(touchX, touchY);
			setDrawing(drawing = true);
		}
	}

	const clearCanvas = (width, height) => {
		contextRef.current.clearRect(0, 0, width, height)
	}

	const finishDrawing = () => {
		contextRef.current.closePath();
		setDrawing(drawing = false);
	}

	const onMouseMove = (e) => {
		if (!drawing) return

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
	}

	const saveImageToLocal = (event) => {
		let rect = canvasRef.current.getBoundingClientRect();
		const id = new Date();
		let link = event.currentTarget;
		link.setAttribute('download', id);
		let image = canvasRef.current.toDataURL('image/png');
		link.setAttribute('href', image);
		changeImages(image);
		clearCanvas(rect.width, rect.height);
	};
	return { classes, canvasRef, startDrawing, finishDrawing, onMouseMove, saveImageToLocal }
}
export default useCanvas;