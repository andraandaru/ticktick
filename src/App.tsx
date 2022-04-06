import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NotFoundPage from "./pages/404"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import TicketDetailPage from "./pages/TicketDetailPage"
import { AuthProvider } from "./providers/AuthProvider"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket/:ticketId" element={<TicketDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </div>
  )
}

export default App
