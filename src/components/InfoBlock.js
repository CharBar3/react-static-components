const InfoBlock = (props) => {
    return (
        <div className="infoBlockDiv">
            <p className="titleStyle">{props.whichTitle}</p>
            <div className="blockInner">
            <p>{props.whichData}</p>
            <p>{props.whichData2}</p>
            <p>{props.whichData3}</p>
            </div>
        </div>
    )
}

export default InfoBlock