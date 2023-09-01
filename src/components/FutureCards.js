
import "../style.css"
const FutureCards = (props) => {
    return (

        <div className="future-card">
            <div id="date">
                <p>{props.item.date}</p>
            </div>
            <div id="lower-fc">
                <div id="fc-icon">
                    <img src={props.item.day.condition.icon} alt="icon" />
                </div>
                <div id="fc-details">
                    <p>{props.item.day.condition.text}</p>
                    <p>{props.item.day.avgtemp_c}</p>
                </div>

            </div>
            {/* <p>{props.item.day.avgvis_km}</p>
            <p>sunrise:{props.item.astro.sunrise}</p>
            <p>sunset:{props.item.astro.sunset}</p> */}
        </div>

    )
}

export default FutureCards;