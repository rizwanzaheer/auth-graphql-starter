const graphql = require("graphql");
const UserType = require("./types/user_type");

const { GraphQLObjectType, GraphQLString } = graphql;

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    email: { type: GraphQLString },
  },
});

module.exports = mutation;
