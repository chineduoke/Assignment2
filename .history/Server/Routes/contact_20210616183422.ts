import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type contact
import { DisplayContactListPage } from '../Controllers/contact';

/* GET /clothing-list page. */
router.get('/', DisplayContactListPage);

/* GET - display /clothing-list/add page. */
//router.get('/add', DisplayAddPage);

/* GET - display /clothing-list/edit/:id page. */
//router.get('/edit/:id', DisplayEditPage);

/* POST - process /clothing-list/add page */
//router.post('/add', ProcessAddPage);

/* POST - process /clothing-list/edit/:id page */
//router.post('/edit/:id', ProcessEditPage);

/* GET - process /clothing-list/delete/:id */
//router.get('/delete/:id', ProcessDeletePage);