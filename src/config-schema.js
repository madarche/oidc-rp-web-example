'use strict'

module.exports = {
    common: {
        base_url: {
            doc: 'Application base URL',
            format: 'url',
            default: 'https://oidc-rp-web-demo.local.test'
        },
        secret: {
            doc: 'Secret used for session cookies and CSRF tokens',
            format: String,
            default: null
        }
    },
    resources: {
        url: {
            doc: 'Resources URL',
            format: '*',
            default: ''
        },
    },
    log: {
        level: {
            doc: 'Log level',
            format: [
                'error',
                'warn',
                'info',
                'debug',
                'trace'
            ],
            default: 'info'
        },
        file_path: {
            doc: 'Log file path. If not defined the logger outputs to the console (useful when testing, developing or debugging).',
            format: '*',
            default: false
        }
    },
    server: {
        ip: {
            doc: 'IP address to bind',
            format: 'ipaddress',
            default: '127.0.0.1'
        },
        port: {
            doc: 'Port to bind',
            format: 'port',
            default: 8012
        }
    },
    session: {
        cookie_name: {
            doc: 'Name of this application cookie',
            format: '*',
            default: 'app.oidc-rp-web-demo'
        }
    },
    oidc: {
        issuer_url: {
            doc: 'URL',
            format: 'url',
            default: 'https://connect.local.test'
        },
        client_id: {
            doc: 'Client ID of this OIDC RP',
            format: String,
            default: null
        },
        client_secret: {
            doc: 'Client secret of this OIDC RP',
            format: String,
            default: null
        },
        scope: {
            doc: 'Space separated values',
            format: String,
            default: null
        }
    }
}
