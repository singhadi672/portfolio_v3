const mongoose = require("mongoose");


const CompanySchema = new mongoose.Schema({

    company_name: String,
    start_date: String,
    end_date: String,
    designation: String,
    company_logo: String,
    description: [String]

})

const Company = mongoose.model("Company", CompanySchema)

module.exports = { Company }