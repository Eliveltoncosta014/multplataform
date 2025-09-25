const Banner = (props) =>{
   /*
   
    o childrem permite que voce passe e renderize
    o conteúdo dinâmico no componente de um React.
   
   */
   
    return(
        <section>
        {props.children}
        </section>
    )
}
export default Banner;