import '../styles/committeeCard.css'

const CommitteeCard =  ({lead}) => {
    return (
    <div className="orange-card">
        <h3 className="lead-name">{lead}</h3>
    </div>
    )

}

export default CommitteeCard;

// name, , email, description, meetingtimeandroom