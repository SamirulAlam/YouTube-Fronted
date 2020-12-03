import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://avatars1.githubusercontent.com/u/50224886?s=460&u=643672c880852e2f093b0fcc35c0c3f7dc834e6a&v=4"
                channel="MERN BROS"
                verified
                subs="65K"
                noOfVideos={67}
                description="I love your face"
            />

        </div>
    )
}

export default SearchPage
