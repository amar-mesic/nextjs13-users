'use client'
import { SyntheticEvent, useState } from 'react'

export default function AddUser() {
    const [user, setFormState] = useState({
        name: '',
        email: '',
        imageUrl: '',
    })

    function handleInputChange(event: any) {
        setFormState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    async function createNewUser(event: SyntheticEvent) {
        event.preventDefault()
        try {
            const res = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                body: JSON.stringify(user),
            })
            console.log(`user ${JSON.stringify(res)} created`)
            location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form
            className="p-4 flex flex-col gap-2 shadow-sm bg-slate-50"
            onSubmit={createNewUser}
        >
            <span className="text-center text-xl font-bold text-black">
                Create A New User
            </span>
            <label>
                <span className="font-semibold">Name: </span>
                <input
                    className="w-full"
                    name="name"
                    type="text"
                    onChange={handleInputChange}
                ></input>
            </label>
            <label>
                <span className="font-semibold">E-mail: </span>
                <input
                    className="w-full"
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                ></input>
            </label>
            <label>
                <span className="font-semibold">Image url: </span>
                <input
                    className="w-full"
                    name="imageUrl"
                    type="url"
                    onChange={handleInputChange}
                ></input>
            </label>
            <input
                className="mt-6 font-bold bg-slate-200 w-1/2 hover:cursor-pointer"
                type="submit"
                value="Create"
            ></input>
        </form>
    )
}
