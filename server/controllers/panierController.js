const { Panier } = require('../models');
const { sequelize } = require('../models/index');


exports.getAll=async () => {
  const sql = 'SELECT * FROM `paniers`';
  const results =await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT } );
       return results;
}
exports.delete=async (id) => {
    const sql = 'DELETE FROM `paniers` WHERE id = ?';
    const results =await sequelize.query(sql, {replacements: [id],type: sequelize.QueryTypes.RAW } );
         return results;
  }
exports.update=async (id, paniers) => {
    const sql = 'UPDATE `paniers` SET quantity = ? WHERE id = ?';
    const results =await sequelize.query(sql,{replacements: [paniers.quantity,id],  type: sequelize.QueryTypes.UPDATE}   );
         return results;
  }