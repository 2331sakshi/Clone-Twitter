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
            displayName: 'Sai Keshari1',
            username: "saikeshari1",
            verified: true,
            text : tweetMessage,
            image: tweetImage,
            avatar: "https://images.app.goo.gl/Y7etdAXaWePfsebL8"
        });
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar>SK</Avatar>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening" 
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
