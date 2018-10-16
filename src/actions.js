export const handleChangeUsername = e => ({
  type: "SET_USERNAME",
  payload: e.target.value,
});

export const handleChangeFirstName = e => ({
  type: "SET_FIRST_NAME",
  payload: e.target.value,
});

const getGithubUser = username => fetch(`https://api.github.com/users/${username}`);

const handleLogin = profile => ({
  type: 'LOGIN',
  payload: profile
});

// export let sortFunction;

export const descendingSort = (a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
};

// export const ascendingSort = (a, b) => {
//     return new Date(a.created_at) - new Date(b.created_at);
// };

export const login = username => dispatch => {
  getGithubUser(username)
    .then(res => res.json())
    .then(profile => dispatch(handleLogin(profile)))
};

export const handleLogout = () => ({
  type: 'LOGOUT'
});

const saveEvents = events => ({
  type: 'GET_EVENTS',
  payload: events
});

const getGithubEvents = url => fetch(url);

export const getEventsAndPRs = eventsUrl => dispatch => {
  getGithubEvents(eventsUrl)
    .then(res => res.json())
    .then(eventsData => {
      // dispatch(saveEvents(eventsData.sort(sortFunction)));
      dispatch(saveEvents(eventsData.sort(descendingSort)));
      return eventsData.filter(event => event.type === "PullRequestEvent")
    })
    .then(filteredEventsData => {
      return Promise.all(
        filteredEventsData.map(pullRequestEvent => getGithubPullRequests(pullRequestEvent.payload.pull_request.url))
      )
    })
    .then(res => {
      return Promise.all(
        res.map(e => e.json())
      )
    })
    .then(pullRequestsData => dispatch(savePullRequests(pullRequestsData.sort(descendingSort))))
    // .then(pullRequestsData => dispatch(savePullRequests(pullRequestsData.sort(sortFunction))))
};


const getGithubPullRequests = url => fetch(url);

const savePullRequests = pullRequests => ({
  type: 'GET_PULL_REQUESTS',
  payload: pullRequests
});


// export const handleSort = sortChoice => ({
//   type: 'SORT',
//   payload: sortChoice
// });