import styles from "./MainView.module.scss";
import React, {FormEvent, useState} from "react";
import {SubmitButton} from "../../components/SubmitButton/SubmitButton";
import {useNavigate} from "react-router-dom";

const MainView = () => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate()


    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        const el: HTMLElement | null = document.getElementById("validationInfo");
        if (el){
            userName ? navigate("/secondView") : el.style.display = "block"
        }
    }


    return (
        <div className={styles.mainView}>
            <form onSubmit={sendForm} className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                        First things first
                        <input
                            type="text"
                            name='userName'
                            className={styles.formInput}
                            placeholder='Enter your nickname here...'
                            value={userName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                        />
                    </label>
                    <div id='validationInfo' className={styles.validationInfoHidden}>
                        Nickname has to be at least 1 character long
                    </div>
                </div>
                <div className={styles.formFooter}>
                    <SubmitButton buttonText="play"/>
                </div>
            </form>
        </div>
    )
}

export default MainView