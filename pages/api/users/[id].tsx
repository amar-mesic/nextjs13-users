import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(`request: ${JSON.stringify(req.query)}}`)
    const userId = req.query.id

    if (typeof userId !== 'string')
        return res.status(400).json({ error: 'query id not string' })

    if (req.method === 'GET') {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            })
            return res.status(200).json({ user })
        } catch (error: any) {
            return res.status(500).json({ error })
        }
    }
}
