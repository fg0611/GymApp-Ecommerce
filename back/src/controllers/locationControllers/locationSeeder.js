const { Location } = require("../../db");
const { locations } = require("../../../seeds");

async function locationsSeeder(req, res, next) {
  //body comes with {description: string, lat: float & lng: float}
  try {
    if (locations?.length) {
      
      locations.forEach(async ({description,lat,lng,images}) => {
        await Location.findOrCreate({
          where: {description},
          defaults: {description,lat, lng, images}
        });
      });
    }
    console.log("DB precargada con locations seeds");
  } catch (error) {
    console.log("Error con locations seeds");
  }
}

module.exports = {
  locationsSeeder,
};
