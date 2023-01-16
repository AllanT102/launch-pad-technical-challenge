import '../styles/Homepage.css'
import drone from '../images/drone.webp'

function Homepage() {
  return (
    <div className="homepage-container">
        <div className="title-container">
            <img src={drone} alt="" className="drone-img"/>
            <div className="title-text-container">
                <h1>Take flight with <span className="colored-text">Druber</span></h1>
                <p>Revolutionzing the way we travel using drone technology and AI.</p>
                <button className="book-button">Book now</button>
            </div>
        </div>
        <div className="pricing-model-container">
            <h1>Models</h1>
            <div className='card'>
                <h1 className="drone-type">Luxurious AX123-4 Drone (4 seat)</h1>
                <p>$10000000 / 1 minute</p>
                <ul className="benefits">
                    <li className="list-item">Unlimited Popcorn</li>
                    <li className="list-item">Unlimited Fried Rice</li>
                    <li className="list-item">Unlimited Access to Netflix</li>
                </ul>
            </div>
            <div className='card'>
                <h1 className="drone-type">Luxurious AX123-4 Drone (4 seat)</h1>
                <p>$10000000 / 1 minute</p>
                <ul className="benefits">
                    <li className="list-item">Unlimited Popcorn</li>
                    <li className="list-item">Unlimited Fried Rice</li>
                    <li className="list-item">Unlimited Access to Netflix</li>
                </ul>
            </div>
            <div className='card'>
                <h1 className="drone-type">Luxurious AX123-4 Drone (4 seat)</h1>
                <p>$10000000 / 1 minute</p>
                <ul className="benefits">
                    <li className="list-item">Unlimited Popcorn</li>
                    <li className="list-item">Unlimited Fried Rice</li>
                    <li className="list-item">Unlimited Access to Netflix</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Homepage;
