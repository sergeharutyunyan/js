import styles from './info.module.css'
import './info.css'

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <button className={`${styles.myOtherButton} my-button`}>Click me in the info component</button>
        </div>
    );
}

export default Info;

