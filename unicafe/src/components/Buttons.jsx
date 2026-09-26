import { useFeedbackActions } from '../store'

const Buttons = () => {
  const { incrementGood, incrementNeutral, incrementBad, reset } = useFeedbackActions()

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={incrementGood}>good</button>
      <button onClick={incrementNeutral}>neutral</button>
      <button onClick={incrementBad}>bad</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Buttons
