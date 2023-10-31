import {styles} from './Button.module.css'
import {RiSettings5Fill} from 'react-icons/ri'
export default function Button() {
    return(
        <button type='button' className={styles.btn1}>
            <RiSettings5Fill/>
            <span>Settings</span>
        </button>
    )
}
