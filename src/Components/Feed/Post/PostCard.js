import React, { useState } from "react";
import './PostCard.css';
import { useAuth0 } from "@auth0/auth0-react";

const PostCard = ({ name, tags, profile, body, userId, id ,time, title, likeCount }) =>{
    const { user } = useAuth0();

    const [isLiked, setisLiked] = useState(false);
    // const [islikeCount, setlikeCount] = useState(0)
    function handelClick(){
        if(isLiked === true){
            setisLiked(false)
        }
        else{
            setisLiked(true)
        }
    }

    return(
        <div className="Card-box">

            <div className="left-part-postbox">
                <div className="image-box">
                    <img src={profile} alt="error" />
                </div>
            </div>
            <div className="right-part-postbox">
                <div className="row1-box">
                    <div className="row1-box-left">
                        <div className="Name-box"><p><b>{name?name:'Alex'} &nbsp;</b></p></div>
                        <div className="userid-box"><p>@{userId?userId:'alex123'}</p></div>
                        <div className="dot"><i className="fa fa-circle" aria-hidden="true"></i></div>
                        <div className="date-box"><p>{time}</p></div>
                    </div>
                    <div className="row1-box-right">
                        <div className="Three_dot">
                            <div className="Three_dot_circle">
                                <p><i className="fa fa-ellipsis-h" aria-hidden="true"></i></p>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="title-box"><p><b>{title}</b></p></div>
                <div className="body-box"><p>{body}</p></div>
                <div className="post-icons">
                    <div className="message-icon"><p><i class="fa-regular fa-message"></i></p></div>
                    <div className="retweet-icon"><p><i class="fa-solid fa-retweet"></i></p></div>
                    <div className="like-icon" onClick={handelClick}><p>{isLiked ?<i class="fa fa-heart" aria-hidden="true"/>:<i class="fa-regular fa-heart"/>}
                    </p><span>{isLiked? likeCount + 1 : likeCount}</span>
                    </div>
                    <div className="impresion-icon"><p><i class="fa-sharp fa-solid fa-chart-simple"></i></p></div>
                    <div className="upload-icon"><p><i class="fa-solid fa-upload"></i></p></div>
                </div>
                 {/* <div className="id-box"><p>{id}</p></div> */}
            </div>


            {/* <h1>My Name is : {name}</h1>
            <input type="text" onChange = {(e)=> setState(e.target.value)} /> */}
        </div>
    );
}
export default PostCard;