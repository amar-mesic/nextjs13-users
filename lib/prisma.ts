import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}
export default prisma

export async function connectToDB() {
    await prisma.$connect()
}

// async function main() {
//     // Connect the client
//     await prisma.$connect()
//     // ... you will write your Prisma Client queries here
//     const { users: allUsers, error } = await getUsers()
//     // const users = await prisma.user.findMany()
//     console.log(JSON.stringify(allUsers))
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
