import React from "react";
import EventsList from "./EventsList.js";
import PullRequestsList from "./PullRequestsList.js";
import Button from "./Button.js";

// export default ({ login, avatar_url, handleLogOut, handleSort, events, requests }) => (
export default ({ login, avatar_url, handleLogOut, events, requests }) => (
  <div className="profile">
    <h2>Hello {login}</h2>
    <img src={avatar_url} alt={`${login}'s avatar'`} />
    <Button value="Log Out" handleClick={handleLogOut} />
    <div className='profile__data'>    
    	{/*<EventsList className='profile__data-info' events={events} handleClick={handleSort} />*/}
        <EventsList className='profile__data-info' events={events} />
    	<PullRequestsList className='profile__data-info' requests={requests} />
    </div>

  </div>
);
