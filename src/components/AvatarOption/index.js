export function AvatarOption(props){
    return (
        <div class='col text-center'>
        <input onClick={props.handleChange} name={props.name} type="radio" id={props.id} class="d-none imgbgchk" value={props.id}/>
        <label for={props.id}>
        <img src={props.image} alt={props.description?props.description:"avatar photo"} style={{border:"1px solid black"}} className="rounded"/>
        <div class="tick_container">
            <div class="tick"><i class="fa fa-check"></i></div>
        </div>
        </label>
</div>);
}