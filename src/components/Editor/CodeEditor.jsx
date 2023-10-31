import { RiSettings5Fill } from 'react-icons/ri';
import styles from './Editor.module.css';
import { GoChevronDown } from 'react-icons/go';


export default function CodeEditor({ Icon, title, inputVal , setInputVal }) {

    function handleTextArea(e) {
        setInputVal(e.target.value);
    }

    return (
        <div className={styles.textarea1}>
            <div className={styles.textarea_upper_div1}>
                <span className={styles.icon_h2}>
                    <Icon />
                    <h2 className={styles.h2}>{title}</h2>
                </span>

                <div className={styles.back_box}>
                    <button className={styles.btn_setting}> <RiSettings5Fill fill='white' /></button>
                    <button className={styles.down_errow}> < GoChevronDown size={14} fill='white' /></button>
                </div>
            </div>
            <textarea onChange={handleTextArea} value={inputVal} name="" className={styles.textarea_lower_div1} cols="59" rows="20"></textarea>
        </div>
    )
}

