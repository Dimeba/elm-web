'use client'

// styles
import styles from './Contact.module.scss'

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
					>
						<Marker
							longitude={content.fields.longitude}
							latitude={content.fields.latitude}
							// color='#ffd500'
						>
							<img src='/pin.svg' alt='marker' />
						</Marker>
					</Map>
				</div>
				<div className={styles.form}>Form</div>
			</div>
		</section>
	)
}

export default Contact
