function AddOn(props) {
    return (
        <div className="addOn" onClick={() => props.setAddOns(...props.addOns, props.serviceName)}>
            <div>
            <input type="checkbox"/>
            <div className="service">
            <p className="title">{props.serviceName}</p>
            <p className="description">{props.description}</p>
            </div>
            </div>
            {!props.currentPlan ? <p className="pricing">+${props.price}/mo</p> :
            <p className="pricing">+${props.price * 10}/yr</p>}
        </div>
    )
}

export default AddOn;