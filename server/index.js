import { startApolloServer } from "./app.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers/index.js";
import { connectDB } from "./database.js";

connectDB();
startApolloServer(typeDefs, resolvers);
