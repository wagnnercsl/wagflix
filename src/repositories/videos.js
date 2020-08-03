import config from '../config';

const URL_CATEGORIES = `${config.BASE_URL}/videos`;

function create(videoObject) {
  return fetch(`${URL_CATEGORIES}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw new Error('Não foi possível cadastrar :(');
    });
}

export default {
  create,
};
