import { Box, Typography } from '@mui/material'
import Subtitle from './SubTitle'
import Link from '@mui/material/Link'

export default function Access() {
	return (
		<>
			<Subtitle subtitle='Information' />
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
				<Link href='https://www.instagram.com/lerable_2024?igsh=MWI3Zmp1ZWl0enkyag%3D%3D&utm_source=qr'>
					<Typography variant='body2' align='left' sx={{ my: 2 }}>
						Instagram:@lerable_2024
					</Typography>
				</Link>
				<Link href='https://lin.ee/C29i43R'>
					<Typography variant='body2' align='left' sx={{ my: 2 }}>
						Line:お問い合わせ、友達登録はこちらから
					</Typography>
				</Link>
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
		</>
	)
}
