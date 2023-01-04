import AddUser from 'components/addUser'

export default async function Users() {
    return (
        <section className="m-4 py-4">
            <h1>Users</h1>
            <h3>Pick a user on the sidebar</h3>
            <br />
            <AddUser />
        </section>
    )
}
