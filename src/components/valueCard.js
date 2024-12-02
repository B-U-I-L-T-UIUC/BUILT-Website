import '../styles/valueCard.css';


function ValueCard(props) {
    return (
        <div className='valueCard'>
            <section className='valueImage'>
                <img className='valueCardImage' src={props.url} />
            </section>
            <section className='valueText'>
                <h3 className='merriweather'>{props.value}</h3>
                <p>{props.text}</p>
            </section>
        </div>
    )
}

export default ValueCard;