import { useState } from 'react'

function Register() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password !== confirmPassword) {
      setMessage('The passwords do not match. Please try again.')
      return
    }

    setMessage(
      'The form is ready, but creating an account needs to be connected to a registration service.',
    )
  }

  return (
    <section
      className="login-panel registration-panel"
      id="register"
      aria-labelledby="register-title"
    >
      <p className="panel-eyebrow">Join our reading community</p>
      <h2 id="register-title">Create a user account</h2>
      <p className="panel-description">
        Enter your details to register for the bookstore.
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="register-name">Full name</label>
        <input
          autoComplete="name"
          id="register-name"
          name="name"
          placeholder="Enter your full name"
          required
          type="text"
        />

        <label htmlFor="register-email">Email address</label>
        <input
          autoComplete="email"
          id="register-email"
          name="email"
          placeholder="Enter your email address"
          required
          type="email"
        />

        <label htmlFor="register-username">User name</label>
        <input
          autoComplete="username"
          id="register-username"
          name="username"
          placeholder="Choose a user name"
          required
          type="text"
        />

        <label htmlFor="register-password">Password</label>
        <input
          autoComplete="new-password"
          id="register-password"
          name="password"
          minLength={8}
          placeholder="Create a password (at least 8 characters)"
          required
          type="password"
        />

        <label htmlFor="confirm-password">Confirm password</label>
        <input
          autoComplete="new-password"
          id="confirm-password"
          name="confirmPassword"
          minLength={8}
          placeholder="Enter your password again"
          required
          type="password"
        />

        <button type="submit">Create account</button>
        <p className="login-message" role="status" aria-live="polite">
          {message}
        </p>
      </form>
    </section>
  )
}

export default Register
