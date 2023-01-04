import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
    return (
        <header>
            <nav className="bg-stone-100 center py-10 m-0">
                <ul className="flex justify-center gap-8">
                    <li>
                        <Link className="mx-8" href="#">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className="mx-8" href="/users">
                            USERS
                        </Link>
                    </li>
                    <li>
                        <Link className="mx-8" href="/about">
                            ABOUT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
