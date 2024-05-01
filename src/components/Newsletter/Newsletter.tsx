import { useState } from "react"
import styles from "./Newsletter.module.css"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!regex.test(email)) return setEmailError(true)
  }

  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.newsletter_div}>
          <div>
            <h4>Get early access today</h4>
            <p className="paragraph">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <form
              onSubmit={handleSubmit}
              className={`${styles.newsletter_form} ${emailError ? styles.error : ""}`}
            >
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(ev.currentTarget.value)
                    setEmailError(false)
                  }}
                />
              </div>
              <button type="submit" className="btn-primary">
                Get Started For Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
