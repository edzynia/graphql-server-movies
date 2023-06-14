import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadSchema } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';
import { createServer } from 'http';
import { createYoga } from 'graphql-yoga';
import { resolvers } from './graphql/resolvers.js';

async function main() {
  // Get the directory name of the current module
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Load schema from the file
  const schema = await loadSchema(join(__dirname, './graphql/schema.graphql'), {
    loaders: [new GraphQLFileLoader()],
  });

  // Add resolvers to the schema
  const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

  const yoga = createYoga({
    schema: schemaWithResolvers,
  });

  const server = createServer(yoga);

  server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
