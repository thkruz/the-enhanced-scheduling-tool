import { screen, render } from '@testing-library/react';
import Calendar from './Calendar';

const data = [
  {
      "dayKey": 1,
      "shift1": {
          "dayKey": 1,
          "shift": "day",
          "members": [
              {
                  "id": 1,
                  "first": "John",
                  "last": "Doe",
                  "preference": "day",
                  "nonavail": [
                      17,
                      14,
                      25,
                      11
                  ]
              },
              {
                  "id": 4,
                  "first": "Jill",
                  "last": "Doe",
                  "preference": "day",
                  "nonavail": [
                      12,
                      22,
                      24,
                      20
                  ]
              }
          ]
      },
      "shift2": {
          "dayKey": 1,
          "shift": "swing",
          "members": [
              {
                  "id": 2,
                  "first": "Jane",
                  "last": "Doe",
                  "preference": "swing",
                  "nonavail": [
                      21,
                      29,
                      28,
                      13
                  ]
              },
              {
                  "id": 5,
                  "first": "Joe",
                  "last": "Doe",
                  "preference": "swing",
                  "nonavail": [
                      25,
                      8,
                      23,
                      7
                  ]
              }
          ]
      },
      "shift3": {
          "dayKey": 1,
          "shift": "mid",
          "members": [
              {
                  "id": 3,
                  "first": "Jack",
                  "last": "Doe",
                  "preference": "mid",
                  "nonavail": [
                      29,
                      12,
                      23,
                      29
                  ]
              },
              {
                  "id": 6,
                  "first": "Jenny",
                  "last": "Doe",
                  "preference": "mid",
                  "nonavail": [
                      10,
                      2,
                      29,
                      10
                  ]
              }
          ]
      },
      "isConflict": true
  }
]

describe('unit tests for the Loading component', () => {

  const setup = () => {
    render(<Calendar />);
  }

  test('it should display at least one day of schedule', async () => {
    setup();
    const day1 = await screen.findByText("Day 1");
    expect(day1).toBeInTheDocument();
  })

  test('it should have a button called download', async () => {
    setup();
    const button = await screen.findByRole('button', {  name: /download/i})
    expect(button).toBeInTheDocument();
  })

})

