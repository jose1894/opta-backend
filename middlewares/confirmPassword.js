const {check} = require('express-validator')

module.exports = {

validateConfirmPassword : check('confirmPassword')

	// To delete leading and trailing space
	.trim()

	// Validate minimum length of password
	// Optional for this context
	.isLength({min:8, max:15})

	// Custom message
	.withMessage('Password must be between 8 to 15 characters')

	// Custom validation
	// Validate confirmPassword
	.custom(async (confirmPassword, {req}) => {
        const password = req.body.password

        // If password and confirm password not same
        // don't allow to sign up and throw error
        if(password !== confirmPassword){
            throw new Error('Passwords must be same')
        }
	}),
}
