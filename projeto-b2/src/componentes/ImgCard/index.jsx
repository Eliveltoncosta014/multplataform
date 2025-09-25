import img1 from "../../assets/Img1.jpg"
export default function ImgCard(props) {
   
  return (
    <div className ="image-card">
        <img src={img1} alt={props.caption|| 'Imagem padrão'}/>
        <p className = "image-card-caption">
        {props.caption}
    
        </p>
    </div>
)
}
