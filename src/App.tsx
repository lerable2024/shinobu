import { Container, Box } from '@mui/material'
import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import TopLogo from './components/TopLogo'
import Concept from './components/Concept'
import Treatment from './components/Treatment'
import SetMenu from './components/SetMenu'
import Access from './components/Access'
import ButtonGroup from './components/ButtonGroup'

const theme = createTheme({
	typography: {
		fontFamily: ['Klee One, cursive'].join(','),
		fontSize: 12,
	},
})

const buttonPattern: { title: string; link: string }[] = [
	{
		title: 'ご予約',
		link: 'https://book.squareup.com/appointments/25amlgahuztd30/location/LRMTT04YVDV2P/services?buttonTextColor=000000&color=76a753&referrer=so&team_member_id=TMwfXpqbOBUpH_8d',
	},
	{ title: 'お問い合わせ', link: 'https://lin.ee/C29i43R' },
	{
		title: 'ギフトカード',
		link: 'https://app.squareup.com/gift/ML421KQ15HXX8/order',
	},
]

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Container maxWidth='sm' sx={{ p: 0, m: 0 }}>
					<Box>
						<TopLogo />
					</Box>
					<Box>
						<Concept />
					</Box>
					<Box>
						<Treatment />
					</Box>
					<Box>
						<SetMenu />
					</Box>
					<Box sx={{ mb: 6 }}>
						<Access />
					</Box>
					<Container
						maxWidth='sm'
						sx={{ position: 'fixed', bottom: 0, width: '100%' }}
					>
						<ButtonGroup pattern={buttonPattern} />
					</Container>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
