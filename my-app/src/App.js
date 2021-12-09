import './App.css';
import Item from './Item';
import IconBitcoin from './bitcoin.png';
import IconRtx from './rtx.png';
import IconRc from './revell.png';
import IconAoE4 from './aoe4.png';
import IconStiga from './stiga.png';
import Doom from './doom.jpg';
import React, { useRef, useState } from 'react';

export default function App(props) {

  const content = useRef();
  
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleBuy = (name, cost) => {
    setShoppingCart([...shoppingCart, { name: name, cost: cost }]);
  }

  return (

    <div className="App">

      <header className="App-header">

        <p>
          Välkommen till Max haxxade webbshop.
        </p>
        <img alt=" " src={Doom} />
        <div
        onClick={() => content.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        className="App-link"
        >
          Börja shoppa
        </div>
      </header>
      <div className="App-content" ref={content}>

        <h3>
          Varor
        </h3>
          <Item 
          name='Age of Empires IV'
          cost={600}
          icon={IconAoE4}
          onBuy={handleBuy}
          />
          <Item
          name='Stiga AXE Padel Racket'
          cost={600}
          icon={IconStiga}
          onBuy={handleBuy}
          />
          <Item
          name='Bitcoin'
          cost={600}
          icon={IconBitcoin}
          onBuy={handleBuy}
          />
          <Item
          name='GeForce RTX 3090'
          cost={600}
          icon={IconRtx}
          onBuy={handleBuy}
          />
          <Item
          name='Revell RC'
          cost={600}
          icon={IconRc}
          onBuy={handleBuy}
          />
        <h3>
          Varukorg
        </h3>

        <div>
        {shoppingCart.map((item, index) => (
          <p key={index}>{item.name} - {item.cost}kr</p>
        ))}
        </div>

        <p>
          <b>
            Totalt: {shoppingCart.reduce((acc, curr) => { acc += curr.cost; return acc; }, 0)}kr
          </b>
        </p>

        <div>
          <input value="Clear" type="button" onClick={() => setShoppingCart([])} />
        </div>

      </div>
    </div>
  );
}
