import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png"
import styles from "./main-header.module.css"
import MainHeaderBg from "./main-header-bg";
import NavLink from "./nav-link";

export default function MainHeader({ children }) {

    return (
        <>
            <MainHeaderBg />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImg} alt="A plate with food" priority />
                    NextLevel food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    );
}