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
  "http://res.cloudinary.com/catalyst/image/upload/v1457339255/bio1_cou32v.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339267/bio10_jmazod.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339261/bio2_xb3d45.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339256/bio3_ikfh6m.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339255/bio4_mrarcg.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339269/bio5_j7mjro.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339265/bio6_uuwrko.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339265/bio7_eoshut.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339269/bio8_uqjwjf.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339266/bio9_euig1j.jpg",
]
chem_image_urls = [
  "http://res.cloudinary.com/catalyst/image/upload/v1457339255/chem1_kdhfax.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339267/chem10_xoydjk.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339265/chem2_gyfboa.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339273/chem3_akyras.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339267/chem4_fp0zfx.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339266/chem5_xbj7s5.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339265/chem6_ii799o.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339267/chem7_di7dk0.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339266/chem8_ukssff.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339267/chem9_gxftcr.jpg"
]
eng_image_urls = [
  "http://res.cloudinary.com/catalyst/image/upload/v1457339286/eng1_dfopaz.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339287/eng10_c4kunu.png",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339297/eng2_irmgoe.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339286/eng3_pju0tu.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339286/eng4_vhjx1v.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339287/eng5_g38pof.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339286/eng6_wmobzn.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339288/eng7_ltbip7.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339287/eng8_tezqof.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339287/eng9_zzvoz9.jpg"
]
med_image_urls = [
  "http://res.cloudinary.com/catalyst/image/upload/v1457339256/med1_usw8qs.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339279/med10_ecoxew.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339256/med2_qlrgro.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339268/med3_rfjfn7.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339268/med4_vkqith.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339266/med5_wabrvg.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339279/med6_qqecxa.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339279/med7_bng2ne.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339279/med8_k1c91u.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339279/med9_beaycp.jpg"
]
phys_image_urls = [
  "http://res.cloudinary.com/catalyst/image/upload/v1457339247/phys1_b7jyf2.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339287/phys10_j8hsf5.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339256/phys2_dhtjvh.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339255/phys3_dnfa4p.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339279/phys4_xgtkmt.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339281/phys5_tdoukp.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339279/phys6_p9jj10.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339287/phys7_eur16x.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339286/phys8_vgmitq.jpg",
  "http://res.cloudinary.com/catalyst/image/upload/v1457339286/phys9_foxl0a.jpg"
]

1.upto(100) { titles << Faker::App.name }
1.upto(100) { taglines << Faker::Company.catch_phrase }
1.upto(100) { descriptions << Faker::Hipster.paragraph(7)}
1.upto(100) { goal_amts << rand(50..5000) }
1.upto(100) { start_dates << Faker::Date.between(Date.today, Faker::Date.forward(7)) }
1.upto(100) { deadlines << Faker::Date.between(Faker::Date.forward(8), 1.year.from_now) }

categories.each do |category|
  new_cat = Category.create(name: category)
  new_cat.save!
end

defaultUser = User.create(username: "Bill Gates", email: "billgates@bill.com", password: "billgates");

1.upto(30) do
  new_user = User.create(
  username: Faker::Internet.user_name, email: Faker::Internet.free_email,
  password: Faker::Internet.password)

  new_user.save!
end


categories.each do |category|
  if category == "Biology"
    image_arr = bio_image_urls
  elsif category == "Chemistry"
    image_arr = chem_image_urls
  elsif category == "Engineering"
    image_arr = eng_image_urls
  elsif category == "Medicine"
    image_arr = med_image_urls
  elsif category == "Physics"
    image_arr = phys_image_urls
  end

  1.upto(10) do |i|
    sample_user = User.all.sample
    new_project = Project.create(
      title: titles.sample, creator_id: sample_user.id, creator: sample_user.username,
      category: category, tagline: taglines.sample,
      description: descriptions.sample, goal_amt: goal_amts.sample,
      start_date: start_dates.sample, deadline: deadlines.sample,
    )
    new_project[:image_url] = image_arr[i-1]
    new_project.save!
  end
end

Project.all.each do |project|
  backer  = User.all.sample
  proj_backing = ProjectBacking.create(project_id: project.id, backer_id: backer.id, pledge_amt: rand(1..2000))
  proj_category = ProjectCategory.create(project_id: project.id, category_id: Category.all.sample.id)

  proj_backing.save!
  proj_category.save!
end
