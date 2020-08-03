import { ApolloServer } from 'apollo-server'
import { loadTypeSchema } from './utils/schema'
import { merge } from 'lodash'
import config from './config'
import { connect } from './utils/db'
import project from './types/project/project.resolvers'
import user from './types/user/user.resolvers'

const types = ['project', 'user']

export const start = async () => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `
  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  /* typeDefs (short for Type Definition) are the building block that makes a schema. 
     In other words, schema is a collection of typeDefs.
     
     What we are doing below is, we are creating an instance
     of ApolloServer. Once created, we then provide all of our schema,
     resolvers, etc to our ApolloServer instance. 
  */
  const server = new ApolloServer({
    typeDefs: [rootSchema, ...schemaTypes],
    resolvers: merge({}, project, user),
    context({ req }) {
      // use the authenticate function from utils to auth req, its Async!
      return { user: null }
    }
  })

  await connect(config.dbUrl)
  const { url } = await server.listen({ port: config.port })

  console.log(`GQL server ready at ${url}`)
}
