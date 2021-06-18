import express, { Request, Response, NextFunction } from 'express';

// Contact Model Reference 
import Contact from '../Models/contact';


// Display Functions

//(R)ead in CRUD
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    
    Contact.find(function(err, contactList)
    {
        if(err)
        {
            return console.error(err);
        }

        res.render('index', { title: 'Contact List', page: 'contactlist', contact: contactList  })
    });
} 

export function DisplayUpdatePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    console.log(id);

    // pass the id to the db
    
    Contact.findById(id, {}, {}, (err, contactToUpdate) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the update view
        res.render('index', {title: 'Update', page: 'update', contact: contactToUpdate});
    });
}

    // Process update page
export function ProcessUpdatePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Contact
    let updatedContact = new Contact
    ({
      "_id": id,
      "contactName": req.body.name,
      "contactNumber": req.body.number,
      "emailAddress": req.body.email
    });
  
    // find the contact via db.contact.update({"_id":id}) and then update
    Contact.updateOne({_id: id}, updatedContact, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/contactlist');
    });
}
