function Switch(props) {
    return (
        <div className="switch">
            <p className={!props.currentPlan ? 'active' : 'inactive'}>Monthly</p>
            <button className={!props.currentPlan ? 'Monthly' : 'Yearly'} onClick={() => props.setYearlyPlan(!props.currentPlan)}></button>
            <p className={props.currentPlan ? 'active' : 'inactive'}>Yearly</p>
        </div>
    )
}

export default Switch