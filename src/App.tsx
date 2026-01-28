import { Routes, Route } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'
import Index from './components/Index'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}
    >
      <Routes>
        <Route path="/" element={<Index />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
