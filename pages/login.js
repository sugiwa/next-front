import {useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { 
  Container, Button, Box,
  CssBaseline, Grid,
  Input, TextField,
  Toolbar, IconButton
} from '@material-ui/core'
import axios from 'axios'
import Layout from '../components/Layout'

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const createUser = (event) => {
    console.log("イベント発火")
    axios.post('http://localhost:3001/api/v1/auth/sign_in',
      {
        email: email,
        password: password,
      }
    ).then(response => {
      console.log("registration response", response)
      if(response.status === 200){
        router.push({pathname: '/mypage', query: {uid: response.data.data.id}})
      }
      
    }).catch(error => {
      console.log("registration error", error)
    }).catch(data =>  {
      console.log(data)
    })
    event.preventDefault()
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>

      <Layout>
        <Container>
          <CssBaseline />
          <form onSubmit={createUser}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='email'
                  variant='filled'
                  onChange={event => setEmail(event.target.value)}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='password'
                  variant='filled'
                  onChange={event => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <Button             
                  type='submit'
                  variant="contained"
                  color="primary"
                >
                  sign in
                </Button>
              </Grid>

            </Grid>
          </form>

          <main className={styles.main}>
            <Link href='/mypage'>
              <h2>新規ページ</h2>
            </Link>
          </main>
        </Container>
      </Layout>
    </div>
  )
}
