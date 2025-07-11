import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

// clear all db
await reset(db, schema)

// seed the db
await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 20,
    },
  }
})

await sql.end()

// biome-ignore lint/suspicious/noConsole: only in dev
console.log('Database seeded')
