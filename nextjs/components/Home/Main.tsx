import styles from '../../styles/components/Home/Main.module.css';

export default function Main() {
  return (
    <div className={styles.container}>
      <section className = {styles.title}>
        <h1>
          JuMP<b>CNJ</b>
        </h1>
      </section>
      <section>
        <p className = "larger">
            Ferramenta de mineração de processos para o setor judiciário brasileiro.
        </p>
      </section>
      <section className = {styles.botoes}>
        <a className="btn btn-border-3" href="">Projeto</a>
        <a className="btn btn-border-3" href="">Tutorial</a>
        <a className="btn btn-border-3" href="">Questionário</a>
      </section>
    </div>
  )
}
