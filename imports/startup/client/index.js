import './routes.js';


import { MyIndex } from '../../api/lists/lists';

Tracker.autorun(function () {
    const cursor = MyIndex.search('my') // all docs containing 'n' in the name field

    console.log('***', cursor.fetch()) // log found documents with default search limit
    console.log(cursor.count()) // log count of all found documents
});