const nodeGeocoder = require('node-geocoder');

module.getByName = (req, res, next) => {
  try {
    let options ={provider:'openstreetmap'};
    let geoCoder = nodeGeocoder(options);

    geoCoder.geocode('Luray Caverns')
        .then((res)=> {
          console.log(res);
        })
        .catch((err)=> {
          console.log(err);
        });

    // Reverse Geocode
    geoCoder.reverse({lat:38.66, lon:-78.43})
        .then((res)=> {
          console.log(res);
        })
        .catch((err)=> {
          console.log(err);
        });
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};

module.getByCoodinates = (req, res, next) => {
  try {
    let options ={provider:'openstreetmap'};
    let geoCoder = nodeGeocoder(options);

    geoCoder.geocode('Luray Caverns')
        .then((res)=> {
          console.log(res);
        })
        .catch((err)=> {
          console.log(err);
        });

    // Reverse Geocode
    geoCoder.reverse({lat:38.66, lon:-78.43})
        .then((res)=> {
          console.log(res);
        })
        .catch((err)=> {
          console.log(err);
        });
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};