import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
  } from "react-twitter-embed";
  import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
<<<<<<< HEAD
                <input placeholder="Search Twitter" type="text" />
=======
                <input placeholder="Search Twitter?" type="text" />
>>>>>>> 847da22f91f53cc2fa83513abf4911118af87efb
            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats Happening?</h2>

                <TwitterTweetEmbed tweetId={"1332305023888363528"} />
<<<<<<< HEAD
                <TwitterTweetEmbed tweetId={"1333677773357944834"} />
                <TwitterTweetEmbed tweetId={"1333674416882864129"} />

                <TwitterTimelineEmbed 
                    soruceType="profile"
                    screenName="sakshipanchal"
                    options={{ height:400 }}
                />

                <TwitterShareButton url="https://github.com/2331sakshi"
                    options={{ text:"reactjs is awesome", via:"sakshipanchal"}}
=======
                {/* <TwitterTweetEmbed tweetId={"1333677773357944834"} /> */}
                {/* <TwitterTweetEmbed tweetId={"1333674416882864129"} /> */}

                <TwitterTimelineEmbed 
                    soruceType="profile"
                    screenName="saikeshari"
                    options={{ height:400 }}
                />

                <TwitterShareButton url="https://github.com/saikeshari"
                    options={{ text:"reactjs is awesome", via:"saikeshari"}}
>>>>>>> 847da22f91f53cc2fa83513abf4911118af87efb
                />
            </div>
        </div>
    )
}

export default Widgets
