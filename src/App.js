
import './App.css'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function App() {
  const [quote, setQuote] = useState({ content: "", author: "" })
  const [bgColor, setBgColor] = useState("#ffffff")
  const [buttonColor, setButtonColor] = useState("#dddddd")

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data))
  }

  useEffect(() => {
    getQuote()
  }, [])

  const handleClick = () => {
    getQuote()
    setBgColor(getRandomColor())
    setButtonColor(getRandomColor())
  }

  const getRandomColor = () => {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <div
      className='App'
      style={{
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Random Quote generator</h1>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "200px",
          width: "50%",
        }}
      >
        <div style={{ padding: "40px" }}>
          <span style={{ color: "rgb(6, 46, 175)" }}>{quote.content}</span> <br />
          <h4 style={{ color: "rgb(6, 46, 175)", float:'right' }}>~{quote.author}</h4>
        </div>
      </div>
      <button
        style={{
          margin: "20px",
          padding: "10px 20px",
          backgroundColor: buttonColor,
          borderRadius: "5px",
          fontSize: "20px",
          cursor: "pointer",
          color: 'white'
        }}
        onClick={handleClick}
      >
        Get quote
      </button>
    </div>
  )
}