import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Loading from '../../components/Loading/Loading';

import { Card } from '../../components/StyledComponents/Card';
import { List } from '../../components/StyledComponents/List';

const Developer = styled.section``;
const developers = ['thkruz', 'tkbdsi', 'filmo003'];

const About = () => {
  const [devs, setDevs] = useState([]);
  const [rateLimited, setRateLimited] = useState(false);

  useEffect(() => {
    Promise.all(
      developers.map( developer => (
          fetch(`https://api.github.com/users/${developer}`)
          .then(response => {
            if (response.ok) {
              setRateLimited(false);
              return response.json();
            } else {
              setRateLimited(true);
            }
          })
        )
      )
    ).then( data => setDevs(data));
  },[])

  if (devs.length <= 0) return (
      <div>
        <p>Either loading resources from GitHub or your internet connect is offline.</p>
        <Loading />
      </div>
    );

  if (rateLimited) return (
    <div>
      <p style={{padding: "1rem"}}>This is a Test Bed for the Enhanced Scheduling App. Only approved products are allowed for scheduling and displaying workforce availability, which incldues a mix of printed Excel sheets, Microsoft Office Calendars, or even Sharepoint Calenders, across a wide range of User bases. This application seeks to decouple the myriad routes and offer a new one stop shop that is fast, reliable, and doesn't require the purchase and maintenance of third party corporations to make it work.</p>
      <p style={{padding: "1rem"}}>The following developers contributed to the development of this application.</p>
      <h3>Currently rate limited! Only get 60 requests an hour. Try again in an hour to get information on the three developers below!</h3>
      {developers.map( (item, idx) => <p key={idx*100}>{item}</p>)}
    </div>
  )

  return (
    <div>
      <p style={{ padding: '1rem' }}>
        This is a Test Bed for the Enhanced Scheduling App. Only approved products are allowed for scheduling and
        displaying workforce availability, which incldues a mix of printed Excel sheets, Microsoft Office Calendars, or
        even Sharepoint Calenders, across a wide range of User bases. This application seeks to decouple the myriad
        routes and offer a new one stop shop that is fast, reliable, and doesn't require the purchase and maintenance of
        third party corporations to make it work.
      </p>
      <p style={{ padding: '1rem' }}>The following developers contributed to the development of this application.</p>
      <List>
        {devs.map(dev => {
          return (
            <Card key={dev.id}>
              <Developer>{dev.name}</Developer>
              <img src="https://avatars.githubusercontent.com/u/94663911?v=4" alt="avatar link" width={'50px'} />
              <ul>
                <li>
                  <a href={dev.html_url} target="_blank" rel="noreferrer">
                    GitHub: {dev.login} <small>New Tab</small>
                  </a>
                </li>
                {dev.email && <li>Contact: {dev.email}</li>}
                {dev.company && <li>Company: {dev.company}</li>}
                {dev.location && <li>Workspace: {dev.location}</li>}
                {dev.blog && <li>Blog: {dev.blog}</li>}
                {dev.hireable && <li>Hireable</li>}
                {dev.twitter_username && <li>Follow Me: {dev.twitter_username}</li>}
                {dev.public_repos && <li>Public Repos: {dev.public_repos}</li>}
              </ul>
              {dev.bio && <p>{dev.bio}</p>}
            </Card>
          );
        })}
      </List>
    </div>
  );
};

export default About;
