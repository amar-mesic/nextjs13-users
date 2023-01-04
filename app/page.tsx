import { Inter } from '@next/font/google'
import { User } from '@prisma/client'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
    const data = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
        cache: 'no-store',
    }).then((res) => {
        if (res.status !== 200) {
            throw new Error('status code not 200')
        }
        return res.json()
    })

    const userCards = data.users.map((user: User) => (
        <div
            key={user.id}
            className="p-4 overflow-hidden flex-1 shadow min-w-fit"
        >
            <Image
                src={
                    user.imageUrl ||
                    'https://www.thesun.co.uk/wp-content/uploads/2022/08/NINTCHDBPICT000740566005.jpg'
                }
                alt={`user ${user.name}`}
                width="200"
                height="200"
            />
            <h2 className="text-xl font-bold overflow-hidden text-ellipsis">
                {user.name}
            </h2>
            <p className="text-small text-stone-400 overflow-hidden text-ellipsis">
                {user.email || 'no e-mail'}
            </p>
        </div>
    ))

    return (
        <section className="center p-4">
            <h1 className="text-2xl font-semibold mb-4">Existing Users</h1>
            <div className="flex flex-row gap-1 overflow-scroll">
                {userCards}
            </div>
        </section>
    )
}
