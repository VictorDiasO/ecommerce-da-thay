import React from 'react';
import { Link, BrowserRouter, Redirect } from 'react-router-dom';

import product_card from '../../database/product_data';
console.log(product_card);

const MainContent = () => {
    console.log(product_card);

    const goToItemPage = (id) => {
        window.location.href = 'http://localhost:3000/comprar/' + id;
    }

    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} alt='foto' />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <BrowserRouter>
                    <div className="btn" onClick={() => {
                        goToItemPage(item.id)
                    }}>
                        <Link to={"/comprar/" + item.id} style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.5)' }}>Comprar</Link>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
    return(
        <div className="main_content">
            <h3>COMPRE AQUI</h3>
            {listItems}
        </div>
    );


}

export default MainContent;