
const request = require("request");

const forecast = require("../data.js/forecast")
const geocode = require("../data.js/geocode")

// const forecast = (latitude , longitude , callback ) => {
// const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+latitude+","+longitude+".json?access_token=pk.eyJ1Ijoic2FhcmFhYWRlbGwiLCJhIjoiY2xrYjczZGc0MDF2aDNscGZmMTR4cXNqNCJ9.dQpvJrHSPa5FuzmmrkvPsw";
//  const geocodeUrl = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q="+latitude+","+longitude;
//     request({ url: geocodeUrl, json: true }, (error, response) => {
    

    // console.log(response.body);
    // if (error) {
    //     console.log("low level erorr  connot reatch to the site  ")
    // }
    // else if (response.body.message) {
    //     console.log(response.body.message)
    // }
    // else if (response.body.features.length == 0) {
    //     console.log("unable to find the location ")
    // } else {
    //     const longitude = response.body.features[0].center[0];
    //     const latitude  = response.body.features[0].center[1];
    //     console.log("longitude = " + longitude +  "latitude = " + latitude)
    // }
    
    

//   if (error) {
//          callback("low level erorr connot reatch to the site " , undefined)
//     } else if (response.body.error) {
//         callback(response.body.error.message , undefined )
//     }
//     else if(response.body.features && response.body.features.length === 0 ) {
//        callback("unable to find the location", undefined);
//      }
//     else {
//         const locationName = response.body.location.name;
//         const conditionText = response.body.current.condition.text;
//         callback(undefined,  locationName + "  ,  it is : " + conditionText );
//     }
// })
// }

 
// forecast(30.05, 31.25, (error, data) => {
  
// forecast(29.8719003452398,  26.4941838299718, (error, data) => {
//     console.log("data : " + data);
//     console.log("error : " + error);
// });
 

// ////////////////////////////////////////////////////////////////////////////////////

// const geocodeUrl = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=30.05,31.25";
// request({ url: geocodeUrl, json: true }, (error, response) => {

//   if (error) {
//     console.log("low level erorr  connot reatch to the site  ")
//   }
//   else if (response.body.message) {
//     console.log(response.body.message)
//   }
//   else if (response.body.features.length == 0) {
//     console.log("unable to find the location ")
//   } else {
//     const longitude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log("longitude = " + longitude + "latitude = " + latitude)
//   }
// })

// /////////////////////////

// const geocode = (address, callback) => {
  
//   const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw';

//   request({ url: geocodeUrl, json: true }, (error, response) => {

//     if (error) {
//       callback("low level erorr  connot reatch to the site ", undefined)
//     }
//     else if (response.body.message) {
//       callback(response.body.message, undefined)
//     }
//     else if (response.body.features.length == 0) {
//       callback("unable to find the location ", undefined)
//     } else {
//       callback(undefined, {
//         longitude :response.body.features[0].center[0],
//         latitude : response.body.features[0].center[1]
//     })
  
//   }
     
// })
// }


// geocode("egypt", (error, data) => {
//   console.log("data : " + data);
//   console.log("error : " + error);
  
// })


// process.argv -> single strng
// yargs : { }

// ---------------------------------------------------------------------------

const country = process.argv[2]

geocode( country , (error, data) => {

  console.log("data : " + data);
  console.log("error : " + error);
  
  if (data) {
  
      forecast(data.latitude ,  data.longitude , (error, data) => {
        console.log("data : " + data);
        console.log("error : " + error);
      })
  } else {
    console.log("data entered is an erorr ")
  }

  
  
})


