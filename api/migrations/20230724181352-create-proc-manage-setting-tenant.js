/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires

const fs = require('fs')
const path = require('path')

const mainQuery = fs.readFileSync(
  path.resolve(__dirname, './queries', 'procedures', 'proc_manage_setting_tenant.sql'),
  'utf-8'
)

module.exports = {
  async up(queryInterface) {
    try {
      await queryInterface.sequelize.query(mainQuery, { raw: true })
    } catch (e) {
      console.log(e)
    }
  },
  async down() {
    await queryInterface.sequelize.query('DROP PROCEDURE IF EXISTS proc_manage_setting_tenant')
  }
}
