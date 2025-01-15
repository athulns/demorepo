import './Header.css'
function Header(props) {
    let username=props.user
    if(username!=null){
    return(
        <>
        <h3 id="logindetails">{username} <button>login</button></h3>
        <hr />
        <h1>Navbar</h1>
        <hr />
        </>
    )
}
else{
    return(
        <>
        <h3 id="logindetails">username<button>login</button></h3>
        <hr />
        <h1>Navbar</h1>
        <hr />
        </>
    )
}
}
export default Header;