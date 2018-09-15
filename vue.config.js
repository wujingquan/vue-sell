const mockData = require('./data.json')
const seller = mockData.seller
const goods = mockData.goods
const ratings = mockData.ratings

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
  },
  devServer: {
    before (app) {
      app
        .get('/api/seller', (req, res) => {
          res.json({
            errno: 0,
            data: seller
          })
        })
        .get('/api/goods', (req, res) => {
          res.json({
            errno: 0,
            data: goods
          })
        })
        .get('/api/ratings', (req, res) => {
          res.json({
            errno: 0,
            data: ratings
          })
        })
    }
  }
}