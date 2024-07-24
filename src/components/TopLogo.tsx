import { Box, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Imgs: { alt: string; url: string }[] = [
	{
		alt: 'lerable',
		url: 'https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/TopLogo%2FLogo.png?alt=media&token=1eb22589-2c98-4198-a125-1b4aa82ef5d2',
	},
	{
		alt: 'lerable2',
		url: 'https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/TopLogo%2FLogo.png?alt=media&token=1eb22589-2c98-4198-a125-1b4aa82ef5d2',
	},
]

export default function TopLogo() {
	const settings = {
		dots: false,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 20000,
		arrows: false,
	}
	return (
		<Box>
			<Container
				sx={{
					//height: 'calc(100vh - 104px)',
					position: 'relative',
					p: 0,
					m: 0,
					mt: 10,
				}}
			>
				<Slider {...settings} className='top-logos'>
					{Imgs.map((contents) => (
						<Box
							component='img'
							width='100%'
							height='auto'
							src={contents.url}
							alt={contents.alt}
							key={contents.alt}
						/>
					))}
				</Slider>
			</Container>
		</Box>
	)
}
