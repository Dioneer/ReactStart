import React, { useEffect } from "react";
import './canvas.css';

function Canvas() {
	let [classes, setClasses] = React.useState('');
	const canvasRef = React.useRef(null);
	const contextRef = React.useRef(null);
	let [drawing, setDrawing] = React.useState(false);

	const startDrawing = ({ nativeEvent }) => {
		const { offsetX, offsetY } = nativeEvent;
		contextRef.current.beginPath()
		contextRef.current.moveTo(offsetX, offsetY)
		setDrawing(drawing = true)
	}
	const finishDrawing = () => {
		contextRef.current.closePath()
		setDrawing(drawing = false)
		console.log(contextRef.current)
	}
	const onMouseMove = ({ nativeEvent }) => {
		if (drawing) {
			const { offsetX, offsetY } = nativeEvent;
			contextRef.current.lineTo(offsetX, offsetY)
			contextRef.current.stroke()
		} else return
	}

	useEffect(() => {
		const canvas = canvasRef.current;
		let size = document.querySelector('.canvas__prim');
		canvas.width = parseInt(getComputedStyle(size).width);
		canvas.height = 50;

		const onClick = (e) => {
			if (!canvas) return;
			if (!canvas.contains(e.target)) {
				canvas.height = 50;
				setClasses(classes = '')
			}
			if (canvas.contains(e.target)) {
				canvas.height = 100;
				setClasses(classes = 'active')
			}
		}

		const context = canvas.getContext('2d')
		const scale = window.devicePixelRatio
		context.scale(scale, scale);
		context.lineCap = 'round'
		context.strokeStyle = '#333'
		context.lineWidth = 1
		contextRef.current = context;

		document.addEventListener('click', onClick);
		return () => {
			document.removeEventListener('click', onClick);
		}

	}, [])


	return (
		<canvas
			className={['canvas', classes].join(' ')}
			onMouseDown={startDrawing}
			onMouseUp={finishDrawing}
			onMouseMove={onMouseMove}
			ref={canvasRef}>
		</canvas>
	)
}

export default Canvas;