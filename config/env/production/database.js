export default ({ env }) => {
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: "ec2-176-34-105-15.eu-west-1.compute.amazonaws.com",
          port: "5432",
          database: "dcl9kl11qujhgi",
          username: "iituxwvvqsunzn",
          password:
            "d3b8cdf7dad61f8d030e72de5042aedb067c695f14e90029c882167b2bb32411",
          ssl: { rejectUnauthorized: false },
        },
        options: {
          ssl: false,
        },
      },
    },
  };
};
