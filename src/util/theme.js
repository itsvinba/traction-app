import styled from "styled-components";
import { luma } from './util';
const colours = {
    lightRed: {
        hex: "#FE938C",
        rgb: [254, 147, 140],
    },
    white: {
        hex:"#ffffff",
        rgb: [255, 255, 255],
    },
    black:{
        hex:"#000000",
        rgb: [0, 0, 0],
    },
    red: {
        hex: "#FF6978",
        rgb: [255, 105, 120],
    },
    lightBlue: {
        hex: "#2191FB",
        rgb: [33, 145, 251],
    },
    blue: {
        hex: "#7D83FF",
        rgb: [125, 131, 255],
    },
    green: {
        hex: "#7CEA9C",
        rgb: [124, 234, 156],
    },
    yellow: {
        hex: "#FFFF96",
        rgb: [255, 255, 150],
    },
    orange:{
        hex: "#ffda75",
        rgb: [255, 218, 117],
    },
    purple:{
        hex:"#c86dd7",
        rgb:[200, 109, 215],
    },
    darkPurple:{
        hex:"#844bc5",
        rgb:[132, 75, 197],
    },
    lightGrey:{
        hex: "#f5f5f5",
        rgb: [245, 245, 245],
    },
    darkerGrey:{
        hex:"#c8c8c8",
        rgb:[200, 200, 200],
    },
    boxShadow:"0px 10px 20px rgba(220,220,220,0.3)",
    borderRadius:{
        large:"10px",
        small:"5px",
    },
};

function colorCalc(props){
    if ( luma(colours[props.color].rgb) < 170 && !props.disabled) {
        return "white";
    }else{
        return "rgba(0,0,0,0.3)";
    }
}



export const Button = styled.div`
    cursor:pointer;
    background:white;
    display:inline-flex;
    align-items:center;
    border-radius:5px; 
    justify-content:center;
    text-align:center;
    pointer-events:${props => props.disabled === true ?"none":"initial"};
    font-size:${props => props.size ? props.size + "px" : "initial"}; 
    color:${props => colours[props.color].hex};
    padding:0.625em 1.25em;
    font-family:Circular;
    box-shadow: 0px 4px 20px rgba(${props => (colours[props.color].rgb.join(","))}, 0.3);
    transition:box-shadow 0.3s, transform 0.3s;
    user-select: none;
    transition:box-shadow 0.3s, transform 0.3s, background-color 0.3s, color 0.3s;
    &:hover{
        transform:translateY(-4px);        
        box-shadow: 0px 10px 20px rgba(${props => (colours[props.color].rgb.join(","))}, 0.3);
    }
    &:active{
        background:rgb(248, 248, 248);
        transform:translateY(0px); 
        box-shadow:0px 4px 10px rgba(${props => (colours[props.color].rgb.join(","))}, 0);
        transition:box-shadow 0.1s, transform 0.1s;
    }
`;

export const FilledButton = Button.extend`
    color:${colorCalc};
    background:${props => props.disabled === true ?colours.darkerGrey.hex:colours[props.color].hex};    
    &:active{
        background:rgb(${props => (colours[props.color].rgb.join(","))});
        transition:box-shadow 0.1s, transform 0.1s;
    };
`;

export default {
    ...colours,
};