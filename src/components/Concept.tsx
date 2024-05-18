import { Box, Typography } from '@mui/material'

export default function Concept() {
	return (
		<Box sx={{ color: '#5F6527' }}>
			<Typography variant='h6' lineHeight={2} sx={{ mb: 6 }}>
				オーダーメイドロン
				<br />
				Le'rableのこだわり
			</Typography>

			<Typography variant='body1' lineHeight={2} sx={{ mb: 6 }}>
				Le'rable(レラブル）は
				<br />
				一人一人に合わせた薬草やハーブを使用した施術で
				<br />
				皆様の温活・妊活・子宮管理をサポートします。
			</Typography>
			<Typography variant='body1' lineHeight={2} sx={{ mb: 6 }}>
				Le'rableとは、フランス語で楓の意
				<br />
				楓には美しい変化という花言葉があります。
			</Typography>
			<Typography variant='body1' lineHeight={2} sx={{ mb: 6 }}>
				当店の施術を通して、
				<br /> 皆様自身が身体を労り・癒し・愛でることで
				<br />
				皆様の心や体に美しい変化もたらします
			</Typography>
			<Typography variant='body1' lineHeight={2} sx={{ mb: 6 }}>
				ハーブの良い香りと共に「美しい変化」を
				<br />
				五感でしっかり感じ取ってください。
			</Typography>
		</Box>
	)
}
