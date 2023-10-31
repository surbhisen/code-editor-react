import { BiLogoCodepen } from 'react-icons/bi'
import { HiOutlinePlusSm } from 'react-icons/hi'
import { AiFillHeart } from 'react-icons/ai'
import { RiSettings5Fill } from 'react-icons/ri'
import { BsCodeSlash } from 'react-icons/bs'

import styles from './Header.module.css'
export default function Header({handleRun}) {

    return (
        <header className={styles.header}>
            <div className={styles.left_div}>
                <div className={styles.icon_heading}>
                    <div className="icon">< BiLogoCodepen size={40} fill='white' /></div>

                    <p className={styles.p1}>
                        Simple Code Editor HTML,CSS,JS,OutPut</p>
                </div>
                <div className={styles.div2}>
                    <p className={styles.p2}>Surbhi Sen</p>
                    <button className={styles.follow}>< HiOutlinePlusSm size={18} /> follow</button>
                </div>


            </div>
            
            <div className={styles.right_div}>
                <Btn Icon={<AiFillHeart fill='white' size={19.5} />} title='' />
                <Btn runCode={handleRun} Icon={<BsCodeSlash fill='white' size={19.5} />} title='Run' />
                <Btn active Icon={<RiSettings5Fill fill='white' size={19.5} />} title='Setting' />
                <Btn title='Log In' />
            </div>

        </header>

    )

}

const Btn = ({active, runCode, Icon, title}) => {
    return (
        <button onClick={runCode} className={`${styles.right_btn1} ${active ? styles.active : null}`}>{Icon}{title}</button>
    )
}
