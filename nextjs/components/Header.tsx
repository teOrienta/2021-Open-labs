import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/Header.module.css'
import Icon from '../public/icons/vercel.svg';
import { useState } from 'react';

export function LoginContainer() {
  return (
    <div className = {styles.loginContainer}>
      <h1> Entrar </h1>
      <input type="email" placeholder="E-mail" required/>
      <input type="password" placeholder="Senha" required/>
      <button type = "button" className = {styles.access}
          onClick = {() => {}}>
          Entrar
      </button>
      <div className = {styles.separator}>
          <div> 
              <span>
                  Ou se cadastre aqui
              </span>
          </div>
      </div>
      <a className = {styles.buy}> 
          Cadastrar 
      </a>
    </div>
  )
}

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <div className = {styles.container}>
      <Image src = {Icon} alt = "Program icon" />

      <div className = {styles.links}>
          <Link href = "/">
            <a> Sobre nós </a>
          </Link>
          <button className = "colored-btn"
            onClick = {() => {setShowLogin(!showLogin)}}>
              Entrar
          </button>
      </div>
    </div>
    {showLogin ? 
      <>
        <LoginContainer/>
        <div className = {styles.overlay}
          onClick = {() => {setShowLogin(!showLogin)}}
        ></div>
      </>
    :<> </>}
    </>
  )
}
