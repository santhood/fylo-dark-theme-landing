import styles from "./Header.module.css"

const links = [
  { route: "#", label: "Features" },
  { route: "#", label: "  Team" },
  { route: "#", label: "  Sign In" },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.header_nav} container`}>
        <a href="/" className={styles.main_logo}>
          <img src="/assets/images/logo.svg" alt="Fylo logo" />
        </a>
        <ul className={styles.header_ul}>
          {links.map((link) => (
            <li key={crypto.randomUUID()}>
              <a href={link.route}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
