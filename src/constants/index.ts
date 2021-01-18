import * as Dotenv from 'dotenv'
Dotenv.config()

export const PORT = process.env.PORT || 8080

export const API_VERSION = process.env.npm_package_version
