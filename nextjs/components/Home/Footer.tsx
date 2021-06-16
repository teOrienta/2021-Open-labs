import styles from '../../styles/components/Home/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>
        Criado pelo grupo teOrienta
      </p>
      <div>
        <a href="#"> Contact </a>
        <a href="#"> About us </a>
        <a href="#"> FAQ's </a>
        <a href="#"> Support </a>
      </div>
    </div>
  )
}
