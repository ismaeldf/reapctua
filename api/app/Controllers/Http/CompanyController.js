'use strict'

const Company = use('App/Models/Company');

class CompanyController {
  async store({ request }) {
    return await Company.create(request.body);
  }

  async index() {
    return await Company.all();
  }

  async update({ request, params }) {
    let company = await Company.findOrFail(params.id)
    company.merge(request.body);

    return await company.save();
  }

  async destroy({ params }) {
    let company = await Company.find(params.id);
    return await company.delete();
  }
}

module.exports = CompanyController
