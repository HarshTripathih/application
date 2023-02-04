import React,{useState} from "react"; 
import './Inputpost.css';


const Inputpost = ({ Icon, title, color }) => {

    const [Photo, setPhoto] = useState([]);

    // const uploadImage(){

    // }

    return(
        <div type="file" className='inputItems'>
            {Icon && <Icon style={{ color: color }} />}
            <p>{title}</p>
        </div>
    );
}
export default Inputpost;