'use client'

// styles
import styles from './Button.module.scss'

// components
import Image from 'next/image'

const Button = ({ text, color, reverse, icon, animate, newClass }) => {
	let buttonColor

	switch (color) {
		case 'yellow':
			buttonColor = '#ffd500'
			break
		case 'blue':
			buttonColor = '#272c44'
			break
		case 'white':
			buttonColor = 'white'
			break
	}

	const buttonStyles = {
		backgroundColor: buttonColor,
		padding: text ? '12px 28px' : '12px',
		flexDirection: reverse ? 'row-reverse' : 'row',
		border: `2px solid ${buttonColor}`
	}

	return (
		<div className={`${styles.button} ${newClass}`} style={buttonStyles}>
			{text && <p style={{ color: color == 'blue' ? 'white' : '' }}>{text}</p>}
			{icon && (
				<Image
					src={icon}
					width={16}
					height={16}
					alt='Button Icon'
					className={animate && styles.icon}
				/>
			)}
		</div>
	)
}

export default Button
