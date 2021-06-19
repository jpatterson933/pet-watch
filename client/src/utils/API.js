import axios from "axios";

export default {
  // Gets all users
  getPets: function() {
    return axios.get("/api/pets");
  },
  // Gets the user with the given id
  getPet: function(id) {
    return axios.get("/api/pets/" + id);
  },
  //login route 
  login: function (pet ) {
    return axios.post("/api/login", pet);
  },
  // Deletes the user with the given id
  deletePet: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves a user to the database
  savePet: function(petData) {
    return axios.post("/api/pets", petData);
  },
  updatePet: function(id, petData) {
    return axios.put("/api/pets/" + id, petData);
  },
}
//   //grabs events
//   getEvents: function() {
//     return axios.get("/api/events");
//   },
//   // grabs specific events
//   getEvent: function(id) {
//     return axios.get("/api/events/" + id);
//   },
//   // Deletes the user with the given id
//   deleteEvent: function(id) {
//     return axios.delete("/api/events/" + id);
//   },
//   // Saves a user to the database
//   saveEvent: function(eventData) {
//     return axios.post("/api/events", eventData);
//   }
// }