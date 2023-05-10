import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  QueryClientProvider,QueryClient
} from '@tanstack/react-query'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useMode } from './theme/theme.ts'

const theme = useMode();
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchInterval:false,
      refetchIntervalInBackground:false
    }
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </QueryClientProvider>
      </ThemeProvider>

)
