import express, { Request, Response, NextFunction } from 'express';

import passport from 'passport';

// create an instance of the User model
import User from '../Models/user';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about'  });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects'  });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services'  });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact'  });
} 

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }
    return res.redirect('/contactlist');
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', (err, user, info) => {
        //  server errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        //  login errors?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) =>
        // db errors?
        {
            if(err)
            {
                console.error(err);
                return next(err);
            }

            return res.redirect('/contactlist');

        });
    })(req, res, next);
}

