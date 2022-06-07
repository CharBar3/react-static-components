const Visitor = (props) => {
    return (
        <div className="visitorsDiv">
            <p className="titleStyle">{props.whichTitle}</p>
            <div className="blockInner">
            <p>{props.whichData}</p>
            <div className="visitorChart">
                <p>visitor info graph</p>
            </div>
            </div>
        </div>
    )
}

export default Visitor