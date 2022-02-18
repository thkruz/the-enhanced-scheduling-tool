import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

`

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
  background: #F5F9FB;
  width: 300px;
  padding: 1rem;
  margin: 1rem;
`

const developers = [
  {
    "id": 1,
    "name": "Tony Kelly",
    "github": "tkbdsi",
    "link": "https://github.com/tkbdsi",
    "tag": null
  },
  {
    "id": 2,
    "name": "Theodore Kruczek",
    "github": "thkruz",
    "link": "https://github.com/thkruz",
    "tag": "📡 Constantly working on something related to satellite operations. I enjoy making space concepts accessible to everyone through JavaScript and TypeScript."
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
    <Container>
      <p>The following developers contributed to the development of this application.</p>
      <List>
        {developers.map( (developer) => {
          return (
            <Card>
              <Developer>{developer.name}</Developer>
              <a href={developer.link} target="_blank">GitHub: {developer.github}</a>
              <p>{developer.tag}</p>
            </Card>
          )
        })}
      </List>
    </Container>
  )

}