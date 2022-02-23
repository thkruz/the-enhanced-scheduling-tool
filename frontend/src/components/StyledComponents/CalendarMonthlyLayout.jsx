import styled from 'styled-components';

export const CalendarMonthlyLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(6,1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
`