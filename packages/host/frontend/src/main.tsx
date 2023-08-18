import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router'
import { ThemeProvider } from './theme'
import { ApiProvider } from './api'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ApiProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>,
)