import { useState } from 'react'

function Login() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage(
      'The form is ready, but sign-in needs to be connected to an authentication service.',
    )
  }

  return (
    <section className="login-panel" id="login" aria-labelledby="login-title">
      <p className="panel-eyebrow">Your reading starts here</p>
      <h2 id="login-title">User login</h2>
      <p className="panel-description">
        Enter your account details to continue.
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">User name</label>
        <input
          autoComplete="username"
          id="username"
          name="username"
          placeholder="Enter your user name"
          required
          type="text"
        />

        <label htmlFor="password">Password</label>
        <input
          autoComplete="current-password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          type="password"
        />

        <button type="submit">Log in</button>
        <p className="login-message" role="status" aria-live="polite">
          {message}
        </p>
      </form>
    </section>
  )
}

export default Login
