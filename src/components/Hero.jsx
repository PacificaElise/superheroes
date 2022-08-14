import '../styles/hero.css';

const Hero = (props) => {
  return (
    <div className='hero'>
      <div className='hero-card'>
        <div className='img-container'>
          <img src={props.img} alt="marvel-hero"/>
        </div>
        <div className='hero-name'>
        {props.name}
        </div>
        <div className='hero-alterego'>
        {props.alterego}
        </div>
        <div className='hero-desc'>
        {props.description}
        </div>
      </div>
    </div>
  );
}

export default Hero;