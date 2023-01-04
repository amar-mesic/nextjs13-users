import Image from 'next/image'

export default async function User({ params }: { params: any }) {
    const res = await fetch(`http://localhost:3000/api/users/${params.id}`)

    if (res.status === 500) {
        console.log('bad response!!')
    }

    const { user } = await res.json()
    console.log(`user response: ${JSON.stringify(user)}`)

    return (
        <section className="m-4 py-4">
            <div className="center">
                <Image
                    src={
                        user.imageUrl ||
                        'https://www.thesun.co.uk/wp-content/uploads/2022/08/NINTCHDBPICT000740566005.jpg'
                    }
                    alt={`user ${user.name}`}
                    width="200"
                    height="200"
                />
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-small text-stone-400">
                    {user.email || 'no e-mail'}
                </p>
            </div>
        </section>
    )
}
