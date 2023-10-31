import styles from './Mainpage.module.css';
export default function Mainpage({resultRef}) {
    return (
        <iframe ref={resultRef} className={styles.mainpage} title='result' id='result' >iframe is not loaded</iframe>
    )
}