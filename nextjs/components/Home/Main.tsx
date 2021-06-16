import styles from '../../styles/components/Home/Main.module.css'
import Video from '../../public/icons/video.svg';
import Inter from '../../public/icons/inter.svg';
import Icon from '../../public/icons/vercel.svg';
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
        <div className = {styles.imgContainer} style =  {{ width: "750px" }}>
          <Image src = {Video} alt = "Land image" layout = "fill" objectFit="contain"/>
        </div>
      </section>

      <section className = {styles.enterprise}>
          <Image src = {Inter} alt = "advertisement"/>
          <Image src = {Inter} alt = "advertisement"/>
          <Image src = {Inter} alt = "advertisement"/>
          <Image src = {Inter} alt = "advertisement"/>
      </section>

      <section className = {styles.qualities}>
        <section>
          <h1>
            Build up the whole picture
          </h1>
          <p className = "larger">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.
          </p>
          <ul>
            {[1, 2].map(x => (
              <li key = {-x}>
              <BiAbacus className = {styles.icon}/>
              <h3> Robust Workflow </h3>
              <p className = "larger">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
            </li>
            ))}
          </ul>
        </section>
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

      <section className = {styles.count}>
        <sub> Grow your revenue </sub>
        <h1> Customer testimonials </h1>

        <ul>
          {[3, 4, 5].map(i => (
            <li key = {i}>
              <span> <p> {i} </p> </span>
              <div>
                <h4> Designers </h4>
                <p> 
                  Officia et fugiat mollit qui. Dolor elit aliqua voluptate ipsum excepteur cillum consequat consectetur duis magna qui eu consequat occaecat. Deserunt nisi sit.
                </p>
              </div>
            </li>
          ))}
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
