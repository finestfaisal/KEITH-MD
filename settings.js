/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA71Va4+iSBT9L/VVZ+VRvEw6GV4qAi0+EHWzH0ooEOQllAg98b9vaKe3O5nZ2d5ks3yqFFX3nnvvOae+gbyIa2ziDoy/gbKKG0RwvyRdicEYKNcwxBUYggARBMagW7TnsnEgCcLgQtmVzxoFPrrbVnft83rSZJdQ1zjHecnFJ3AfgvJ6TGP/FwHTTlfkTqqVhSQP8FxzlQOm2blLHWqeTpJDtDWV5bHO/SR6Avc+IoqrOI/08oQzXKHUxJ2D4upz8MWJG1mauM/XuWEpcDYQSswYKb+Ayazu5pdGUwWodbMzXX8OPo94RZ6eurPHh3GaDNTV2umYl/aAmkNsy7LG2jdtL6W3m/2AX8dRjgMjwDmJSffpvtfzKEvyKHn2Ky8vDNNBinEROPMk7qB+ta5Ky5Q7mj4OKP+TwP2ga9P5NZ22x9zgJh53ufLGepleGWa0PvuxT1ZbvK3q0/IjcKd648r53/S90Kf+ZO4khRSbcMkF1pTjkoPpagt25t2k2+m2UA96KljTT/a9gcpoo07mafPi2laR+f5lSpXmbT3aTmkLn9VSrt0iuzSy+A4fkWv1K5QmNygvvDMiWVtr7dymXJtJ6tNBg2J2W095f83tLOa48+SuCJNNrrptHIRVoq6irXgaqaPTZhkcpL2/9YyUukG1HO2029NrRWfcGQEY0/chqHAU16RCJC7yfo+B9BCgoFljv8Lktb1ALxae7uHd1JEv+a7d2KwlT9Cy5OQZPYhTJsmkymC8M5XWT2AIyqrwcV3jYBbXpKg6G9c1inANxr+/TqovusJZQfA8DsAYMBwniBxL8RQrfK1/u50QqVFZ/pZjAoYgrIrMxmBMqisegtcLLNQphuYZiYO8yGiyomkCw4kSLWqcrLB6X2L2SLqJM1wTlJVgTAscQ3OiyDH34X+Dg5dZioGqJkFB5nRO5HlBpzWaUSVBF6FM/V84dAhVRmEFkRcmUNQkiekXE45VZXaiyv/UD3j/Ywhy3JKHnnoWsPQQhHFVEze/lmmBgjexvf1Evl9cc7Lucl/tF7gC4w/bmJA4j+q+smuOKv8UN1jt6wDjEKU1vg9BgJvYx308YO9jm1k8v6zMOBbTFS1krKjeeiadivxxBEoC8pFIf+E5CX2BUEJfkBjQXwLmKPESA0WIIOjb8bCy/s7fKmt1y6i9sPV5slt7md1Bj9lMDufNyJVf1fGQBK5w8NblI/LP13JTnHH+S1sMvU24SaTRWcPb2Wzm7Lwu4FB52H+I+5AaGH97fz7UIujj8d5uoqx0HfTT6vP8wIYx/JEPOeoPgzDOcU1CFNcoBUOQPu7yHEUzAi8JUKAlfgy/9vv3v+bUJwkwQXFagzFQ5x5k56KiO965Ee3pVDYiWY1k8D7XN996+ILo+0nkVgO2kZspNRIGfPI88xS1Uk5RWXSi8JymTZS4ymr/9JMgYAyi1SgOlt089SrqiBa+4FqrZ0UIXWprnNj13qmFnG2dyhX5ZUvkYPbcZLZy5km9k+dNKKJpkbjtnEItt5ht926jRDtl+dRne/DrYzLL3CwNxcS3+SS0rHrTbtXp0doxBd5SrCnunG1rVpR1tNw8EqHpM5f0RqSVNY0gXhBbWjaWWehpOF22h6VrLuBattTlw1FfHT39/pLG373uwcYwxq8P0/dB/dM833VB3YcfQnx/6f6Ge0o4mxlwYo6IcLNa4gxG1+JlRUfLy22/N5HdLF4OhyM0aNn1wL0XfJkiEhZV1hM3OyIwBFVx7VVr5GHxi0yqTBly9Kg6RTWR353gZ+ZCP045VVHOUH0CY5BnrHLsOd7JZbkmiLz5CpD7TxMEcP8ThpelhwoKAAA=';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || 'Keith';

const packname = process.env.PACKNAME || 'keith';

const dev = process.env.OWNER_NUMBER || '255785306037';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'true';

const botname = process.env.BOTNAME || 'KEITH-MD';

const mode = process.env.MODE || 'public';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
