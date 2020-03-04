const express = require("express")
const router = express.Router()
const axios = require("axios")

let users = []
let userId = 0
let going = []
let notgoing = []

router.get("/random", (req, res, next) => {
  axios.get("https://randomuser.me/api").then(resp => {
    const obj = resp.data.results[0]

    const user = {
      picture: obj.picture.thumbnail,
      fname: obj.name.first,
      lname: obj.name.last,
      phone: obj.phone,
      email: obj.email
    }

    userId++
    users.push({ ...user, id: userId })
    res.json({
      ...user,
      id: userId
    })

    console.log(users)
  })
})

router.post("/", (req, res, next) => {
  userId++
  users.push({ ...req.body, id: userId })
  res.json({
    id: userId,
    message: "User added"
  })
  console.log(users)
})

router.get("/:id", (req, res, next) => {
  const user = users.find(u => u.id == req.params.id)
  res.json(user)
})

module.exports = router
