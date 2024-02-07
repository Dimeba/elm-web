'use client'

// styles
import styles from './Contact.module.scss'

// components
import Button from './Button'

// map
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Contact = ({ content }) => {
	return (
		<section>
			<div className={`sectionContainer ${styles.contact}`}>
				<div className={styles.map}>
					<Map
						initialViewState={{
							longitude: content.fields.longitude,
							latitude: content.fields.latitude,
							zoom: 14
						}}
						mapStyle='mapbox://styles/filip-desophy/clsbnuc4101jq01ped1nqcqs5'
						mapboxAccessToken={process.env.mapboxToken}
						scrollZoom={false}
						attributionControl={false}
					>
						<Marker
							longitude={content.fields.longitude}
							latitude={content.fields.latitude}
						>
							<img
								src='/pin.svg'
								alt='marker'
								style={{ paddingBottom: '20px' }}
							/>
						</Marker>
					</Map>
				</div>
				<div className={styles.form}>
					<h2>{content.fields.title}</h2>

					<form
						name='contact'
						method='POST'
						netlify-honeypot='bot-field'
						data-netlify='true'
						// action='/success'
					>
						<input type='hidden' name='form-name' value='contact' />

						<input
							type='text'
							id='fullName'
							name='fullName'
							placeholder='Full Name'
						/>

						<input
							type='text'
							id='contact'
							name='contact'
							placeholder='Contact'
						/>

						<textarea id='message' name='message' placeholder='Message..' />

						<button type='submit'>
							<Button color='yellow' text='Send' icon='/arrow.svg' animate />
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
