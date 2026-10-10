import { useState } from 'react'

function Adminlogin() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(
      'The form is ready, but administrator sign-in needs to be connected to an authentication service.',
    )
  }

  return (
    <section
      className="login-panel admin-login-panel"
      id="admin-login"
      aria-labelledby="admin-login-title"
    >
      <p className="panel-eyebrow">Bookstore management</p>
      <h2 id="admin-login-title">Admin login</h2>
      <p className="panel-description">
        Sign in with your administrator account to manage the bookstore.
      </p>

      <form className="login-form admin-login-form" onSubmit={handleSubmit}>
        <label htmlFor="admin-username">Admin user name</label>
        <input
          autoComplete="username"
          id="admin-username"
          name="username"
          placeholder="Enter your Admin user name"
          required
          type="text"
        />

        <label htmlFor="admin-password">Password</label>
        <input
          autoComplete="current-password"
          id="admin-password"
          name="password"
          placeholder="Enter your password"
          required
          type="password"
        />

        <button type="submit">Log in as Admin</button>
        <p className="login-message" role="status" aria-live="polite">
          {message}
        </p>
      </form>
    </section>
  )
}

export default Adminlogin
