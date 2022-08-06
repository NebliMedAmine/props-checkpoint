import PropTypes from "prop-types";
const row={color:"white"}
const Person=(props)=> {

    return (
        <>
            <center>
                <div style={row}><h1>FullName:{props.FullName}</h1>
                <h2>Proffesion:{props.Profession}</h2></div>
                <table><tr><td>{props.children}</td><td><button onClick={() => props.handleName(`My name is ${props.FullName} `)}>
                    ClickMe
                </button></td></tr></table><br/>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="title">
                <p>Bio:{props.bio}</p>
                <br/>
                </div>
            </center>
        </>
    );
}
Person.defaultProps = {
    FullName:"NebliMohamedAmine",
    Profession:"Student",
    bio: "Hi,I'am NebliMohamedAmine,a high school student and a future engineer"
};
Person.propTypes = {
    FullName:PropTypes.string,
    Profession:PropTypes.string,
    handleName: PropTypes.func,
    bio:PropTypes.string
};
export default Person