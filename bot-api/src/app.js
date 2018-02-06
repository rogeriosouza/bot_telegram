const express = require('express')
const app = express()
const port = 3002
const allEvents = [
  {
    name: 'linkedin',
    data: ['24/04/2017', '25/04/2017', '26/04/2017'],
    link: 'http://linkedin/in/rogeriosouza'
  },
  {
    name: 'github',
    data: ['01/07/2017'],
    link: 'http://github.com/rogeriosouza'
  },
  {
    name: 'facebook',
    data: ['16/07/2017'],
    link: 'https://www.facebook.com/rogeriofsbh'
  }
]
app.get('/allevents', (req, res) => res.json(allEvents))
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log('To shutdown the server: ctrl + c')
})