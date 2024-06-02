import { Typography } from '@mui/material'

interface subtitleProps {
	subtitle: string
}

export default function Subtitle(props: subtitleProps) {
	return (
		<Typography
			variant='h6'
			align='left'
			sx={{ my: 2, px: 3, color: '#FFF', backgroundColor: '#9DC1BD' }}
		>
			{props.subtitle}
		</Typography>
	)
}
