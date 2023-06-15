import styles from './Card.module.css'
import Button from "./UI/Button.jsx"
import {useState} from "react"


const Card = ({productImg, cardName, cardPrice, handleAddClick, handleDelClick, clear}) => {
    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const incrementCount = () => {
        setCount(prev => prev + 1)
        count >= 0 ? setDisabled(false) : null
    }
    const decrementCount = () => {
        setCount(prev => prev - 1)
        count <= 0 ? setCount(0) : null
        count <= 1 ? setDisabled(true) : null
    }
    const clearCount = () => {
        setCount(0)
    }

    return (<div className={styles.card}>
        <img className={styles.card__img} src={productImg} alt="productImg"/>
        <h2 className={styles.card__name}>{cardName}</h2>
        <div className={styles.card__prices}>
            <span className={styles.card__price}>{cardPrice}</span>
        </div>
        <h2 className={styles.card__count}>{count}</h2>
        <Button
            handleClick={() => {
                handleAddClick()
                incrementCount()
            }}>
            +
        </Button>
        <Button
            disabled={disabled}
            handleClick={() => {
                handleDelClick()
                decrementCount()
            }}>
            -
        </Button>
        <Button
            handleClick={() => {
            clearCount()
            clear()
        }}>
            Clear
        </Button>
    </div>)
}
export default Card