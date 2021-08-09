const { Category } = require("../../db");
const { Op } = require("sequelize");

async function getCategories(_req, res, next) {
  try {
    const categories = await Category.findAll();
    return await res.send(categories);
  } catch (error) {
    next(error);
  }
}

async function getCategory(req, res, next) {
  const { id } = req.params;
  try {
    const category = await Category.findOne({ where: { id } });
    if (category) {
      return res.json(category);
    }
    return await res.send("la categoria no existe");
  } catch (error) {
    next(error);
  }
}

async function createCategory(req, res, next) {
  const { name, image } = req.body;
  try {
    const category = await Category.findOne({ where: { name } });
    if (category) {
      return res.send("la categoria ya existe");
    }
    await Category.create({
      name,
      image,
    });
    return res.send("categoria creada");
  } catch (error) {
    next(error);
  }
}

async function deleteCategory(req, res, next) {
  const { name } = req.params;
  try {
    const category = await Category.destroy({ where: { name } });
    return res.send("categoria eliminada");
  } catch (error) {
    next(error);
  }
}

async function updateCategory(req, res, next) {
  const { id } = req.params;
  const { name, image } = req.body;
  try {
    const category = await Category.findOne({ where: { id } });
    if (category) {
      await category.update({
        name,
        image,
      });
    } else {
      return res.send("la categoria no existe");
    }
    return res.send("categoria actualizada");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
  /*   createCategory,
  deleteCategory,
  updateCategory, */
};
