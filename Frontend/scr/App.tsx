import { useState, useEffect } from 'react'
import { checkHealth } from './api/health'
import './App.css'

function App() {
  const [backendStatus, setBackendStatus] = useState('checking...')
  const [error, setError] = useState('')

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const health = await checkHealth()
        setBackendStatus(`Connected! Backend is ${health.status}`)
        setError('')
      } catch (err) {
        setBackendStatus('Disconnected')
        setError('Failed to connect to backend')
      }
    }

    checkBackend()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <h1>Student Portal</h1>
        <p>Frontend & Backend Integration</p>
      </header>

      <main className="main">
        <div className="status-card">
          <h2>Backend Status</h2>
          <div className={`status ${backendStatus === 'Disconnected' ? 'error' : 'success'}`}>
            {backendStatus}
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="info-card">
          <h3>API Endpoints Available:</h3>
          <ul>
            <li>/api/auth - Authentication</li>
            <li>/api/students - Student Management</li>
            <li>/api/courses - Course Management</li>
            <li>/api/enrollments - Enrollment Management</li>
            <li>/api/dashboard - Dashboard Data</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Environment Info:</h3>
          <p><strong>Frontend:</strong> http://localhost:5173</p>
          <p><strong>Backend:</strong> http://localhost:5000</p>
          <p><strong>API Base:</strong> http://localhost:5000/api</p>
        </div>
      </main>
    </div>
  )
}

export default App
