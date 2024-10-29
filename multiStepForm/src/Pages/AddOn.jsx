function AddOn(props) {
    const item = {
        serviceName: props.serviceName,
        price: props.price
    }

    return (
        <div className="addOn" 
            onClick={() => {
                if (props.addOns.find(a => a.serviceName === props.serviceName)) return;
                props.setAddOns(prevAddOns => [...prevAddOns, item])
            }}>
            <div>
            <input type="checkbox"/>
                <div className="service">
                    <p className="title">{props.serviceName}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            {!props.paymentPlan ? <p className="pricing">+${props.price}/mo</p> :
            <p className="pricing">+${props.price * 10}/yr</p>}
        </div>
    )
}

export default AddOn;