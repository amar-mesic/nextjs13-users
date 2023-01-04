import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './footer.module.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p style={{ textAlign: 'center' }}>Developer Contact Info</p>
            <ul className={styles.socialInfo}>
                <li>
                    <Link href="https://www.facebook.com/amar.mesic.100">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/amarmesich/">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/amar-mesic">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </Link>
                </li>
                <li>
                    <Link href="https://stackoverflow.com/users/14022782/amar-mesic">
                        <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
                    </Link>
                </li>
            </ul>
            <hr />
            <p className={styles.copyright}>Retto Inc. © 2018</p>
        </footer>
    )
}
