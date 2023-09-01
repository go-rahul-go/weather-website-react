import "../style.css";
import FutureCards from "./FutureCards";

const MainCard = (props) => {
    return (
        <>
        <div className="main-card">
            <div id="top">
                <img src={props.city.icon} alt="icon" />
                <span id="condition">{props.city.condition}</span>
            </div>
            <div id="weather-bar">
                <div className="wb-box">
                    <p className="wb-text">temp:</p>
                    <p className="wb-values">{props.city.temp}</p>
                    <i class="fa-solid fa-temperature-three-quarters"></i>
                </div>
                <div className="wb-box">
                    <p className="wb-text">feels:</p>
                    <p className="wb-values">{props.city.feelsLike}</p>
                    <i class="fa-solid fa-temperature-high"></i>
                </div>
                <div className="wb-box">
                    <p className="wb-text">humidity:</p>
                    <p className="wb-values">{props.city.humidity}%</p>
                    <i class="fa-regular fa-face-grin-beam-sweat"></i>
                </div>
            </div>
            <div id="city-details">
                <p><i class="fa-regular fa-compass"></i> {props.city.name}</p>
                <p><i class="fa-solid fa-location-crosshairs"></i> {props.city.state}</p>
                <p><i class="fa-solid fa-globe"></i> {props.city.country}</p>
                
            </div>
        </div>
        <div className="future-container">
        {
            props.future.map((data)=>{
                return (<FutureCards item={data}/>)
            })
        }
        </div>
       
        </>
    )
}


export default MainCard;