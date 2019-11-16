import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
 
  
  constructor(props){
    
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
         tura_sayisi:0,
         yazi_sayisi:0,
         toplam:0
    }
  }

/*
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
*/


  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({donuyor: true});

    let i = Math.floor(Math.random() * Math.floor(2));;
    console.log(i);
    if(i==0)
    {
     this.setState({ 
      yazi_sayisi:(this.state.yazi_sayisi+1),
      side:"tura"
      })
    }
    else
    {
      this.setState({ 
     
      tura_sayisi:(this.state.tura_sayisi+1),
      side:"yazi"
      })
    }

    this.setState({ 
     
      toplam:(this.state.toplam +1)
      })
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 1000);

  };

  render(){
    return (
   
     <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} >At!</button>
        <p>
            Toplam
            <strong> {this.state.toplam}   </strong>
            atıştan
            <strong> {this.state.tura_sayisi}</strong>
            ü tura
            <strong> {this.state.yazi_sayisi} </strong>
            si yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;