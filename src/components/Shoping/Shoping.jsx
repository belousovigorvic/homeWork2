import styles from './Shoping.module.css'

const Shoping = ({basket}) => {
    return (
        <div className={styles.wrapper}>
            <ol className={styles.list}>{basket.map((item, index) => <li key={index}>{item.name}</li>)}</ol>
            <h3 >Товаров в корзине: {basket.length}</h3>
        </div>
    )
}
export default Shoping