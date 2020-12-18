import React, { useState } from 'react'
import data from './text'

function App() {

  const [ count, setCount ] = useState(0)
  const [ text, setText ] = useState([])

  const generateLorem = (e) => {
    e.preventDefault()
    let num = parseInt(count)
    if(num <= 0 ) num = 1
    if(num > data.length ) num = data.length
    setText(data.slice(0, num))
  }

  return (
      <section className='section-center'>
        <h3>Generate your Lorem Paragraph</h3>
        <form className='lorem-form' onSubmit={(e) => generateLorem(e)}>
          <label htmlFor="amount">Number of Paragraph/s:</label>
          <input type="number" name='amount' id='amount' value={count} onChange={(e)=> setCount(e.target.value)}/>
          <button type='submit' className='btn'>generate</button>
        </form>
        <article className='lorem-text'>
          {
            text.map((p, index) => {
              return <p key={index}>
              {p}
              </p>
            })
          }
        </article>
      </section>

      );
}

export default App;
