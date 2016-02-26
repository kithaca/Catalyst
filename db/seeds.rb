# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

titles = []
categories = ["Biology", "Chemistry", "Physics", "Medicine", "Engineering"]
taglines = []
descriptions = []
goal_amts = []
start_dates = []
deadlines = []

1.upto(20) { titles << Faker::App.name }
1.upto(20) { taglines << Faker::Company.catch_phrase }
1.upto(20) { descriptions << Faker::Hipster.paragraph(4)}
1.upto(20) { goal_amts << rand(50..5000) }
1.upto(20) { start_dates << Faker::Date.between(Date.today, Faker::Date.forward(7)) }
1.upto(20) { deadlines << Faker::Date.between(Faker::Date.forward(8), 1.year.from_now) }

categories.each do |category|
  new_cat = Category.create(name: category)
  new_cat.save!
end

1.upto(20) do |i|
  new_project =
    Project.create(
          title: titles[i], creator_id: i, category: categories.sample,
          tagline: taglines[i], description: descriptions[i],
          goal_amt: goal_amts[i], start_date: start_dates[i],
          deadline: deadlines[i] )

  new_project.save!

  new_user = User.create(
        username: Faker::Internet.user_name, email: Faker::Internet.free_email,
        password: Faker::Internet.password)

  new_user.save!

end
