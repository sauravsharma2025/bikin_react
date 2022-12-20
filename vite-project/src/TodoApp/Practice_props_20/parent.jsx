import { B } from "./B";
export const Myprop=({pata})=>{
    return(
        <>
        <p>Parent{pata}</p>
        <B Surname="Sharma"/>
        </>
    )
}
Myprop.defaultProps ={
    name:"NA",
    phoneNumber:"Not Disclosed"
};
