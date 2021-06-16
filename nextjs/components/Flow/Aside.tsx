import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/Header.module.css'
import Icon from '../../public/icons/vercel.svg';

export default function Aside() {

  return (
    <div className = {styles.container}>
      <Image src = {Icon} alt = "Program icon" />

      <div className = {styles.links}>
          <Link href = "/">
            <a> Sobre nós </a>
          </Link>
          <button className = "colored-btn">
              Entrar
          </button>
      </div>
    </div>
  )
}
