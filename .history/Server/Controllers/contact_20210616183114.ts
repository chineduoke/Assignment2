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