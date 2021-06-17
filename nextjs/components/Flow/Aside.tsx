import Image from 'next/image';
import styles from '../../styles/components/Flow/Aside.module.css'
import Icon from '../../public/icons/vercel.svg';

import { AiFillHome, AiOutlineUpload, AiFillFilter } from 'react-icons/ai';

export default function Aside() {

  return (
    <div className = {styles.container}>
      <div className = {styles.logoContainer}>
        <Image src = {Icon} alt = "Program icon" />
      </div>

      <button className = {styles.selected}>
        <AiFillHome/> Dashboard
      </button>

      <p className = "larger"> Funções </p>
      <button>
        <AiOutlineUpload/> Upload
      </button>
      <button>
        <AiFillFilter/> Filtragem
      </button>
    </div>
  )
}
