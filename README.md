# JS Makers GraphQl Api 

## Project Structure


```
src
├── __tests__                                # All our test cases reside here.
│   └── server.spec.js
├── config                                   # Houses all the secrets, ports, strings, urls & other configs for dev, prod and testing environment.
│   ├── dev.js
│   ├── index.js
│   ├── prod.js
│   └── testing.js
├── types                                # This is our main directory where all the resources reside in a modular way.
│   ├── blog
│   |   └── __tests__                        # Tests related to the blog resource stays here. 
│   |   |    ├──  blog.resolvers.spec.js
│   |   |    └── blog.type.spec.js
│   |   ├── blog.gql
│   |   ├── blog.model.js
│   |   └── blog.resolvers.js
│   ├── challenge
│   |   └── __tests__
│   |   |    ├── challenge.resolvers.spec.js
│   |   |    └── challenge.type.spec.js  
│   |   ├── challenge.gql
│   |   ├── challenge.model.js
│   |   └── challenge.resolvers.js
│   ├── project
│   |   └── __tests__
│   |   |    ├── project.resolvers.spec.js
│   |   |    └── project.type.spec.js      
│   |   ├── project.gql
│   |   ├── project.model.js
│   |   └── project.resolvers.js
|   ├── utils
│   |   ├── auth.js
│   |   ├── crud.js
│   ├── └── db.js
├── index.js                                 # Kicks off the server.
└── server.js                                # The root server file.
```
