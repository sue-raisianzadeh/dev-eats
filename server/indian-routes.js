const express = require('express')
const fs = require('fs').promises
const indianRouter = express.Router()

indianRouter.get('/:id', async(req,res) => {
    try{
        const data = await fs.readFile('server/data/data.json', 'utf-8')
        const cuisinesData = JSON.parse(data)
        const indianData = cuisinesData.cuisines.find((cuisine) => {
            if(cuisine.hasOwnProperty('indian')) {
                return cuisine.indian[Number(req.params.id) - 1]             
            }
        })
        const finalData = indianData.indian[Number(req.params.id) - 1];
        res.render('restaurant', finalData)
        }catch (err){
        console.log(err)
    }
})

module.exports = indianRouter