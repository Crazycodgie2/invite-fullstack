const express = require("express")
const router = express.Router()
const axios = require("axios")

let randomUser = []
let usersGoing = []
let usersNotGoing = []
let userid = 1

router.get("/randomUser", (req, res, next) => {
  axios.get("https://randomuser.me/api/?nat=us&randomapi&lego").then(resp => {
    const obj = resp.data.results[0]

    const user = {
      name: `${obj.name.first} ${obj.name.last}`,
      phone: obj.phone,
      email: obj.email,
      img: obj.picture.thumbnail,
      id: userid++
    }

    randomUser.push({ ...user })
    res.json({
      ...user
    })
  })
})

router.post("/going", (req, res, next) => {
  usersGoing.push(req.body.user)
  res.json({
    ...usersGoing
  })
})

router.post("/notgoing", (req, res, next) => {
  usersNotGoing.push(req.body.user)
  res.json({
    ...usersNotGoing
  })
})

router.get("/randomuser/:id", (req, res, next) => {
  const user = randomUser.find(user => user.id == req.params.id)
  res.json(user)
})

router.get("/going", (req, res, next) => {
  const user = usersGoing
  res.json(user)
})

router.get("/notgoing", (req, res, next) => {
  const user = usersNotGoing
  res.json(user)
})

module.exports = router
