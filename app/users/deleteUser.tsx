'use client'

import { flip, offset, shift, useFloating } from '@floating-ui/react-dom'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

export default function DeleteButton({ user }: { user: User }) {
    tippy('.deleteButton', {
        content: 'Delete user',
    })

    const router = useRouter()

    return (
        <button
            className="deleteButton text-slate-400"
            onClick={async (event) => {
                const res = await fetch(
                    'http://localhost:3000/api/users/delete/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: user.id,
                        }),
                    }
                )
                const { deletedUser } = (await res.json()) as {
                    deletedUser: User
                }
                router.push('http://localhost:3000/users')
                router.refresh()
            }}
        >
            -
        </button>
    )
}
