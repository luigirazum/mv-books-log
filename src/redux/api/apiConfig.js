/**
 * Config file for the Bookstore API
 *  * baseUrl
 *  * endPoints
 *    - /apps
 *      >> POST to create a new App
 *        << appId
 *    - /apps/appId/books
 *      >> GET to retrieve saved books
    *     << array of objects
 *      >> POST body JSON with keys { item_id, title, author, category }
 *        << 201 status (created)
 *    - /apps/appId/books/itemId
 *      >> DELETE to remove a book from your bookstore, body JSON with key { item_id }
 *        << Success  message
 */

const appId = '3TE3GFpBP6zBkGtDAZSg';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const epApps = '/apps';
const epBooks = `${epApps}/${appId}/books`;
const epRemove = `${epBooks}/`;

export { baseUrl, epBooks, epRemove };
