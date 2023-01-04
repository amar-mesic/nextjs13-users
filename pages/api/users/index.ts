import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const users = await prisma.user.findMany()
            res.status(200).json({ users })
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    } else if (req.method === 'POST') {
        const data = JSON.parse(req.body)
        console.log(`data: ${data}`)
        try {
            const newUser = await prisma.user.create({
                data,
            })
            return res.status(200).json({ user: newUser })
        } catch (error: any) {
            console.error(error)
            return res.status(500).json({ error })
        }
    }

    res.setHeader('Allow', ['GET', 'POST'])
    res.status(425).end(`method not allowed`)
}

export default handler
