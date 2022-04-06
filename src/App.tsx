import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/auth"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import TicketDetailPage from "./pages/TicketDetailPage"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket/:ticketId" element={<TicketDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<>404 Not Found</>} />
        </Routes>
      </AuthProvider>
      <ToastContainer />
    </div>
  )
}

export default App
