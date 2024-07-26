import {Client} from 'pg'

const client = new Client({
	user: 'username',
	password: 'password',
	host: 'host',
	port: 'port_number',
	database: 'database_name',
});