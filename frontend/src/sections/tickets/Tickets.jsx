import React from 'react';
import Fade from 'react-reveal/Fade';
import PriceCard from '../../components/PriceCard/PriceCard';
import './tickets.styles.css';

const Tickets = () => {
    return (
        <div className="cennik-wrapper" id='cennik'>
        <Fade delay={500}>
        <div className='cennik-title'>Bilety</div>
        <div className='guide'>Przewodnik wliczony w cene biletu!</div>
        <div className='price-list'>
          <PriceCard title="NORMALNY" content='Osoby dorosłe' price='20 PLN'/>
          <PriceCard title="ULGOWY" content='Młodzież szkolna, studenci, emeryci oraz renciści' price='15 PLN' details='Za okazaniem legitymacji'/>
          <PriceCard title="GRUPOWY" content='Grupy zorganizowane' price='13 PLN'/>
          <PriceCard title="RODZINNY" content='2 dorosłych + 2 dzieci' details='Kazde kolejne dziecko 14 PLN' price='66 PLN'/>
          <PriceCard title="KARTA RODZINY" content='Karta Duzej Rodziny' details='15 PLN za osobę' price='15 PLN'/>
          <PriceCard title="MIESZKAŃCY" content='Mieszkańców Kamiennej Góry' price='1 PLN'/>
        </div>
        </Fade>
            
        </div>
    );
};

export default Tickets;