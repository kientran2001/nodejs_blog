const Course = require('../model/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class MeController {

    // GET me/stored/courses

    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(err => next(err))
    }
}

module.exports = new MeController()
