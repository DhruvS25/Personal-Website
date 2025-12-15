import { Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import NotFound from './components/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
