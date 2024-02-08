'use client'

// styles
import styles from './Contact.module.scss'

// hooks
import { useEffect, useState } from 'react'

const MapBox = ({ content }) => {
	const [mapLoaded, setMapLoaded] = useState(false)

	useEffect(() => {
		const loadMapbox = async () => {
			const mapboxGL = await import('mapbox-gl')
			const MapboxMap = await import('react-map-gl').then(mod => mod.Map)
			const Marker = await import('react-map-gl').then(mod => mod.Marker)

			const mapboxCSS =
				'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css'
			const link = document.createElement('link')
			link.href = mapboxCSS
			link.rel = 'stylesheet'
			document.head.appendChild(link)

			mapboxGL.default.accessToken = process.env.mapboxToken

			setMapLoaded({ MapboxMap, Marker })
		}

		loadMapbox()
	}, [])

	if (!mapLoaded) {
		return <div className={styles.map}>Loading map...</div>
	}

	const { MapboxMap, Marker } = mapLoaded

	return (
		<div className={styles.map}>
			<MapboxMap
				initialViewState={{
					longitude: content.fields.longitude,
					latitude: content.fields.latitude,
					zoom: 14
				}}
				mapStyle='mapbox://styles/filip-desophy/clsbnuc4101jq01ped1nqcqs5'
				scrollZoom={false}
				attributionControl={false}
				dragPan={false}
			>
				<Marker
					longitude={content.fields.longitude}
					latitude={content.fields.latitude}
				>
					<img src='/pin.svg' alt='marker' width={32} height={40} />
				</Marker>
			</MapboxMap>
		</div>
	)
}

export default MapBox
