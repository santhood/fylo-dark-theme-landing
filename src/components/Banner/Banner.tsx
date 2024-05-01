import styles from "./Banner.module.css"

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.banner_content}>
          <picture className={styles.banner_picture}>
            <img
              src="/assets/images/illustration-stay-productive.png"
              alt="Illustration of 3 people working"
            />
          </picture>
          <div className={styles.banner_text}>
            <h2>Stay productive, wherever you are</h2>
            <p className="paragraph">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="paragraph">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="#">
              <span>See how Fylo works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
