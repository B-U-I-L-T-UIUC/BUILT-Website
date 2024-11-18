import "../styles/committeeCard.css";

const CommitteeCard = ({
  name,
  lead,
  netid,
  description,
  meeting,
  channel,
}) => {
  return (
    <div className="orange-card">
      <div className="horizontal-stack">
        <div className="vertical-stack">
          <h3 className="name"> {name} <br/> Committee</h3>
          <h4 className="lead">{lead}</h4>
          <h5 className="email">{netid}@illinois.edu</h5>
        </div>
        <div className="vertical-stack">
          <p className="description">{description}</p>
          <p className="channel">Checkout #{channel} in our slack!</p>
          <h5 className="meeting">{meeting}</h5>
        </div>
      </div>
    </div>
  );
};
export default CommitteeCard;
