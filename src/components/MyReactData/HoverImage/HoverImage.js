import './HoverImage.css'
export default function HoverImage({image,text,hoverStyle,width,height,imgStyle})
{
    return(
    <div class="gallery">
        <a target="_blank" href="img_5terre.jpg">
            <img src={image} alt="Cinque Terre" width={width} height={height} className={imgStyle}/>
        </a>    
        <div className='overlay'><div className={hoverStyle}>{text}</div></div>
    </div>
    );
   
}