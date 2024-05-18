import React, { useEffect } from 'react'

type MarkerProps = google.maps.MarkerOptions & {
	//station: { name: string; description: string }
	infoWindowRef?: React.MutableRefObject<google.maps.InfoWindow | null>
}

export const Marker: React.FC<google.maps.MarkerOptions> = ({
	infoWindowRef,
	...options
}: MarkerProps) => {
	const [marker, setMarker] = React.useState<google.maps.Marker>()

	const infoWindowContent = `<div >Lerable</div>`

	marker?.addListener('click', () => {
		if (options.map instanceof google.maps.Map) {
			const position = marker.getPosition()
			if (!!position) options.map.panTo(position)
		}

		if (infoWindowRef && infoWindowRef.current) {
			infoWindowRef.current.setContent(infoWindowContent)
			infoWindowRef.current.open({ map: options.map, anchor: marker })
		}
	})
	useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker())
		}

		// remove marker from map on unmount
		return () => {
			if (marker) {
				marker.setMap(null)
			}
		}
	}, [marker])

	useEffect(() => {
		if (marker) {
			marker.setOptions(options)
		}
	}, [marker, options])

	return null
}
