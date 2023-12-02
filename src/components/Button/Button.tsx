import React from "react";

interface ButtonProps {
    label: string;
    class: string;
}

const Button = (props: ButtonProps) => {
    
 
    return (<button className={props.class}>{props.label}</button>);
}
 
export default Button;