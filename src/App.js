import Card from './component/card'
import './App.css';
import imageSedans from './images/icon-sedans.svg'
import imageSuvs from './images/icon-suvs.svg'
import imageLuxary from './images/iconLuxury.svg'

function App() {
  return (
    <div className="main">
      <div className='wrapper'>
        <Card 
        logo= {imageSedans}
        color='hsl(31, 77%, 52%)' 
        title='SEDANS' 
        subTitle='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'/>

        <Card 
        logo= {imageSuvs}
        color='hsl(184, 100%, 22%)' 
        title='suvs' 
        subTitle='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'/>

        <Card 
        logo={imageLuxary}
        color='hsl(179, 100%, 13%)' 
        title='Luxury' 
        subTitle='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'/>
      </div>
    </div>
  );
}

export default App;
