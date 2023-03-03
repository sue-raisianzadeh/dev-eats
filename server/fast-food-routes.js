const express = require('express')
const fs = require('fs').promises
const fastFoodRouter = express.Router()
const data = 'server/data/data.json'

fastFoodRouter.get('/:id', async (req, res) => {
  try {
    const data = await fs.readFile('server/data/data.json', 'utf-8')
    const cuisinesData = JSON.parse(data)
    const fastFoodData = cuisinesData.cuisines.filter((cuisine) => {
      if (cuisine.hasOwnProperty('fastFood')) {
        return cuisine.fastFood[Number(req.params.id) - 1]
      }
    })
    console.log('fastFoodData: ', fastFoodData)
    // .cuisines.fastFood
    // .find(
    //     (item) => item.id === Number(req.params.id))
    // console.log(fastFoodData);
    // res.render()
  } catch (err) {
    console.log(err)
  }
})

module.exports = fastFoodRouter
