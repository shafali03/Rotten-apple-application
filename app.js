const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.render('home', { msg: 'Rotten Apples' })
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})

var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


let reviews = [
  { title: "Great Review", movieTitle: "Batman II" },
  { title: "Awesome Movies", movieTitle: "Titanic" }
]

// index
app.get('/reviews', (req, res) => {
  res.render('reviews-index', { reviews: reviews })
})

