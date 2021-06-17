import Image from 'next/image';
import styles from '../../styles/components/Flow/Header.module.css'
import { BsSearch } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';

export default function Header() {

  return (
    <div className = {styles.container}>
        <div className = {styles.searchContainer}>
            <input type="text" placeholder="Procurar..."/>
            <BsSearch/>
        </div>
      
        <div className = {styles.profile}>
            <div className = {styles.profilePic}>
                <Image src = "https://thispersondoesnotexist.com/image" 
                layout = "fill" objectFit = "contain"
                alt = "Program icon" />
            </div>
            <p className = "larger"> Rafa Morais </p>
            <MdExpandMore size = {20}/>
        </div>
    </div>
  )
}
