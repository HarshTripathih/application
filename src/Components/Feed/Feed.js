import React, { useState, useEffect } from "react";
import './Feed.css';


import PostCard from "./Post/PostCard";
import axios from "axios";
// import pic1 from '../Feed/Post/images/pic1.jpeg';
// import pic2 from '../Feed/Post/images/pic2.jpeg';
// import pic3 from '../Feed/Post/images/pic3.jpeg';
// import pic4 from '../Feed/Post/images/pic4.jpeg';
// import pic5 from '../Feed/Post/images/pic5.jpeg';
// import pic6 from '../Feed/Post/images/pic6.jpeg';
// import pic7 from '../Feed/Post/images/pic7.jpeg';
// import pic8 from '../Feed/Post/images/pic8.jpeg';
import Inputpost from "./Inputpost/Inputpost";
import CreateIcon from '@mui/icons-material/Create';
import PhotoIcon from '@mui/icons-material/Photo';
import { useAuth0 } from "@auth0/auth0-react";




const Feed = () => {
    // var [date , setdate] = useState(new Date());
    const {user} = useAuth0();
    

    const [inputdata, setinputdata] = useState('');
    const [Posts, setPosts] = useState([]);
    const [inputtitle, setinputtitle] = useState('');


    async function getPosts() {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        console.log(data.posts)
        setPosts(data.posts);
    }

    //mounting a array obect by using empty dependencies array
    useEffect(() => {
        getPosts()
    }, [])

    // create or mounting a current  date and time in use effect
    // useEffect(()=>{
    //     var timer = setInterval(()=>setdate(new Date()),100)
    //     return function cleanup(){
    //         clearInterval(timer)
    //     }
    // }); 

    // useEffect(() => {
    //     // getPosts()
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res =>{
    //         console.log(res.data);
    //         setposts(res.data);
    // by using axios method
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [])


    function addNewPost(e) {
        e.preventDefault()
        //write the logic to add the post 

        const copyArray = [...Posts]
        copyArray.unshift({
            name: user?.given_name,
            id: 1,
            body: inputdata,
            userId: user?.nickname,
            tags: ['HTML', "CSS"],
            title: inputtitle,
            reactions: 0,
            time:'2pm',
        })
        setPosts(copyArray)
        setinputdata("")
        setinputtitle("")

    }



    return (
        <div className="Cards-Container">



            <div className="box">
                <div className="container-inside">
                    <div className='input-title-container'>
                        <CreateIcon />
                        <form>
                            <input
                                type='text'
                                placeholder='Title...'
                                value={inputtitle}
                                onChange={(e) => setinputtitle(e.target.value)}
                            />

                        </form>
                    </div>
                    <div className="input_container">
                    <CreateIcon />
                        <form>
                            <input
                                type='text'
                                placeholder="What's in you Mind...."
                                value={inputdata}
                                onChange={(e) => setinputdata(e.target.value)}
                            />
                            <button onClick={addNewPost} >Post</button>
                        </form>
                    </div>

                    <div className='input_items'>
                        <Inputpost
                            Icon={PhotoIcon}
                            title='Photo'
                            color='#70B5f9'
                        />
                    </div>
                </div>

                {Posts?.map((value) => (
                    <PostCard
                        
                        time={value.time}
                        name={value.name}
                        key={value.id}
                        body={value.body}
                        userId={value.userId}
                        id={value.id}
                        title={value.title}
                        tags={value.tags}
                        likeCount={value.reactions}
                        // profile={value.profile}
                    />
                ))}
            </div>
            {/* <Card name={state.name} setState={setStateName} /> */}
        </div>
    );
}
export default Feed;