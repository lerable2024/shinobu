import { Box, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Imgs: { alt: string; url: string }[] = [
	{
		alt: 'lerable',
		url: 'https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/TopLogo%2FLogo_bg.jpg?alt=media&token=6211f5b8-833e-45d2-a54c-98e47a1504c9',
	},
	{
		alt: 'lerable2',
		url: 'https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/TopLogo%2FLogo_bg.jpg?alt=media&token=6211f5b8-833e-45d2-a54c-98e47a1504c9',
	},
]

export default function TopLogo() {
	const settings = {
		dots: false,
		infinite: true,
		fade: true,
		speed: 5000,
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
