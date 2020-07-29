/* What are Resolvers?
    - Short answer is they resolve everything: queries, mutations, interfaces, basically anything that could be a value.
    - Think of this as controllers in the context of a REST Api that's responsible to retrieve data.
    - Every query and mutation our schema has, must have a resolver that returns the specified type.
    - Types and fields on types also have resolvers. For example our `id` property in the project type actually refers to `_id` in MongoDB.
      And MongoDB does not know what's `id` so if we query it like this it will break because. Hence we need to resolve it accept queries with
      `id` property.
      Another example can be the createdBy property which refers to an user object in the db but by default it stores an ID in the database as
      a reference. Here, we write a resolver for this property for......
    - Incoming queries decides what resolvers run and in which order.
*/

/* Creating a Resolver

*/