import { Schema, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

function callApi(endPoint, schema) {
  return fetch(endPoint)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      const camelizedJson = camelizeKeys(json);
      return Object.assign({},
        normalize(camelizedJson, schema)
      )
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    )
}

// Schemas for Github API responses.
const userSchema = new Schema('users', {
  idAttribute: 'login'
});

const repoSchema = new Schema('repos', {
  idAttribute: 'fullName'
});

repoSchema.define({
  owner: userSchema
});

// api services
export const fetchRepo = fullName => callApi(`https://api.github.com/repos/${fullName}`, repoSchema);
