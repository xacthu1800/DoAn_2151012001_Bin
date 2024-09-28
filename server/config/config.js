const JWT = {
    jwt: process.env.JWT_SECRET || '12345-67890-09876-54321',
    jwtExp: '100d',
    jwt_Admin: process.env.JWT_SECRET_ADMIN || '11111-22222-33333-44444',
};
module.exports = { JWT };
