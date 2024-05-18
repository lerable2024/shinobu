import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Link from '@mui/material/Link'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles'

interface MyTopicsProps {
	pattern: { title: string; link: string }[]
}

export default function ButtonGroup({ pattern }: MyTopicsProps) {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#DCBC71',
			},
		},
		typography: {
			fontFamily: 'Klee One, cursive',
		},
	})
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box sx={{ textAlign: 'center', p: 2 }}>
					<Grid container spacing={2}>
						{pattern.map((contents) => (
							<Grid xs={6}>
								<Link href={contents.link}>
									<Button variant='contained' color='primary' fullWidth>
										<Typography
											variant='body1'
											sx={{
												color: '#5F6527',
												m: 1,
											}}
										>
											{contents.title}
										</Typography>
									</Button>
								</Link>
							</Grid>
						))}
					</Grid>
				</Box>
			</ThemeProvider>
		</>
	)
}
