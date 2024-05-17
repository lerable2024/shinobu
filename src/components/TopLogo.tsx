import { Box, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Imgs: { alt: string; url: string }[] = [
	{
		alt: 'lerable',
		url: 'https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/TopLogo%2FlerableLogoTest.jpeg?alt=media&token=574ad612-d312-43bb-9722-293c9d952986',
	},
	{
		alt: 'lerable2',
		url: 'https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/TopLogo%2FlerableLogoTest.jpeg?alt=media&token=574ad612-d312-43bb-9722-293c9d952986',
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
		autoplaySpeed: 2000,
		arrows: false,
	}
	return (
		<Box component='h1'>
			<Container
				sx={{
					//height: 'calc(100vh - 104px)',
					position: 'relative',
					p: 0,
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
