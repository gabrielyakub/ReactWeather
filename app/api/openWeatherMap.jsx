// var axios = require('axios');
//
// const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=5abd3f9416685f855ba070d9dd8dd095&units=metric';
// // api key 5abd3f9416685f855ba070d9dd8dd095
// module.exports = {
//   getTemp: function (location) {
//     var encodedLocation = encodeURIComponent(location); // ini encode jadi URI contohnya spasi jadi %20
//     // template string es6, biar bisa masukin var ke string pke ${}
//     var requestUrl = `${OPEN_WEATHER_MAP_URL}$q=${encodedLocation}`;
//
//     // axios pke promise
//     return axios.get(requestUrl).then(function( res){
//       // karena openweathermap APInya agak aneh, jadi harus ttp di cek, karena kadang kalo error malah kosong
//       if(res.data.cod && res.data.message){
//         throw new Error(res.data.message);
//       }else{
//         return res.data.main.temp;
//       }
//     }, function( res){
//       throw new Error(res.data.message);
//     });
//   }
// };
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5abd3f9416685f855ba070d9dd8dd095&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      //debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
