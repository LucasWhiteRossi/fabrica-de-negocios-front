export function CandyCard(props){
    
    if (!props.noCard){
        return (
            <div className="card p-3 m-3" style={{backgroundColor:"rgba(121, 0, 223,0.4)", borderRadius: "20px"}}>
                {props.children}
            </div>
        );
    } else {
        return (
            <div className="d-flex flex-row p-3 m-3" style={{backgroundColor:"rgba(121, 0, 223,0.4)", borderRadius: "20px"}}>
                {props.children}
            </div>
        );
    }
    
}