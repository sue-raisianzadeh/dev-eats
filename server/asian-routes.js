const express = require('express')
const fs = require('fs').promises
const asianRouter = express.Router()
const fs = require('fs').promises

asianRouter.get('/:id', async(req,res) => {
    try{
        const data = await fs.readFile('server/data/data.json', 'utf-8')
        const cuisinesData = JSON.parse(data)
        const asianData = cuisinesData.cuisines.find((cuisine) => {
            if(cuisine.hasOwnProperty('asian')) {
                return cuisine.asian[Number(req.params.id) - 1]             
            }
        })
        const finalData = asianData.asian[Number(req.params.id) - 1];
        res.render('restaurant', finalData)
        }catch (err){
        console.log(err)
    }
})

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
