import { Box, Typography } from '@mui/material'
import Subtitle from './SubTitle'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Unstable_Grid2'

export default function Access() {
	return (
		<>
			<Subtitle subtitle='Information' />
			<Box sx={{ mx: 3, color: '#5F6527' }}>
				<Grid container>
					<Grid xs={12}>
						<Typography
							variant='body2'
							align='left'
							sx={{ my: 3 }}
							fontSize={28}
						>
							Le'rable
						</Typography>
					</Grid>
					<Grid xs={1}></Grid>
					<Grid xs={11}>
						<Typography variant='body2' align='left' sx={{ my: 1 }}>
							〒581-0869
							<br />
							大阪府八尾市桜ヶ丘1-73
							<br />
							カーサレーノ301
						</Typography>
						<Link
							href='https://maps.app.goo.gl/piTc6jGWcpP5cyPv6'
							color='#5F6527'
						>
							<Typography
								variant='body2'
								align='left'
								sx={{ my: 1 }}
								fontSize={10}
							>
								地図はこちら
							</Typography>
						</Link>
						<Typography variant='body2' align='left' sx={{ my: 2 }}>
							072-200-2290
						</Typography>

						<Box sx={{ textAlign: 'left' }}>
							<Link href='https://www.instagram.com/lerable_2024?igsh=MWI3Zmp1ZWl0enkyag%3D%3D&utm_source=qr'>
								<Box
									component='img'
									src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/Access%2FInstagram_Glyph_Gradient.png?alt=media&token=3bf04fb8-82b2-4f99-92a2-eafa0aaa3280'
									alt='インスタグラム'
									width='24px'
									sx={{ mr: 2 }}
								/>
							</Link>
							<Link href='https://lin.ee/C29i43R'>
								<Box
									component='img'
									src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/Access%2FLINE_Brand_icon.png?alt=media&token=73eb6e79-4d0e-4976-8bcb-4674af36988f'
									alt='LINE公式アカウント'
									width='24px'
								/>
							</Link>
						</Box>
					</Grid>
				</Grid>
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
