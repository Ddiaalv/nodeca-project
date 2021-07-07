import { useDispatch, useSelector } from 'react-redux'
import Layout from '../src/components/Layout/Layout'

const IndexPage = () => {
  const notes = useSelector((state) => state)
  const dispatch = useDispatch()
  const sendValue = () => {
    dispatch({ type: 'UPDATE_STATE', payload: 'valor desde el index' })
  }
  return (
    <Layout title="Next.js + TypeScript template">
      <h1>Next.js + TypeScript template</h1>
      <p>{notes}</p>
      <button onClick={sendValue}>nuevo valor</button>
    </Layout>
  )
}

export default IndexPage
