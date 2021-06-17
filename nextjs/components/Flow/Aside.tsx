import Image from 'next/image';
import styles from '../../styles/components/Flow/Aside.module.css'
import Icon from '../../public/icons/teorienta.png';

import { AiFillHome, AiOutlineUpload, AiFillFilter, 
  AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';

export default function Aside() {
  const [showAside, setShowAside] = useState("translateX(0px)");

  return (
    <>
    {showAside === "translateX(-240px)" ? 
      <button onClick = {() => {setShowAside("translateX(0px)")}}
        className = {styles.showBtn}>
          <AiFillCaretRight/>
      </button>
    : <></>}
    <div className = {styles.container} style = {{ transform: showAside }}>
      <div className = {styles.title}>
        <div className = {styles.logoContainer}>
          <Image src = {Icon} alt = "Program icon" />
        </div>
        <button onClick = {() => {setShowAside("translateX(-240px)")}}>
          <AiFillCaretLeft/>
        </button>
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
    </>
  )
}
