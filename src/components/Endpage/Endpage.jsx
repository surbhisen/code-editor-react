import styles from './Endpage.module.css';
import { CgGitFork } from 'react-icons/cg'
export default function Endpage() {
    return(
        <div className={styles.Endpage__container}>
           <div className={styles.Endpage_div1}>
            <button className={styles.Endpage_btn1}>Console</button>
            <button className={styles.Endpage_btn1}>Assets</button>
            <button className={styles.Endpage_btn1}>Comments</button>
            <button className={styles.Endpage_btn1}>Shortcuts</button>
            
           </div>
           <div className={styles.Endpage_div2}>
            <button className={styles.Endpage_btn1}><CgGitFork style={{ transform: 'rotate(90deg)' }} size={16}/>Fork</button>
            <button className={styles.Endpage_btn1}>Embed</button>
            <button className={styles.Endpage_btn1}>Export</button>
            <button className={styles.Endpage_btn1}>Share</button>
            </div>    
        </div>
      
    )
}