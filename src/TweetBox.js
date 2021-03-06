import React, {useState} from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const[tweetMessage, setTweetMessage] = useState("");
    const[tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault(); //stops the refresh of page

        db.collection('posts').add({
            displayName: 'Sakshi Panchal',
            username: "sakshi2331",
            verified: true,
            text : tweetMessage,
            image: tweetImage,
            avatar: "https://freepngimg.com/thumb/cartoon/7-2-cartoon-picture.png"
        });
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar>SP</Avatar>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening ?" 
                        type="text" 
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter Image URL" 
                    type="text" 
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
