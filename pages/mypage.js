import {useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import axios from 'axios'
import {Button} from '@material-ui/core'
import Layout from '../components/Layout'

export default function Mypage() {
  const [user, setUser] = useState([]);

  const router = useRouter();
  const [uid, setUid] = useState(router.query.uid);

  const getUser = () => {
    console.log("イベント発火")
    axios.get('http://localhost:3001/api/v1/users',
        {
          params: {
            uid: uid,
          }
        }
      )
      .then(response => {
        console.log(response.status)
        setUser(response.data);
        console.log(user)
      })
      .catch(error => {
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
      </Head>

      <Layout>
        <main>
            <h2>新規ページ</h2>
            <table>
              <thead>
                <td>名前</td>
                <td>メールアドレス</td>
              </thead>
              <tbody>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tbody>
            </table>
            <br />
            <Button onClick={getUser}>Get User</Button>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.password}</div>
        </main>
      </Layout>
    </div>
  )
}
