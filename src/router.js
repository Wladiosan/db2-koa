const Router = require('koa-router')

const router = new Router()
const controller = require('./controller')

router.get('/', controller.home)
router.get('sign-in-one', controller.signInOne)
router.get('sign-in-two', controller.signInTwo)
router.get('sign-in-three', controller.signInThree)
router.get('sign-in-four', controller.signInFour)
router.get('sign-up-one', controller.signUpOne)
router.get('sign-up-two', controller.signUpTwo)
router.get('sign-up-three', controller.signUpThree)
router.get('sign-up-four', controller.signUpFour)
router.get('sign-up-five', controller.signUpFive)
router.get('admin', controller.admin)

module.exports = {
    router
}