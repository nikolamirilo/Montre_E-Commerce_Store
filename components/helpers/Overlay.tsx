const Overlay = ({ emoji }: { emoji: string }) => {
  return (
    <div className="snowflakes" aria-hidden="true">
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
      <div className="snowflake">{emoji}</div>
    </div>
  )
}

export default Overlay
