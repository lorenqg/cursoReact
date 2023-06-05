import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
const App = () => {
  return (
    <section className="App">
      <TwitterFollowCard userName="reddit.com" isFollowing>
        Reddit
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev" isFollowing={false}>
        Miguel Angel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName="github" isFollowing>
        GitHub
      </TwitterFollowCard>
    </section>
  )
}

export default App
