const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(
    env(
      "postgres://iituxwvvqsunzn:d3b8cdf7dad61f8d030e72de5042aedb067c695f14e90029c882167b2bb32411@ec2-176-34-105-15.eu-west-1.compute.amazonaws.com:5432/dcl9kl11qujhgi"
    )
  );

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          username: user,
          password,
          ssl: { rejectUnauthorized: false },
        },
        options: {
          ssl: false,
        },
      },
    },
  };
};
