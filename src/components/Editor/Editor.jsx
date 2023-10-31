import styles from './Editor.module.css';
import CodeEditor from './CodeEditor';
import HtmlSvg from '../../svgs/HtmlSvg';
import CssSvg from '../../svgs/CssSvg';
import JsSvg from '../../svgs/JsSvg';


export default function Editor({ htmlVal,setHtml, cssVal, setCss,  jsVal, setJs }) {
    return (
        <div className={styles.Editor}>
            <CodeEditor Icon={HtmlSvg} title='HTML' inputVal={htmlVal} setInputVal={setHtml} />
            <CodeEditor Icon={CssSvg} title='CSS' inputVal={cssVal} setInputVal={setCss}  />
            <CodeEditor Icon={JsSvg} title='JS' inputVal={jsVal} setInputVal={setJs} />
        </div>
    )
}