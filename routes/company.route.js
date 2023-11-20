const express = require('express')
const { Company } = require('../models/company.schema')

const router = express.Router()

router.route("/")
    .get(async (req, res) => {
        try {

            const response = await Company.find()
            res.status(200).json({
                success: true,
                data: response
            })

        } catch (error) {
            res.status(500).json({
                success: false,
                data: error
            })
            console.log(error)
        }
    })
// .post(async (req, res) => {
//     const newCompany = new Company({ company_name: "" })
//     const response = await newCompany.save()
//     console.log(response)
//     res.send({ res: response })
// })



module.exports = router