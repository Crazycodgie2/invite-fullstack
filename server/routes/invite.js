const express = require("express")
const router = express.Router()
const axios = require("axios")

const data = {
  going: [],
  notgoing: []
}

router.get("/", (req, res, next) => {
  axios.get("https://randomuser.me/api?results=1").then(resp => {
    const obj = resp.data.results[0]

    const user = {
      name: results[0].name.first + " " + results[0].name.last,
      img: results[0].picture.large,
      phone: results[0].phone,
      email: results[0].email
    }

    res.json({
      user,
      goingCount: data.going.length,
      notGoingCount: data.notgoing.length
    })
  })
})

router.get("/going", (req, res, next) => {
  res.json(data.going)
})

router.get("/notgoing", (req, res, next) => {
  res.json(data.notgoing)
})

router.get("/mark-invitee", (req, res, next) => {
  const going = req.body.going

  if (going) {
    data.going.push(req.body.user)
  } else {
    data.notgoing.push(req.body.user)
  }

  res.json({
    status: going ? "going" : "notgoing",
    user
  })
})

module.exports = router

// router.get("/", (req, res, next) => {
//   axios.get("https://randomuser.me/api?results=1").then(resp => {
//     const obj = resp.data.results[0]

//     const user = {
//       name: results[0].name.first + " " + results[0].name.last,
//       img: results[0].picture.large,
//       phone: results[0].phone,
//       email: results[0].email
//     }

//     res.json({
//       user,
//       goingCount: data.going.length,
//       notGoingCount: data.notgoing.length
//     })
//   })
// })

// router.post("/going", (req, res, next) => {
//   usersGoing.push(req.body.user)
//   res.json({
//     ...usersGoing
//   })
// })

// router.post("/notgoing", (req, res, next) => {
//   usersNotGoing.push(req.body.user)
//   res.json({
//     ...usersNotGoing
//   })
// })

// router.get("/going", (req, res, next) => {
//   const user = usersGoing
//   res.json(user)
// })

// router.get("/notgoing", (req, res, next) => {
//   const user = usersNotGoing
//   res.json(user)
// })

// module.exports = router
