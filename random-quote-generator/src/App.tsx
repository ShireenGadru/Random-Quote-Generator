import { useState } from 'react'
import './App.scss'

function App() {

  const  [quote, setQuote] =  useState("");
  const  [author, setAuthor] =  useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data?.content);
    setAuthor(data?.author);
  }

  return (
    <div className="Wrapper">
     <h1>Random Quote Generator</h1>
     <button onClick={fetchQuote}> New Quote</button>
     <div className="quote">
      {quote} <div className="author">{author && "-"} {author}</div>
     </div>
    </div>
  )
}

export default App
