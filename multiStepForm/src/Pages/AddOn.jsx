import { useState } from "react";

function AddOn(props) {
    const [checked, setChecked] = useState(false)

    const item = {
        serviceName: props.serviceName,
        price: props.price
    }


    function handleClick(serviceName) {
        if (props.addOns.find(a => a.serviceName === serviceName)) {
            props.setAddOns(props.addOns.filter(a => a.serviceName !== serviceName))
            setChecked(!checked);
        };
        props.setAddOns(prevAddOns => [...prevAddOns, item])
        setChecked(!checked)
    }

    return (
        <div className="addOn" 
            onClick={() => handleClick(props.serviceName)}>
            <div>
            <input type="checkbox" checked={checked} readOnly/>
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