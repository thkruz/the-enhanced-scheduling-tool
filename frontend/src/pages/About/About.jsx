import React from "react";
import styled from "styled-components";

const List = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Developer = styled.section`
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
  border-radius: 10px;
  box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: black;
  width: 300px;
  padding: 1rem;
  margin: 1rem;
`

const developers = [
  {
    "id": 1,
    "name": "Theodore Kruczek",
    "github": "thkruz",
    "link": "https://github.com/thkruz",
    "tag": "📡 Constantly working on something related to satellite operations. I enjoy making space concepts accessible to everyone through JavaScript and TypeScript."
  },
  {
    "id": 2,
    "name": "Tony Kelly",
    "github": "tkbdsi",
    "link": "https://github.com/tkbdsi",
    "tag": "Making fullstack apps to wrap around ML/AI to make science available for the non-scientist. Personal projects in gamification 🎮 through React and iOS."
  },
  {
    "id": 3,
    "name": "Collin",
    "github": "filmo003",
    "link": "https://github.com/filmo003",
    "tag": null
  },
]

export default function About() {

  return (
    <div>
      <p style={{padding: "1rem"}}>This is a Test Bed for the Enhanced Scheduling App. Only approved products are allowed for scheduling and displaying workforce availability, which incldues a mix of printed Excel sheets, Microsoft Office Calendars, or even Sharepoint Calenders, across a wide range of User bases. This application seeks to decouple the myriad routes and offer a new one stop shop that is fast, reliable, and doesn't require the purchase and maintenance of third party corporations to make it work.</p>
      <p style={{padding: "1rem"}}>The following developers contributed to the development of this application.</p>
      <List>
        {developers.map( (developer) => {
          return (
            <Card key={developer.id}>
              <Developer>{developer.name}</Developer>
              <a href={developer.link} target="_blank" rel="noreferrer">GitHub: {developer.github}</a>
              <p>{developer.tag}</p>
            </Card>
          )
        })}
      </List>
    </div>
  )

}