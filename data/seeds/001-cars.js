
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN : "3A8FY48B28T179293", Year : 2008, Make : "Chrysler", Model : "PT Cruiser", Transmission : "", Title : "Clear", Miles : ""},
        {VIN : "KM8JU3ACXCU436544", Year : 2012, Make : "Hyundai", Model : "Tucson", Transmission : "Automatic", Title : "Clear", Miles : ""},
        {VIN : "1FTZR45E17PA73792", Year : 2007, Make : "Ford", Model : "Ranger", Transmission : "", Title : "Clear", Miles : "98527"},
        {VIN : "3GCPKSE72DG371608",Year : 2013,Make : "Chevrolet",Model : "Silverado 1500",Transmission : "Automatic",Title : "Clear",Miles : ""},
        {VIN : "WP1AB29P26LA64315",Year : 2006,Make : "Porsche",Model : "Cayenne",Transmission : "Automatic",Title : "Clear",Miles : ""},
        {VIN : "1D7HU18P27J518653",Year : 2007,Make : "Dodge",Model : "Ram 1500",Transmission : "Automatic",Title : "Clear",Miles : ""},
        {VIN : "1GCHK23638F189597",Year : 2008,Make : "Chevrolet",Model : "Silverado 2500HD",Transmission : "Automatic",Title : "Clear",Miles : "78655"},
        {VIN : "5BZAF0AA5DN202187",Year : 2013,Make : "Nissan",Model : "NVP",Transmission : "Automatic",Title : "Clear",Miles : ""},
        {VIN : "1FTPW12596KD94963", Year : 2006, Make : "Ford", Model : "F-150", Transmission : "Automatic", Title : "Clear", Miles : ""},
        {VIN : "2FDKF37H4PCA72693",Year : 1993,Make : "Ford",Model : "F-350",Transmission : "Manual",Title : "Clear",Miles : ""}
      ]);
    });
};
