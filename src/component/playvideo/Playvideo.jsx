import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/profile.png'
import user_profile from '../../assets/user_profile.jpg'
import { value_converter } from '../../data'
import moment from 'moment'

const Playvideo = ({videoId}) => {

const[apiData,setApiData]=useState(null);
const[channelData,setChannelData] = useState(null);

const fetchVideoData= async() =>{

  const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
  await fetch(videoDetails_url).then(res => res.json()).then(data =>setApiData(data.items[0]));
  
}

const fetchOtherData = async()=>{
   const channelData_url =``
}

useEffect(()=>{
  fetchVideoData();
},[])

  return (
  <div className="play-video">
    {/*<video src={video1} controls autoPlay muted>
    </video>*/} 
   <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   
     <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
    <div className='play-video-info'>
      <p>{apiData?value_converter(apiData.statistic.viewCount):"16K"}Views &bull; 
        
        {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
      <div>
        <span><img src={like} alt="" />125</span>
        <span><img src={dislike} alt="" />2</span>
        <span><img src={share} alt="" />share</span>
        <span><img src={save} alt="" />save</span>
      </div> 
  </div>
  <hr/>
  <div className="publisher">
    <img src={jack} alt="" />
  <div>
  <p>Mernstack</p>
  <span>1M Subscribers</span>
  </div>
  <button>Subscribe</button>
  </div>
  <div className="vid-description">
    <p>Chennal that makes learning Easy</p>
    <p>Subscribe Mernstack to Watch More Tutorial on web development</p>
    <hr/>
    <h4>130 Comments </h4>
    <div className="Comment">
      <img src={user_profile} alt="" />
    </div>
    <h3>Mohammed Fazil<span>1 day ago</span></h3>
    <p>A global computer networks providing a variety of information and cc of interconnected networks using standrdized communication protocols</p>
    <div className="comment-action">
      <img src={like} alt="" />
      <span>244</span>
      <img src={dislike} alt="" />
    </div>
    <div className="Comment">
      <img src={user_profile} alt="" />
    </div>
    <h3>Mohammed Fazil<span>1 day ago</span></h3>
    <p>A global computer networks providing a variety of information and cc of interconnected networks using standrdized communication protocols</p>
    <div className="comment-action">
      <img src={like} alt="" />
      <span>244</span>
      <img src={dislike} alt="" />
    </div>
    <div className="Comment">
      <img src={user_profile} alt="" />
    </div>
    <h3>Mohammed Fazil<span>1 day ago</span></h3>
    <p>A global computer networks providing a variety of information and cc of interconnected networks using standrdized communication protocols</p>
    <div className="comment-action">
      <img src={like} alt="" />
      <span>244</span>
      <img src={dislike} alt="" />
    </div>
  </div>
  </div>
  )
}

export default Playvideo