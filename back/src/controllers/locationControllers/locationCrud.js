const { Location } = require("../../db");

async function getLocation(req, res, next) {
  const { id } = req.params;
  if (id) {
    try {
      const location = await Location.findByPk(id);
      if (location) {
        res.json(location);
      }
      return res.json({ message: "No existe la sucursal" });
    } catch (error) {
      next(error);
    }
  }
  try {
    const locations = await Location.findAll();
    if (locations) {
      return res.json(locations);
    }
    res.json({ message: "No hay sucursales cargadas" });
  } catch (error) {
    next(error);
  }
}

async function createLocation(req, res, next) {
  //body comes with {description: string, lat: float & lng: float}
  try {
    await Location.create(req.body);
    return res.json({ message: "Sucursal Agregada" });
  } catch (error) {
    next(error);
  }
}

async function deleteLocation(req, res, next) {
  const { id } = req.params;

  try {
    if (id) {
      await Location.destroy({ where: { id } });
      return res.json({ message: "Sucursal eliminada" });
    }
  } catch (error) {
    next(error);
  }
}

async function updateLocation(req, res, next) {
  const { id } = req.params;
  try {
    if (id && req.body) {
      const location = await Location.findByPk(id);
      await location.update(req.body);
      return res.json({ message: "Sucursal actualizada" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLocation,
  createLocation,
  deleteLocation,
  updateLocation,
};
