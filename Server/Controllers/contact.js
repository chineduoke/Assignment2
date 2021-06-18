"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessUpdatePage = exports.DisplayUpdatePage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
const Util_1 = require("../Util");
function DisplayContactListPage(req, res, next) {
    contact_1.default.find(function (err, contactList) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Contact List', page: 'contactlist', contact: contactList, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayUpdatePage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    contact_1.default.findById(id, {}, {}, (err, contactToUpdate) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Update', page: 'update', contact: contactToUpdate, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayUpdatePage = DisplayUpdatePage;
function ProcessUpdatePage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contact_1.default({
        "_id": id,
        "contactName": req.body.name,
        "contactNumber": req.body.number,
        "emailAddress": req.body.email
    });
    contact_1.default.updateOne({ _id: id }, updatedContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contactlist');
    });
}
exports.ProcessUpdatePage = ProcessUpdatePage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contactlist');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact.js.map