export function getSearchResults(query) {
    return fetch(`/search?q=${query}`)
    .then(data => data.json());
}