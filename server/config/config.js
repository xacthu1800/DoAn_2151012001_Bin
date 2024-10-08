const JWT = {
    jwt: process.env.JWT_SECRET || '11111-22222-33333-44444',
    jwtExp: '100d',
    jwt_Admin: process.env.JWT_SECRET_ADMIN || '44444-33333-22222-11111',
    jwt_Agent: process.env.JWT_SECRET_AGENT || '12345-67890-09876-54321',
};
module.exports = { JWT };
