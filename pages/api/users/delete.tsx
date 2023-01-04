import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { useRouter } from 'next/router'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(`request body: ${JSON.stringify(req.body)}`)
    const userToDeleteId = req.body.id

    const deletedUser = await prisma.user.delete({
        where: { id: userToDeleteId },
    })

    res.json({ deletedUser })
}
