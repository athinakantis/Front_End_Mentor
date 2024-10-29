function PlanCard(props) {
    return (
        <div className={`planCard ${props.gamePlan === props.plan ? 'active' : 'inactive'}`} onClick={() => props.setGamePlan(`${props.plan}`)}>
        <img src={`../assets/images/icon-${props.plan}.svg`} alt={props.alt} />
        <div className="description">
        <p className="title">{props.plan}</p>
        <p className="pricing">{!props.yearlyPlan ? `$${props.monthPrice}/mo` : `$${props.yearPrice}/yr`}</p>
        {props.yearlyPlan && <p className="free">2 months free</p>}
        </div>
    </div>
    )
}

export default PlanCard;