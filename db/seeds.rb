# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.create(description:"Don't be a creeper", lat:37.747745, lng:-122.438512)
Bench.create(description:"Another coast, another Sunset...", lat:37.751886, lng:-122.485676)
Bench.create(description:"This one is completely random", lat:Math.floor(Math.random() * 38) + 32, lng:Math.floor(Math.random() * -123) + 121)
