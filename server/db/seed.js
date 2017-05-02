// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require('bluebird')
const db = require('./index.js')
const Destination = db.models.destination
const Hotel = db.models.hotel
const Restaurant = db.models.restaurant
const Activity = db.models.activity

console.log(db.models.hotel)
const hotels = [
  {name: "Andaz Wall Street", address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.007624], num_stars: 4, amenities: "Pool, Free Wi-Fi" },
  {name: "Hotel Mulberry", address: "52 Mulberry St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715317, -73.999542], num_stars: 4.5, amenities: "Free Wi-Fi" },
  {name: "The Ritz-Carlton New York, Battery Park", address: "Two West Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705417, -74.017241], num_stars: 4.5, amenities: "24 hour Gym, Paid Wi-Fi" },
  {name: "Wall Street Inn", address: "9 S William St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.704581, -74.010273], num_stars: 4, amenities: "Free Wi-Fi" },
  {name: "Smyth TriBeCa", address: "85 West Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715076, -74.009301], num_stars: 3.5, amenities: "24 hour Gym" },
  {name: "Double Tree", address: "8 Stone St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.703961, -74.012350], num_stars: 3.5, amenities: "24 hour Gym" },
  {name: "Hotel 91", address: "91 E Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.713427, -73.993624], num_stars: 3.5, amenities: "Free Wi-Fi" },
  {name: "Conrad New York Hotel", address: "102 N End Ave", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714985, -74.015841], num_stars: 3.5, amenities: "Paid Wi-Fi, Dogs Allowed" },
  {name: "Millenium Hilton Hotel", address: "55 Church St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.711597, -74.010392], num_stars: 3.5, amenities: "Paid Wi-Fi" },
  {name: "US Pacific Hotel", address: "106 Bowery", city: "New York", state: "NY", phone: "123-456-7890", location: [40.717873, -73.995231], num_stars: 2, amenities: "Accepts Credit Cards" },
  {name: "Gild Hall, a Thompson Hotel", address: "15 Gold Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.707894, -74.007108], num_stars: 4, amenities: "Paid Wi-Fi" },
  {name: "W New York", address: "123 Washington Street", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709102, -74.013997], num_stars: 3.5, amenities: "Pool, 24 hour Gym, Paid Wi-Fi" },
  {name: "New York Marriott Downtown", address: "85 W St at Albany St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.731131, -73.989568], num_stars: 3.5, amenities: "24 hour Gym, Paid Wi-Fi" },
  {name: "Cosmopolitan Hotel", address: "95 W Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715681, -74.008922], num_stars: 3.5, amenities: "Free Wif-Fi" },
  {name: "Club Quarters", address: "140 Washington St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709630, -74.013940], num_stars: 4, amenities: "Free Wif-Fi" }
]
const restaurants = [
  {name: "Bouley", address: "75 Wall St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.705137, -74.013940], cuisine: "French", price: 4},
  {name: "Marc Forgione", address: "134 Reade St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716526, -74.009567], cuisine: "Seafood", price: 3},
  {name: "Tamarind", address: "99 Hudson St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.718977, -74.008929], cuisine: "Indian", price: 3},
  {name: "Hop Lee Restaurant", address: "16 Mott St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714230, -73.998509], cuisine: "Chinese", price: 2},
  {name: "Jungsik", address: "2 Harrison St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.718679, -74.008900], cuisine: "Korean", price: 4},
  {name: "The Capital Grille", address: "120 Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.708475, -74.010846], cuisine: "Steakhouses, American", price: 4},
  {name: "Pylos", address: "128 E 7th St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.726096, -73.984152], cuisine: "Greek", price: 3},
  {name: "Joe's Shanghai", address: "9 Pell St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.714601, -73.997761], cuisine: "Shanghainese, Dim Sum", price: 2},
  {name: "Cafe Katja", address: "79 Orchard St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.717719, -73.990565], cuisine: "German, Austrian", price: 2},
  {name: "Rosanjin", address: "141 Duane St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716403, -74.007724], cuisine: "Japanese", price: 3},
  {name: "Kittichai", address: "60 Thompson St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.724014, -74.003242], cuisine: "Thai", price: 4},
  {name: "Bianca Restaurant", address: "5 Bleecker St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.725495, -73.992662], cuisine: "Italian", price: 2},
  {name: "Rayuela", address: "165 Allen St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.721266, -73.989756], cuisine: "Spanish, Latin American", price: 3},
  {name: "Mas Farmhouse", address: "39 Downing St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729269, -74.003875], cuisine: "New American, French", price: 4},
  {name: "Xe Lua", address: "86 Mulberry St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716544, -73.998626], cuisine: "Vietnamese", price: 1}
]
const activities = [
  {name: "Mahayana Temple Buddhist Association", address: "133 Canal St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.716291, -73.995315], age_range: "All" },
  {name: "South Street Seaport", address: "19 Fulton St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.707119, -74.003602], age_range: "All" },
  {name: "Ground Zero", address: "1 Liberty Plz Lbby 2", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709329, -74.013120], age_range: "All" },
  {name: "National September 11th Memorial & Museum", address: "1 Albany St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.709189, -74.013157], age_range: "All" },
  {name: "Battery Park", address: "State St & Battery Pl", city: "New York", state: "NY", phone: "123-456-7890", location: [40.704531, -74.014334], age_range: "All" },
  {name: "Staten Island Ferry Whitehall Terminal", address: "4 S St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729125, -73.989650], age_range: "All" },
  {name: "Chinatown Ice Cream Factory", address: "65 Bayard St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.715323, -73.998190], age_range: "All" },
  {name: "Blue Man Group", address: "434 Lafayette St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.729373, -73.992104], age_range: "All" },
  {name: "Scott's Pizza Tours", address: "244 5th Ave", city: "New York", state: "NY", phone: "123-456-7890", location: [40.744610, -73.987708], age_range: "All" },
  {name: "Apple Store", address: "103 Prince St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.724918, -73.999144], age_range: "All" },
  {name: "Brooklyn Bridge Park", address: "Pier 1", city: "New York", state: "NY", phone: "123-456-7890", location: [40.702225, -73.996563], age_range: "All" },
  {name: "Ellis Island Immigration Museum", address: "Ellis Island", city: "New York", state: "NY", phone: "123-456-7890", location: [40.699297, -74.040317], age_range: "All" },
  {name: "Washington Square Park", address: "1 Washington Sq E", city: "New York", state: "NY", phone: "123-456-7890", location: [40.732204, -73.998649], age_range: "All" },
  {name: "Union Square Holiday Market", address: "Union Sq & W 14th St", city: "New York", state: "NY", phone: "123-456-7890", location: [40.733615, -73.987995], age_range: "All" },
  {name: "Strand Bookstore", address: "828 Broadway", city: "New York", state: "NY", phone: "123-456-7890", location: [40.733274, -73.990870], age_range: "All" }
]
const destinations = [
  { name: "New York", location: [40.709102, -74.013997] }
]

db.sync({force: true})
.then(() => {
  console.log("Dropped old data, now inserting data")
  const creatingHotels = Promise.map(hotels, (hotel) => {
    return Hotel.create(hotel, { include: [Destination] })
  })
  const creatingRestaurants = Promise.map(restaurants, (restaurant) => {
    return Restaurant.create(restaurant, { include: [Destination] })
  })
  const creatingActivities = Promise.map(activities, (activity) => {
    return Activity.create(activity, { include: [Destination] })
  })
  const creatingDestinations = Promise.map(destinations, (destination) => {
    return Destination.create(destination)
  })
  return Promise.all([creatingHotels, creatingRestaurants, creatingActivities, creatingDestinations])
})
.then(([hotels, restaurants, activities]) => {
  console.log("Setting destination relationships")
  const allData = hotels.concat(restaurants).concat(activities)
  let promises = []
  allData.forEach((data) => {
    data.setDestination(1)
    promises.push(data.save())
  })
  return Promise.all(promises)
})
.then(() => {
  console.log('Finished inserting data')
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack)
})
.finally(function () {
  db.close() // creates but does not return a promise
  return null // stops bluebird from complaining about un-returned promise
})
