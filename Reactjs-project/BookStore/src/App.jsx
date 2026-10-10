import './App.css'
import Adminlogin from './Adminlogin'
import Books from './Books'
import Login from './Login'
import Register from './Register'

function App() {
  return (
    <div className="app" id="home">
      <header className="site-header">
        <p className="site-eyebrow">Welcome to</p>
        <h1 className="site-title">Online Book Store</h1>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#books">Books</a>
          <a href="#login">User Login</a>
          <a href="#register">Register</a>
          <a href="#admin-login">Admin Login</a>
        </nav>
      </header>

      <main className="content">
        <Login />
        <section className="books-panel" id="books" aria-labelledby="books-title">
          <h2 id="books-title">Featured book</h2>
          <Books />
        </section>
        <Adminlogin />
        <Register />
      </main>

      <footer className="site-footer">Online Book Store</footer>
    </div>
  )
}

export default App
