import 'dotenv/config';
import * as joi from 'joi';


interface EnvVars {
    PORT: number;
    DATABASE_URL: string;
    JWT_SECRET: string;
}


const envsSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    JWT_SECRET: joi.string().required(),
})
.unknown( true );


const { error, value } = envsSchema.validate( process.env );


if ( error ) {
    throw new Error(`Config validation error: ${ error.message }`);
}


const envVars:EnvVars = value;


export const ENVS = {
    PORT: envVars.PORT,
    DATABASE_URL: envVars.DATABASE_URL,
    JWT_SECRET: envVars.JWT_SECRET,
}
