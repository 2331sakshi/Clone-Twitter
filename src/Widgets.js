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
                <input placeholder="Search Twitter?" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>Whats Happening?</h2>

                <TwitterTweetEmbed tweetId={"1332305023888363528"} />
                {/* <TwitterTweetEmbed tweetId={"1333677773357944834"} /> */}
                {/* <TwitterTweetEmbed tweetId={"1333674416882864129"} /> */}

                <TwitterTimelineEmbed 
                    soruceType="profile"
                    screenName="saikeshari"
                    options={{ height:400 }}
                />

                <TwitterShareButton url="https://github.com/saikeshari"
                    options={{ text:"reactjs is awesome", via:"saikeshari"}}
                />
            </div>
        </div>
    )
}

export default Widgets
