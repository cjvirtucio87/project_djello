# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Destroying boards.."
Board.destroy_all
puts "Done!"

puts "Creating boards.."
10.times do |n|
  Board.create!({
      title: Faker::App.name,
      description: Faker::Lorem.paragraph(1)
    })
end
puts "Done!"
