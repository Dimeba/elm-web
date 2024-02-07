'use client'

// styles
import styles from './Contact.module.scss'

// map
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapBox = ({ content }) => {
	return (
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
				dragPan={false}
			>
				<Marker
					longitude={content.fields.longitude}
					latitude={content.fields.latitude}
				>
					<img src='/pin.svg' alt='marker' style={{ paddingBottom: '20px' }} />
				</Marker>
			</Map>
		</div>
	)
}

export default MapBox
