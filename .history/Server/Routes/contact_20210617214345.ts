import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type contact
import { DisplayContactListPage, DisplayUpdatePage, ProcessUpdatePage } from '../Controllers/contact';

/* GET /contact-list page. */
router.get('/', DisplayContactListPage);



/* GET - display /contact-list/update/:id page. */
router.get('/update/:id', DisplayUpdatePage);



/* POST - process /clothing-list/edit/:id page */
router.post('/update/:id', ProcessUpdatePage);

/* GET - process /clothing-list/delete/:id */
//router.get('/delete/:id', ProcessDeletePage);