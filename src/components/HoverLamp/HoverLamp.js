import React, {useState} from 'react';
import './HoverLamp.scss';
import {CSSTransition} from 'react-transition-group';

const HoverLamp = ({children, classes, onMouseDown, onMouseUp, onDragStart}) => {
	const validElement = React.Children.only(children);

	const [lamp, setLamp] = useState({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		showLamp: false
	})

	const mouseEnterHandler = () => setLamp({...lamp, showLamp: true});

	const mouseMoveHandler = (event) => {
		const elemRect = event.currentTarget.getBoundingClientRect();
		const maxSize = Math.max(elemRect.width, elemRect.height);

		setLamp({
			...lamp,
			width: maxSize,
			height: maxSize,
			x: event.pageX - elemRect.left,
			y: event.pageY - elemRect.top
		})
	}

	const mouseLeaveHandler = () => setLamp({...lamp, showLamp: false});

	const lampStyles = {
		width: `${lamp.width}px`,
		height: `${lamp.height}px`,
		left: `${lamp.x}px`,
		top: `${lamp.y}px`,
	};

	return (
		<React.Fragment>
			
			{
				React.cloneElement(
					validElement, 
					{
						onMouseDown: onMouseDown,
						onMouseEnter: mouseEnterHandler,
						onMouseMove: mouseMoveHandler,
						onDragStart: onDragStart,
						onMouseLeave: mouseLeaveHandler,
						className: `${children.props.className} ${classes.container}`
					},
					...validElement.props.children,
					<CSSTransition 
						in={lamp.showLamp} 
						timeout={300}
						classnames='lamp'
						mountOnEnter
						unmountOnExit
					>
						<span key={'lamp-elem'} className={classes.lamp} style={lampStyles}></span>
					</CSSTransition>
				)
			}
		</React.Fragment>	
	)
}

HoverLamp.defaultProps = {
	classes: {
		container: 'lamp-container',
		lamp: 'lamp'
	}
}

export default HoverLamp;