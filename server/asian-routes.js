const express = require('express')
const asianRouter = express.Router()
const fs = require('fs').promises

asianRouter.get('/', async (req, res) => {
  try {
    const data = await fs.readFile('server/data/data.json', 'utf-8')
    const cuisinesData = JSON.parse(data)
    const asianData = cuisinesData.cuisines.find((cuisine) =>
      cuisine.hasOwnProperty('asian')
    )

    const finalData = asianData.asian
    // res.render('cuisines', finalData)
  } catch (err) {
    console.log(err)
  }
})

asianRouter.get('/:id', async (req, res) => {
  try {
    const data = await fs.readFile('server/data/data.json', 'utf-8')
    const cuisinesData = JSON.parse(data)
    const asianData = cuisinesData.cuisines.find((cuisine) => {
      if (cuisine.hasOwnProperty('asian')) {
        return cuisine.asian[Number(req.params.id) - 1]
      }
    })
    const finalData = asianData.asian[Number(req.params.id) - 1]
    // res.render('restaurant', finalData)
  } catch (err) {
    console.log(err)
  }
})

module.exports = asianRouter
