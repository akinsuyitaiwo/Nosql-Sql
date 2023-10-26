const bcrypt = require("bcrypt");
require("dotenv/config");

const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);

const adminData = [
	{
		firstName: "Temidayo",
		lastName: "Akinsuyi",
		email: "tyler@gmail.com",
		password: hashedPassword,
		role: "admin",
	}
];

module.exports = adminData;