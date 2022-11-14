const BASE_URL = 'http://localhost:1000'

export async function makeApiCall(url, method ,params) {
    let defaultHeader = {
        'Content-Type':'application/json',
        Accept: 'application/json, text/javascript, */*; q=0.01',
        Authorization: 'Bearer ' + global.accessToken,
      };

      console.log(`${BASE_URL}${url}`, '<=======url')
      console.log(defaultHeader, '<=======defaultHeader')
      console.log(`${JSON.stringify(params)}`, '<=======params')

    const response = await fetch( `${BASE_URL}${url}`, {
        method: method,
    headers: {      'Content-Type':'application/json'},
    body: JSON.stringify(params),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
