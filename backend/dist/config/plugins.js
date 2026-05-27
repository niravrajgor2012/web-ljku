"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    upload: {
        config: {
            provider: 'local',
            providerOptions: {
                sizeLimit: 10 * 1024 * 1024, // 10MB
            },
        },
    },
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET'),
        },
    },
});
