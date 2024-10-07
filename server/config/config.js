const JWT = {
    jwt: process.env.JWT_SECRET || '12345-67890-09876-54321',
    jwtExp: '100d',
    jwt_Admin: process.env.JWT_SECRET_ADMIN || '11111-22222-33333-44444',
    jwt_Agent: process.env.JWT_SECRET_AGENT || '44444-33333-22222-11111',
};
module.exports = { JWT };
