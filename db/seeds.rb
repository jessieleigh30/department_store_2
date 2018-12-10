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
  end
end
