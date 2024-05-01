import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_div}>
          <picture className={styles.hero_image}>
            <img
              src="/assets/images/illustration-intro.png"
              alt="Illustration of 2 people organizing files."
            />
          </picture>
          <div className={styles.hero_text}>
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p className="paragraph">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <a href="#" className="btn-primary btn-primary--small">
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Wave svg */}
      <picture className={styles.wave_image}>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/images/bg-curvy-desktop.svg"
        />
        <img
          src="/assets/images/bg-curvy-mobile.svg"
          alt="svg image with wave shape"
        />
      </picture>
    </section>
  )
}
