const Categories = require('../models/categories.model');

class categoriesServices {
    static async create(category){
        try {
            const result = await Categories.create(category);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async delete(id){
        try {
            const result = await Categories.destroy({where: {id}})
        } catch (error) {
            
        }
    }
}

module.exports = categoriesServices;
