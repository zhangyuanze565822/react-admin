import ThemeRoutes from './router'
import { store } from '@/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ThemeRoutes />
          <Toaster />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
