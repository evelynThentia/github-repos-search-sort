import React from "react";

// export default ({ events, handleSort, sort }) => (
export default ({ events }) => (
  <div>
    <h2>Recently Forked Repos</h2>
    {/*<div>*/}
      {/*<span>Sort By:</span>  <span onClick={handleSort} value={sort}>Earliest</span>  <span onClick={handleSort} value={sort}>Latest</span>  <span onClick={handleSort} value={sort}>Repo Name</span>*/}
    {/*</div>*/}
    <ul>
      {events.map((event, i) => (
        <a href="{event.repo.url}" target="_blank">
          <li className="event" key={`event-${i}`}>
            <p>{event.repo.url}</p>
          </li>
        </a>
      ))}
    </ul>
  </div>
);
