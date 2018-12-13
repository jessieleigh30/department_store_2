5.times do
  d = Department.create(
    name: Faker::Commerce.department
  )

10.times do
  i = d.items.create(
  name: Faker::Commerce.product_name,
  description: Faker::HarryPotter.quote,
  price: Faker::Number.number(2)
  )

  10.times do
    i.reviews.create(
      title: Faker::Book.title,
      body: Faker::GreekPhilosophers.quote,
      rating: Faker::Number.between(1, 5),
      author: Faker::HowIMetYourMother.character
    )
  end
  end
end

puts "succesfully seeded"
