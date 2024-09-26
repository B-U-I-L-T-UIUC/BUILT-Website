# BUILT-Website

Welcome to B[U]ILT UIUC's club website repository! Here you will find the current website's code, anything we're currently working on, a description of our tech stack, and our best practices.

## Getting Started

 Here are some great resources to get started on development and learn about web devlopment if you need it.
 
 1. [Deep Dive Into Modern Web Development](https://fullstackopen.com/en/)
 2. [Node.js](https://nodejs.org/en)
 3. [React](https://react.dev)

## Our Tech Stack

 Our current tech stack includes the use of:

 1. React
 2. HTML
 3. JavaScript
 3. CSS

 In the future we will most likely use Microsoft Azure for their cloud computing services and hosting capabilities.

## Best Practices

 To ensure our repository has less conflicts and to ensure everyone can develop fluidly we will implement best practices on branching, code reviews, descriptive naming/messages, modular reusable code, and commits.

 Please read up on these best practices as well, [What are Git version control best practices?](https://about.gitlab.com/topics/version-control/version-control-best-practices/)

### Branching

 Feature branching is a great way for teams to split up work and ensure there are reduced merge conflicts. This also ensures that the scope of pull requests are focused and specific. 

 A branch should be named with a proper name as well to signal to others what the purpose of the banch is, who is working on the branch, and where a feature will be located. 

 For example a branch for a rotating photo carosoul feature on an about page by Steven can take on the form:  ***stevenuru/about/rotating-carousel***

### Commits

 Commits to a branch should be done granularly with frequency. Commiting large changes to a codebase can make it difficult for reviewers to gather a sense of what's going on and can make it more difficult to spot errors in one's code merge.

 Branch merges to main should also be reviewed by another committee member to reduce the risk of errors and to maintain a clean codebase.

### Writing Code

 #### Modularity
 
 Code should be written with reusability and modularity in mind. Functions should be used when possible to decrease repetititve code and makes it easier for reviewers to read when done right. Files should also be split up based on the functionality/purpose of the file. 

 #### Comments

 Comments should be used when the code itself cannot communicate to others what is happening. We should strive to use descriptive (although short) comments when defining new functions. This helps ramp up learning whenever someone new is introduced to the codebase
