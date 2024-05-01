import styles from "./Testimonials.module.css"

const testimonials = [
  {
    message:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    user: {
      image: "/assets/images/profile-1.jpg",
      name: "Satish Patel",
      role: "Founder & CEO, Huddle",
    },
  },
  {
    message:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    user: {
      image: "/assets/images/profile-2.jpg",
      name: "Bruce McKenzie",
      role: "Founder & CEO, Huddle",
    },
  },
  {
    message:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    user: {
      image: "/assets/images/profile-3.jpg",
      name: "Iva Boyd",
      role: "Founder & CEO, Huddle",
    },
  },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonials_icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="m7 6l1-2H6C3.79 4 2 6.79 2 9v7h7V9H5c0-3 2-3 2-3m7 3c0-3 2-3 2-3l1-2h-2c-2.21 0-4 2.79-4 5v7h7V9z"
            />
          </svg>
        </div>
        <div className={styles.testimonials_div}>
          {testimonials.map((testimonial) => (
            <div key={crypto.randomUUID()} className={styles.testimonials_card}>
              <p className={`${styles.testimonials_card_message} paragraph`}>
                {testimonial.message}
              </p>
              <div className={styles.testimonials_card_user}>
                <picture>
                  <img
                    src={testimonial.user.image}
                    alt={`Imagen profile from ${testimonial.user.name}`}
                  />
                </picture>
                <div>
                  <p>{testimonial.user.name}</p>
                  <p className="paragraph">{testimonial.user.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
