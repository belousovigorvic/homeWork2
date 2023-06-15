import styles from './Button.module.css'

const Button = ({children, handleClick, disabled}) => {
    return (
        <button disabled={disabled} className={styles.btn} onClick={handleClick}>{children}</button>
    )
}
export default Button