import Image from 'next/image';
import styles from '../../styles/components/Home/Header.module.css'
import Icon from '../../public/icons/teorienta.png';

export default function Header() {
  return (
    <>
    <div className = {styles.container}>
      <div className = {styles.logoContainer}>
        <Image src = {Icon} alt = "Program icon" 
          layout = "fill" objectFit="contain"/>
      </div>
    </div>
    </>
  )
}
