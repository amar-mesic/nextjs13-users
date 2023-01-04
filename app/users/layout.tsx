// 'use client'

import { User } from '@prisma/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import DeleteButton from './deleteUser'

export default async function UsersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const { data, error, isLoading } = useSWR(
    //     'http://localhost:3000/api/users',
    //     (url) =>
    //         fetch(url, {
    //             method: 'GET',
    //             cache: 'no-store',
    //         }).then((res) => {
    //             if (res.status !== 200) {
    //                 throw new Error('status code not 200')
    //             }
    //             return res.json()
    //         })
    // )

    const data = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
        cache: 'no-store',
    }).then((res) => {
        if (res.status !== 200) {
            throw new Error('status code not 200')
        }
        return res.json()
    })

    const userNames = (
        <ul>
            {data.users.map((user: User) => (
                <li key={user.id}>
                    <div className="flex justify-between space-x-4">
                        <Link href={`users/${user.id}`}>{user.name}</Link>
                        <DeleteButton user={user} />
                    </div>
                </li>
            ))}
        </ul>
    )

    return (
        <section className="flex flex-row h-full">
            <aside className="min-w-fit py-4 px-8 bg-black text-slate-200 h-full overflow-auto">
                <Link href="http://localhost:3000/users">
                    <h1 className="text-2xl">Users</h1>
                </Link>
                <br />
                {userNames}
            </aside>
            <section>{children}</section>
        </section>
    )
}
