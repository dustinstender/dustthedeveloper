# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Adding Projects"
Project.destroy_all
Project.create!([{ title: 'Drug Dealer', description:
'Drug Dealer is a prototype web application meant for a mobile device so it is only mobile responsive. I created this application with a team of three other students from Le Wagon as our end of the bootcamp project. Our database only has pharmacies located in Paris, France.',
url: 'https://www.drug-dealer.one',
image: 'drug-delaer.png',
photo: File.new("app/assets/images/drug-delaer.png") },
{ title: 'Rent a Creature', description:
'Rent a Creature is a fictional marketplace for magical creature rentals. Our database only has magical creatures living in Paris, France.',
url: 'https://rentacreature-dustinstender.herokuapp.com/',
image: 'rent-a-creature.png',
photo: File.new("app/assets/images/rent-a-creature.png") }
])
