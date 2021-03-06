# React/TypeScript Palindrome checker

Uses create-react-app with typescript for speedy development and avoiding overhead of webpack configuration.


### Starting server
This assumes that you have Yarn installed <https://yarnpkg.com/en/>

Once installed, run it in the root directory to install dependencies:

`yarn`

Then to start the server, run:
`yarn start`

This will automatically open a tab in your browser pointed to localhost:3000


## Notes/Assumptions

__Important!__
Tests were not written due to time constraints alone. I would not actually push untested code to be reviewed (in most cases).

Also important to note is that the structure utilizes Reacts new "hooks", which replaces the usage of classes and reduces complexity of lifecycle methods. See more at <https://reactjs.org/docs/hooks-intro.html> So this could be considered an assumption of some degree of familiarity of the latest React patterns.

#### Dev dependency notes
I personally like to use Prettier to reduce the arguments about code style. You can learn more here: <prettier.io>

TSLint is also initalized to help with standard syntax errors and the like.
