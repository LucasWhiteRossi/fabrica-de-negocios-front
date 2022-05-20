export function CandyCard(props){
    
    return (
        <div className="card p-3" style={{backgroundColor:"rgba(121, 0, 223,0.5)", borderRadius: "20px"}}>
            {props.children}
        </div>
    );
}