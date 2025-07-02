interface ButtonProp {
    variant  : "primary" | "secondary";
    size : "sm"| "md"|"lg";
    text :string ;
    starticon?: any;
    endicon?:any;
    onclick?:()=>void
}
const variantStyles = {
    primary : "bg-purple-300 text-white", 
    secondary : "bg-purple-600 text-purple-600" 
}
const sizeStyle ={
    sm :"py-1 px-2",
    md:"py-2 px-4",
    lg:"py-4 px-6"
}

const defaultStyles = "rounded-md flex"

function Button(props:ButtonProp){
    return(
        <>
        <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyle[props.size]}`}
        > {props.starticon} {props.text} {props.endicon}</button>
        </>
    )
}
export default Button;
