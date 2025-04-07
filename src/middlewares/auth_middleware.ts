import { Request, Response, NextFunction } from 'express';

function auth_middleware(req: Request, res: Response, next: NextFunction): void {
    const user_id = req.headers['userid'];
    if (!user_id) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    next();
}

export default auth_middleware;