async function home(ctx) {
    await ctx.render('index', {
        title: 'myFixer.com',
        linkStyle: './public/css/index.css'
    })
}

async function signInOne(ctx) {
    await ctx.render('sign-in-one', {
        title: 'myFixer.com',
        question: 'Do not have an account?',
        offer: 'Sign up',
        linkStyle: './public/css/sign-in.css'
    })
}

async function signInTwo(ctx) {
    await ctx.render('sign-in-two', {
        title: 'myFixer.com',
        question: 'Back to',
        offer: 'Sign in',
        linkStyle: './public/css/sign-in.css'
    })
}

async function signInThree(ctx) {
    await ctx.render('sign-in-three', {
        title: 'myFixer.com',
        question: 'Already have an account?',
        offer: 'Log in',
        linkStyle: './public/css/sign-in.css'
    })
}

async function signInFour(ctx) {
    await ctx.render('sign-in-four', {
        title: 'myFixer.com',
        question: 'Do not have an account?',
        offer: 'Sign up',
        linkStyle: './public/css/sign-in.css'
    })
}

async function signUpOne(ctx) {
    await ctx.render('sign-up-one', {
        title: 'myFixer.com',
        question: 'Already have an account?',
        offer: 'Log in',
        linkStyle: './public/css/sign-up.css'
    })
}

async function signUpTwo(ctx) {
    await ctx.render('sign-up-two', {
        title: 'myFixer.com',
        question: 'Already have an account?',
        offer: 'Log in',
        linkStyle: './public/css/sign-up.css'
    })
}

async function signUpThree(ctx) {
    await ctx.render('sign-up-three', {
        title: 'myFixer.com',
        question: 'Already have an account?',
        offer: 'Log in',
        linkStyle: './public/css/sign-up.css'
    })
}

async function signUpFour(ctx) {
    await ctx.render('sign-up-four', {
        title: 'myFixer.com',
        question: 'Already have an account?',
        offer: 'Log in',
        linkStyle: './public/css/sign-up.css'
    })
}

async function signUpFive(ctx) {
    await ctx.render('sign-up-five', {
        title: 'myFixer.com',
        question: 'Already have an account?',
        offer: 'Log in',
        linkStyle: './public/css/sign-up.css'
    })
}

async function admin(ctx) {
    await ctx.render('admin', {
        title: 'myFixer.com',
        admin: true,
        linkStyle: './public/css/admin.css',
        fontStyle: './public/css/all.css',
        firstVar: 'Home',
        secondVar: 'Manage users',
    })
}

module.exports = {
    home,
    signInOne,
    signInTwo,
    signInThree,
    signInFour,
    signUpOne,
    signUpTwo,
    signUpThree,
    signUpFour,
    signUpFive,
    admin
}