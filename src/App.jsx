import "./App.css"
import {useState} from "react"
import Container from "./components/Container/Container.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Card from "./components/Card/Card.jsx"
import Header from "./components/Header/Header.jsx"
import Shoping from "./components/Shoping/Shoping.jsx"

import products from "./products.js"


const App = () => {

    const [basket, setBasket] = useState([]);

    const addProduct = item => {
        setBasket(prevBasket => {
            const newBasket = [...prevBasket, item]
            return newBasket
        });
    };

    const deleteProduct = item => {
        setBasket(prevBasket => {
            const itemIndex = prevBasket.findIndex(product => product.id === item.id)
            const updatedBasket = [...prevBasket]
            updatedBasket.splice(itemIndex, 1)
            return updatedBasket
        });
    };

    const clearCardProduct = id => {
        setBasket(prevBasket => {
            const updatedBasket = prevBasket.filter(item => item.id !== id);
            return updatedBasket
        });
    };

    return (
        <Container>
            <Header/>
            <Cards>
                {products.map(item => (
                    <Card
                        handleAddClick={() => addProduct(item)}
                        handleDelClick={() => deleteProduct(item)}
                        clear={() => clearCardProduct(item.id)}
                        key={item.id}
                        cardName={item.name}
                        cardPrice={`${item.price} som`}
                        productImg={item.img}
                    />
                ))}
            </Cards>
            <Shoping basket={basket}/>
        </Container>
    )
}

export default App;
