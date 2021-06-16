import styles from '../../styles/components/Home/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>
        Criado pelo grupo teOrienta
      </p>
      <div>
        <a href="#"> Contato </a>
        <a href="#"> Sobre a equipe </a>
        <a href="#"> FAQ's </a>
        <a href="#"> Suporte </a>
      </div>
    </div>
  )
}
