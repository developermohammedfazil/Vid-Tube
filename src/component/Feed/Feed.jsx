import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { API_KEY, value_converter } from '../../data';
import './Feed.css';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            
            const response = await fetch(videoList_url);
            const result = await response.json();
            setData(result.items || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {data?.map((item) => (
                <Link key={item.id} to={`/video/${item.snippet.categoryId}/${item.id}`} className='card'>
                    <img src={item.snippet.thumbnails?.medium?.url} alt={item.snippet.title} />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics?.viewCount ?? 0)} views • {moment(item.snippet?.publishedAt).fromNow()}</p>
                </Link>
            ))}
        </div>
    );
};

export default Feed;
