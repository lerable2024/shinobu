import { Container, Box } from '@mui/material'
import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import TopLogo from './components/TopLogo'
import Concept from './components/Concept'
import Treatment from './components/Treatment'
import SetMenu from './components/SetMenu'

const theme = createTheme({
	typography: {
		fontFamily: ['Klee One, cursive'].join(','),
		fontSize: 12,
	},
})

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
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
