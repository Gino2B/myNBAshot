# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
curry = Player.create({
  name: "Stephen Curry",
  bio: 'Wardell Stephen "Steph" Curry II is an American professional basketball player for the Golden State Warriors of the National Basketball Association. He plays the point guard position. Many analysts and players have called him the greatest shooter in NBA history.',
  team: "Golden State Warriors",
  image_url: "https://sportshub.cbsistatic.com/i/r/2021/08/02/f4adf313-ad3f-47a7-bae2-4866b705d290/thumbnail/1200x675/c3a117591ef5fdf155e6244f1e9d3f59/steph-curry.png",
})
booker = Player.create({
  name: "Devin Booker",
  bio: "Devin Armani Booker (born October 30, 1996) is an American professional basketball player for the Phoenix Suns of the National Basketball Association (NBA). Booker was selected by the Phoenix Suns in the first round of the 2015 NBA draft with the 13th overall pick.",
  team: "Phoenix Suns",
  image_url: "https://cdn.vox-cdn.com/thumbor/3T1NsyolyYSvYx7UFaALCSJWsxI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22305545/usa_today_15576738.jpg",
})

curryMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=GEMVGHoenXM", player: curry })
curryMoment1 = Moment.create({ vid_link: "https://www.youtube.com/watch?v=1o2jn8OoNvs&ab_channel=NBA", player: curry })
gino = User.create({
  name: "Gino",
  email: "g2b@gmail.com",
  password: "12345",
})
