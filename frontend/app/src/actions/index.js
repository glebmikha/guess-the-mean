export const NEXT = 'NEXT';
export const NEW_ARRAY = 'NEW_ARRAY';
export const USER_ANSWER = 'USER_ANSWER';

export function newArray() {
  const array = Array.from({length: 10}, () => Math.floor(Math.random() * 40));
  return {
    type: NEW_ARRAY,
    payload: array
  }
}

export function userAnswer(value, curArray) {

  const answer = Number(value);

  const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
  const true_mean = average(curArray);
  const error = (true_mean - answer) / true_mean;

  const payload = {
    answer: answer,
    true_mean: true_mean,
    error: error
  }

  return {
    type: USER_ANSWER,
    payload: payload
  }
}