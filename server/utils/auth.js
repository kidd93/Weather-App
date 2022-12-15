const jwt = require('jsonwebtoken');

const secret = 'wittlebittysecret';
const expiration = '3h';
module.exports = {
    authmiddleware: function ({ req }) {
        let token = req.query.token || req.headers.authorization;

        if (req.headers.authorization) { 
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
            return req;
        }
        return req
    },
    signToken: function ({ email, _id }) {
        const payload = { email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};