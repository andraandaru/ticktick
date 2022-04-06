import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import TicketDetailPage from "./pages/TicketDetailPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket">
          <Route path=":ticketId" element={<TicketDetailPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </div>
  )
}

export default App
