import { Box, Typography } from '@mui/material'
import Subtitle from './SubTitle'

import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { Map } from './Map'
import { Marker } from './Marker'

const render = (status: Status) => {
	return <h1>{status}</h1>
}

export default function Access() {
	const position: google.maps.LatLngLiteral = {
		lat: 34.62906,
		lng: 135.6083807,
	}
	return (
		<>
			<Subtitle />
			<Box sx={{ mx: 3, color: '#5F6527' }}>
				<Typography variant='body2' align='left' sx={{ my: 2 }}>
					Le'rable
				</Typography>
				<Typography variant='body2' align='left' sx={{ my: 2 }}>
					〒581-0869
				</Typography>
				<Typography variant='body2' align='left' sx={{ my: 2 }}>
					大阪府八尾市桜ヶ丘1-73
					<br />
					カーサレーノ301
				</Typography>
				<Typography variant='body2' align='left' sx={{ my: 2 }}>
					072-200-2290
				</Typography>
				<Typography variant='body2' align='left' sx={{ my: 2 }}>
					Instagram:@
				</Typography>
				<Typography variant='body2' align='left' sx={{ my: 2 }}>
					Line:@
				</Typography>
			</Box>
			<Box sx={{ textAlign: 'right', px: 3 }}>
				<Box
					component='img'
					width='70%'
					src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/TopLogo%2FlerableLogoTest.jpeg?alt=media&token=574ad612-d312-43bb-9722-293c9d952986'
					alt='Lerableの外観'
					sx={{ my: 3 }}
				/>
			</Box>
			<Box sx={{ mt: 1, mb: 3 }}>
				<Wrapper
					apiKey={process.env.REACT_APP_MAPS_JAVASCRIPT_APIKEY}
					render={render}
				>
					<Map
						style={{ width: '95%', aspectRatio: '346/134' }}
						center={position}
						zoom={15}
					>
						<Marker position={position} />
					</Map>
				</Wrapper>
			</Box>
		</>
	)
}
