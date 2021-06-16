import styles from '../../styles/components/Home/Main.module.css';
import Video from '../../public/icons/undraw_visual_data_re_mxxo.svg';
import Icon from '../../public/icons/vercel.svg';
import Image from 'next/image';

import { BiAbacus } from 'react-icons/bi';
import { CgSearchFound } from 'react-icons/cg';
import { GiConfirmed } from 'react-icons/gi';

export default function Main() {
  return (
    <div className={styles.container}>
      <section className = {styles.title}>
        <h1>
          Te<b>Orienta</b>
        </h1>
        <p className = "larger">
          Aventure-se conosco em busca de uma maior produtividade nos setores da sua organização!
        </p>
        <div>
          <button className = "colored-btn">
            Começar
          </button>
          <button>
            Saber mais
          </button>
        </div>
        <div className = {styles.imgContainer} style =  {{ width: "750px" }}>
          <Image src = {Video} alt = "Land image" layout = "fill" objectFit="contain"/>
        </div>
      </section>
      
      <section className = {styles.qualities}>
        <section>
          <h1>
            Como fazemos isso?
          </h1>
          <p className = "larger">
            Uma promessa ambiciosa requer métodos sofisticados. Para isso, seguimos essas etapas de processo
          </p>
          <ul>
              <li>
                <CgSearchFound className = {styles.icon}/>
                <h3> Descoberta </h3>
                <p className = "larger">
                  Primeiramente fazemos uma descoberta nos dados, isto é, extraimos o essencial e aplicamos algoritmos de mineração de processos para obter os resultados desejados.
                </p>
              </li>
              <li>
                <GiConfirmed className = {styles.icon}/>
                <h3> Confirmação </h3>
                <p className = "larger">
                  Após a etapa de Descoberta, é crucial verificarmos a conformidade dos dados apresentados. E é nessa etapa que isso acontece, legal, né?
                </p>
              </li>
              <li>
                <BiAbacus className = {styles.icon}/>
                <h3> Melhoria </h3>
                <p className = "larger">
                  Baseado no que acontece de fato, podemos identificar mudanças que podem ser aplicadas de verdade na organização. Nessa etapa é feita uma recomendação de melhorias para evitar futuros gargalos. Que massa!
                </p>
              </li>
          </ul>
        </section>
      </section>

      <section className = {styles.functions}>
        <h1>
          Para quem isso é destinado?
        </h1>
        <p className = "larger">
          Até agora foi dada uma explicação geral do que fazemos e como fazemos. Mas, pra quem fazemos isso? Existem várias aplicações para esse tipo de método e vamos listar algumas para vocês. Claro que estamos afirmando a possibilidade de personalização a depender do contexto em que nossa ferramenta será usada. 
        </p>
        <ul>
          <li>
            <div>
              <h3>Setor de finanças</h3>
              <p className = "larger">
                Nossa ferramenta é facilmente adaptada para o setor de finanças de uma organização. Normalmente, partes burocráticas geram bastantes logs que não são utilizados para outros meios, mas que podem ser utilizados para encontrar gargalos na operação de finanças e melhorar, como consequência, a produtividade desse setor.
              </p>
            </div>
            <div className={styles.demos}>
              <Image src = {Icon} alt = "demo img" layout = "fill" objectFit="contain"/>
            </div>
          </li>
          <li>
            <div className={styles.demos}>
              <Image src = {Icon} alt = "demo img" layout = "fill" objectFit="contain"/>
            </div>
            <div style = {{ textAlign: "end" }}>
              <h3>Setor de logística</h3>
              <p className = "larger">
                Assim como nas finanças, esse setor gera muitos logs que acabam se tornando &quot;lixo&quot; com o passar do tempo. Esses logs normalmente dizem respeito à entrega e transporte de produtos, além de expedições de documentos. Com isso, podemos facilmente identificar partes que podem ser automatizadas no processo, zerando a possibilidade de gargalos e aumentando significativamente a eficiência dos processos. 
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className = {styles.team}>
        <h1> Conheça nossa equipe </h1>

        <ul>
          <li>
            <span> <p>Marton Paulo</p> </span>
            <div>
              <h4> CEO </h4>
              <p> 
                Melhor designer de Pernambuco, faixa preta em judô. 
              </p>
            </div>
          </li>
          <li>
            <span> <p>Matheus Almeida</p> </span>
            <div>
              <h4> CTO </h4>
              <p> 
                Um mestre, manja de tudo
              </p>
            </div>
          </li>
          <li>
            <span> <p>Gabriel Nogueira</p> </span>
            <div>
              <h4> CO-Founder </h4>
              <p> 
                O cara, guitarrista da Vitruvian
              </p>
            </div>
          </li>
          <li>
            <span> <p>José Danilo</p> </span>
            <div>
              <h4> CO-Founder </h4>
              <p> 
                Nas palavras de Vitor: Um cão chupando manga
              </p>
            </div>
          </li>
        </ul>
      </section>
      
      <section className = {styles.testimony}>
        <h1>
          Depoimento dos clientes
        </h1>
        <p className = "larger">
          Não tem
        </p>
        <ul>
          {[1, 2].map(x => (
            <li key = {x}>
              <p>
              — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
              </p>
              <hr />
              <p>
                Roman Level / <b>AppName</b>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className = {styles.banner}>
          <h3>
            For previewing layouts and visual?
          </h3>
      </section>
    </div>
  )
}
