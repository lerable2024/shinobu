import { Box, Divider, Typography } from '@mui/material'
import Subtitle from './SubTitle'
import Grid from '@mui/material/Unstable_Grid2'

export default function SetMenu() {
	const options: { menu: string; price: string }[] = [
		{
			menu: 'ヨニスチーム延長(10min)',
			price: '550-',
		},
		{ menu: 'フェイシャルケアand石膏パック', price: '3,850-' },
		{ menu: 'コアエナジー', price: '11,000-' },
		{ menu: 'ホットストーン', price: '3,300-' },
	]

	const contents: {
		title: string
		min: string
		menus: string[]
		price: string
	}[] = [
		{
			title: '温活.妊活(骨盤・卵巣・子宮メンテナンス)',
			min: '120min',
			menus: [
				'コアエナジー',
				'ヨニスチーム(30min)',
				'ホットストーン',
				'デトックスドリンク',
			],
			price: '14,300-',
		},
		{
			title: 'ツヤ肌.エイジング美肌セット',
			min: '90min',
			menus: [
				'ヨニスチーム(30min)',
				'フェイシャルケア',
				'石膏パック',
				'デトックスドリンク',
			],
			price: '7,700-',
		},
		{
			title: 'ヨニスチーム.フットケア',
			min: '60min',
			menus: ['ヨニスチーム(30min)', 'フットケア', 'デトックスドリンク'],
			price: '5,500-',
		},
		{
			title: 'スペシャルケア(フルコース)',
			min: '180min',
			menus: [
				'ヨニスチーム(30min)',
				'フェイシャルケア',
				'石膏パック',
				'コアエナジー',
				'ホットストーン',
				'デトックスドリンク',
			],
			price: '7,700-',
		},
	]

	return (
		<>
			<Subtitle subtitle='SetMenu' />
			{contents.map((content) => (
				<Box
					key={content.title}
					sx={{ color: '#5F6527', p: 2, m: 2, border: 'solid 0.5px #9BAC8A' }}
				>
					<Typography variant='body1'>{content.title}</Typography>
					<Typography variant='body1' sx={{ m: 1 }}>
						{content.min}
					</Typography>
					<Grid container spacing={1}>
						<Grid xs={3} sx={{ textAlign: 'right' }}>
							<Box
								component='img'
								src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/setMenu%2Fleaf_left.jpeg?alt=media&token=5f62a5fc-765f-4d3c-a795-98e4129bf09a'
								alt='葉の装飾'
								height='100%'
							/>
						</Grid>
						<Grid xs={6}>
							{content.menus.map((ms) => (
								<Typography variant='body2' key={ms}>
									{ms}
								</Typography>
							))}
						</Grid>
						<Grid xs={3} sx={{ textAlign: 'left' }}>
							<Box
								component='img'
								src='https://firebasestorage.googleapis.com/v0/b/le-rable.appspot.com/o/setMenu%2Fleaf_right.jpeg?alt=media&token=a7141fd6-5070-46ca-8ffa-64ae146da68f'
								alt='葉の装飾'
								height='100%'
							/>
						</Grid>
					</Grid>
				</Box>
			))}
			<Box sx={{ color: '#5F6527', p: 2, m: 2, border: 'solid 0.5px #9BAC8A' }}>
				<Typography variant='body1' sx={{ m: 1 }}>
					オプション
				</Typography>
				{options.map((content) => (
					<Box key={content.menu}>
						<Grid container spacing={0}>
							<Grid xs={8}>
								<Typography variant='body2'>{content.menu}</Typography>
							</Grid>
							<Grid xs={4}>
								<Typography variant='body2'>{content.price}</Typography>
							</Grid>
						</Grid>
						<Divider />
					</Box>
				))}
			</Box>
			<Box sx={{ color: '#5F6527', p: 2, m: 2, border: 'solid 0.5px #9BAC8A' }}>
				<Typography variant='body1' sx={{ m: 1 }}>
					ホームケア
				</Typography>

				<Typography variant='body2'>
					入浴剤オーダーメイド
					<br />
					1pc 350-
					<br />
					5pc 1,650-
					<br />
					10pc 3,000-
				</Typography>
			</Box>
		</>
	)
}
