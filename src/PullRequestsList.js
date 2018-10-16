import React from "react";

export default ({ requests }) => (
  <div>
    <h2>Recent Pull Requests</h2>
    <ul>
      {requests.map((request, i) => (
        <a href="{request.url}" target="_blank">
          <li className='requests' key={`request-${i}`}>
            <p>{request.url} <span className={request.state==='open' ? 'PRCard__State-open' : 'PRCard__State-closed'}>{request.state}</span></p>
          </li>
        </a>
      ))}
    </ul>
  </div>
);
