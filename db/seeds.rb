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

bio_image_urls = [

]
chem_image_urls = [

]
eng_image_urls = [

]
med_image_urls = [

]
phys_image_urls = {
  
}

1.upto(10) { titles << Faker::App.name }
1.upto(10) { taglines << Faker::Company.catch_phrase }
1.upto(10) { descriptions << Faker::Hipster.paragraph(4)}
1.upto(10) { goal_amts << rand(50..5000) }
1.upto(10) { start_dates << Faker::Date.between(Date.today, Faker::Date.forward(7)) }
1.upto(10) { deadlines << Faker::Date.between(Faker::Date.forward(8), 1.year.from_now) }

categories.each do |category|
  new_cat = Category.create(name: category)
  new_cat.save!
end

defaultUser = User.create(username: "Bill Gates", email: "billgates@bill.com" password: "billgates");

1.upto(10) do
  new_user = User.create(
  username: Faker::Internet.user_name, email: Faker::Internet.free_email,
  password: Faker::Internet.password)

  new_user.save!
end

1.upto(10) do
  sample_user = User.all.sample
  new_project =
    Project.create(
          title: titles.sample, creator_id: sample_user.id, creator: sample_user.username,
          category: categories.sample, tagline: taglines.sample,
          description: descriptions.sample, goal_amt: goal_amts.sample,
          start_date: start_dates.sample, deadline: deadlines.sample )

  new_project.save!

end

Project.all.each do |project|
  backer  = User.all.sample
  proj_backing = ProjectBacking.create(project_id: project.id, backer_id: backer.id, pledge_amt: rand(1..2000))
  proj_category = ProjectCategory.create(project_id: project.id, category_id: Category.all.sample.id)

  proj_backing.save!
  proj_category.save!
end
