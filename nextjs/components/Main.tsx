import styles from '../styles/components/Main.module.css'
import Icon from '../public/icons/vercel.svg';
import Image from 'next/image';
import { BiAbacus } from 'react-icons/bi'

export default function Main() {
  return (
    <div className={styles.container}>
      <section className = {styles.title}>
        <h1>
          Landing template for <b>startups</b>
        </h1>
        <p className = "larger">
          Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
        </p>
        <div>
          <button className = "colored-btn">
            Começar
          </button>
          <button>
            Saber mais
          </button>
        </div>
        <Image src = {Icon} alt = "Land image"/>
      </section>
      <section className = {styles.qualities}>
        <h1>
          Build up the whole picture
        </h1>
        <p className = "larger">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
        </p>
        <ul>
          <li>
            <BiAbacus className = {styles.icon}/>
            <h3> Robust Workflow </h3>
            <p className = "larger">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </p>
          </li>
          <li>
            <BiAbacus className = {styles.icon}/>
            <h3> Robust Workflow </h3>
            <p className = "larger">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </p>
          </li>
        </ul>
      </section>

      <section className = {styles.functions}>
        <h1>
          Workflow that just works
        </h1>
        <p className = "larger">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
        </p>
        <ul>
          <li>
            <div>
              <sub>
                LIGHTNING FAST WORKFLOW
              </sub>
              <h3>Data-driven insights</h3>
              <p className = "larger">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              <sub>
                LIGHTNING FAST WORKFLOW
              </sub>
              <h3>Data-driven insights</h3>
              <p className = "larger">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className = {styles.testimony}>
        <h1>
          Customer testimonials
        </h1>
        <p className = "larger">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
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
