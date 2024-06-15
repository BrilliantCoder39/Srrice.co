import './style.css';

 function Personal_Data1({image, text, name, type}){
    return(
    <div className='P_data'>
        <div className='image_round'>
            <img src={image} className='round_image' width={"100%"}/>
        </div>
        <div className='content1'>
            <div className='text'>
                {text}
            </div>
            <div className='name_type'>
                <div className='name'>{name}</div>
                <div className='type'>{type}</div>
            </div>
        </div>
    </div>
    );
}
export default function Personal_Slide1({itemss})
{
    return(
       <div>
            {itemss.map((item,key)=>(<Personal_Data1 image={item.image} text={item.text} name={item.name} type={item.type}/>))
                }
       </div>
    );

}