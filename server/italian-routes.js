const express = require('express')
const fs = require('fs').promises
const italianRouter = express.Router()

italianRouter.get('/:id', async(req,res) => {
    try{
        const data = await fs.readFile('server/data/data.json', 'utf-8')
        const cuisinesData = JSON.parse(data)
        const italianData = cuisinesData.cuisines.find((cuisine) => {
            if(cuisine.hasOwnProperty('italian')) {
                return cuisine.italian[Number(req.params.id) - 1]             
            }
        })
        const finalData = italianData.italian[Number(req.params.id) - 1];
        res.render('restaurant', finalData)
        }catch (err){
        console.log(err)
    }
})


module.exports = italianRouter