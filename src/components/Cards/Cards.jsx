import styles from  './Cards.module.css'

const Cards = ({children}) => {
    return (
        <div className={styles.card__wrapper}>{children}</div>
    )
}
export default Cards