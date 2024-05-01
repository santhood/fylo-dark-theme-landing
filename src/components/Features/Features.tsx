import styles from "./Features.module.css"

const features = [
  {
    image: "/assets/images/icon-access-anywhere.svg",
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    image: "/assets/images/icon-security.svg",
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    image: "/assets/images/icon-collaboration.svg",
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    image: "/assets/images/icon-any-file.svg",
    title: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
]

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.features_div}>
          {features.map((feature) => (
            <div key={crypto.randomUUID()} className={styles.features_card}>
              <picture>
                <img src={feature.image} alt={feature.title} />
              </picture>
              <h2>{feature.title}</h2>
              <p className="paragraph">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
