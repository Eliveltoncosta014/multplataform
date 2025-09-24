
const Header = (props) => {
    const headerStyle ={
        bachgroud:'#fff',
        padding: '30',
        textAling: 'center',
        borderBottom:'2px solid #696969',
  }
    const titleStyle ={
        margin:0,
        fontSize: '24 px',
        color:"#191970",
    }


    return (
     <header style={headerStyle}>
        <h1 style={titleStyle}>{props.title}</h1>
      </header>
   );
}
export default Header;