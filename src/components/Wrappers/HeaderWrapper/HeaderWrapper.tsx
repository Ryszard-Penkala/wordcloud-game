import styles from "./HeaderWrapper.module.scss";
import {NavLink} from "react-router-dom";

const HeaderWrapper = () => {
    return(
        <header className={styles.navigationHeader}>
            <div className={styles.navigationPanel}>
                <NavLink to='/' className={({isActive})=>isActive ? styles.navigationLinkActive : styles.navigationLink}>Main Page</NavLink>
            </div>
            <div className={styles.navigationTitle}>
                <h2>
                    Wordcloud Game
                </h2>
            </div>
            <div className={styles.userPanel}>
                Jakieś logowanko
            </div>
        </header>
    )
}

export default HeaderWrapper;