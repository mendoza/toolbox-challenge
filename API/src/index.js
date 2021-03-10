const express = require('express')
const body = require('body-parser')

const PORT = 3001
const app = express()
app.use(body.urlencoded({ extended: true }))
app.use(body.json())

app.get('/iecho', (req, res) => {
  const { text } = req.query
  if (text) {
    const cleanedText = text.trim().toLowerCase()
    const flipped = cleanedText.split('').reverse().join('')
    res
      .status(200)
      .json({ text: flipped, palindrome: cleanedText === flipped })
  } else {
    res.status(400).json({ error: 'no text' })
  }
})

app.listen(PORT, () => {
  console.log(`Starting server on port: ${PORT}`)
})
