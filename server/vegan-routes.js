const express = require('express')
const fs = require('fs').promises
const veganRouter = express.Router()

veganRouter.get('/:id', async(req,res) => {
    try{
        const data = await fs.readFile('server/data/data.json', 'utf-8')
        const cuisinesData = JSON.parse(data)
        const veganData = cuisinesData.cuisines.find((cuisine) => {
            if(cuisine.hasOwnProperty('vegan')) {
                return cuisine.vegan[Number(req.params.id) - 1]             
            }
        })
        const finalData = veganData.vegan[Number(req.params.id) - 1];
        res.render('restaurant', finalData)
        }catch (err){
        console.log(err)
    }
})
module.exports = veganRouter