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
<<<<<<< HEAD
            displayName: 'Sakshi Panchal',
            username: "sakshi2331",
=======
            displayName: 'Sai Keshari1',
            username: "saikeshari1",
>>>>>>> 847da22f91f53cc2fa83513abf4911118af87efb
            verified: true,
            text : tweetMessage,
            image: tweetImage,
            avatar: "https://images.app.goo.gl/Y7etdAXaWePfsebL8"
        });
        setTweetImage("");
<<<<<<< HEAD
        setTweetMessage(""); 
=======
        setTweetMessage("");
>>>>>>> 847da22f91f53cc2fa83513abf4911118af87efb
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
<<<<<<< HEAD
                    <Avatar>SP</Avatar>
=======
                    <Avatar>SK</Avatar>
>>>>>>> 847da22f91f53cc2fa83513abf4911118af87efb
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening" 
<<<<<<< HEAD
                        type="text"
=======
                        type="text" 
>>>>>>> 847da22f91f53cc2fa83513abf4911118af87efb
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
