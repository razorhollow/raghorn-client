import Logo from '../../assets/branding/raghorn.png'
import Button  from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'

// stylesheets
import styles from './Landing.module.css'

// types


const Landing = (): JSX.Element => {

  return (
    <main className={styles.container}>
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <img src={Logo} alt="Raghorn Logo" />
        <Stack mt={3}>
          <Button variant='contained' sx={{ color: 'text.primary', backgroundColor: 'secondary.main', marginBottom: '20px'}}component={Link} to='/login'>Member Login</Button>
          <Button variant='outlined' sx={{ color: 'text.primary'}}component={Link} to="/signup">Sign Up</Button>
        </Stack>
      </section>
    </main>
  )
}

export default Landing
