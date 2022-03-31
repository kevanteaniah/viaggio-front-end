import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, bio, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && bio && email && password && password === passwordConf)
  }

  return (
    
    
				<form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
					<label htmlFor="name" className={styles.label}>Name</label>
					<input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="bio" className={styles.label}>Bio</label>
					<input
          type="text"
          autoComplete="off"
          id="bio"
          value={bio}
          name="bio"
          onChange={handleChange}
        />
        <label htmlFor="name" className={styles.label}>Email</label>
					<input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="name" className={styles.label}>Password</label>
					<input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
					<button disabled={isFormInvalid()} className={styles.button}>
          Sign Up
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
			</div>
				</form>
    
  )
}

export default SignupForm


