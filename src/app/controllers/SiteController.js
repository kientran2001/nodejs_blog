const Course = require('../model/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {

    // GET Site
    index(req, res, next) {
        // Course.find({}, function(err, courses) {
        //     if(!err) res.json(courses)
        //     else next(err)
        // })
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(err => next(err))

        // res.render('home')
    }

    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController()
