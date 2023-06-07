import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const App = () => {
  return (
    <section className="App">
      <TwitterFollowCard userName="reddit.com">Reddit</TwitterFollowCard>
      <TwitterFollowCard userName="midudev">Miguel Angel Durán</TwitterFollowCard>
      <TwitterFollowCard userName="github">GitHub</TwitterFollowCard>
    </section>
  )
}

export default App
