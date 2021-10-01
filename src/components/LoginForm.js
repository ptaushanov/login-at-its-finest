import styles from "./LoginForm.module.css"

const LoginForm = () => {
    return (
        <form className={styles.form} action="/" method="GET">
            <label className={styles.label} htmlFor="username">Name</label>
            <input className={styles.input} type="text" name="username" id="username" />
            <label className={styles.label} htmlFor="pasword">Password</label>
            <input className={styles.input} type="password" name="password" id="password" />
            <button className={styles.submit} type="submit">Submit</button>
        </form>
    );
}
 
export default LoginForm;