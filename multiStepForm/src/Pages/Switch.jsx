function Switch(props) {
    return (
        <div className="switch">
            <p className={!props.yearlyPlan ? active : inactive}>Monthly</p>
            <button onClick={() => props.setYearlyPlan(!yearlyPlan)} />
            <p className={props.yearlyPlan ? active : inactive}>Yearly</p>
        </div>
    )
}

export default Switch