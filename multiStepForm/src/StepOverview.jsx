import './StepOverview.css'

function StepOverview(){
    return(
        <div id="stepOverview">
            <div className="stepNum">
                <p className="num">1</p>
                <div className="stepDetails">
                    <p>Step 1</p>
                    <p>Your info</p>
                </div>
            </div>
            <div className="stepNum">
                <p className="num">2</p>
                <div className="stepDetails">
                    <p>Step 2</p>
                    <p>Select plan</p>
                </div>
            </div>
            <div className="stepNum">
                <p className="num">3</p>
                <div className="stepDetails">
                    <p>Step 3</p>
                    <p>Add-ons</p>
                </div>
            </div>
            <div className="stepNum">
                <p className="num">4</p>
                <div className="stepDetails">
                    <p>Step 4</p>
                    <p>Summary</p>
                </div>
            </div>
        </div>
    )
}

export default StepOverview;