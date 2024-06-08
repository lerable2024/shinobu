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
					src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/Access%2F%E5%A4%96%E8%A6%B3.jpg?alt=media&token=755f4cba-e274-40c2-8e57-0d240dd2d81b'
					alt='Lerableの外観'
					sx={{ my: 3 }}
				/>
			</Box>
		</>
	)
}
