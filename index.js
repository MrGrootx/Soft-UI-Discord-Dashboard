const { Client, GatewayIntentBits } = require("discord.js");
const SoftUI = require("dbd-soft-ui");
const config = require("./config.json");
let DBD = require("discord-dashboard");



const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(config.discord.token);
module.exports = { client };

const locales = require('./locales/locales')


const moderation = require("./categorys/moderation");






const Handler = new DBD.Handler();
(async () => {
  await DBD.useLicense(config.dbd.license);
  DBD.Dashboard = DBD.UpdatedClass();
  const Dashboard = new DBD.Dashboard({
    port: config.dbd.port,
    client: config.discord.client,
    // redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
    redirectUri: `${config.dbd.domain}:${config.dbd.port}${config.dbd.redirectUri}`,

    domain: config.dbd.domain,
    ownerIDs: config.dbd.ownerIDs,
    useThemeMaintenance: true,
    useTheme404: true,
    
    guildAfterAuthorization: {
        use: true,
        guildId: config.guild.guildID
    },

    bot: client,
    theme: SoftUI({
      locales: locales,
      storage: Handler,
      customThemeOptions: {
        index: async ({ req, res, config }) => {
          return {
            values: [],
            graph: {},
            cards: [],
          };
        },
      },
      websiteName: "Luffy",
      websiteTitle: "LUFFY - imagine a free discord bot",
      dashboardURL: config.dbd.domain,
      colorScheme: "custom",
      dbdriver: config.database.mongoose,
      themeColors: {
        primaryColor: "#374649",
        secondaryColor: "#009c6b",
      },
      supporteMail: "grootxdev@gmail.com",
      createdBy: "Groot Development",
      icons: {
        favicon:
          "https://media.discordapp.net/attachments/1165269900944756776/1167010130596986991/luffy.png?ex=654c91e1&is=653a1ce1&hm=78d3d22a4f07761b59304dd0e1bb0b18326888cb9c97789634d846503a60f6dc&=",
        noGuildIcon:
          "https://media.discordapp.net/attachments/1165269900944756776/1167010130596986991/luffy.png?ex=654c91e1&is=653a1ce1&hm=78d3d22a4f07761b59304dd0e1bb0b18326888cb9c97789634d846503a60f6dc&=",
        sidebar: {
          darkUrl:
            "https://media.discordapp.net/attachments/1165269900944756776/1167010130596986991/luffy.png?ex=654c91e1&is=653a1ce1&hm=78d3d22a4f07761b59304dd0e1bb0b18326888cb9c97789634d846503a60f6dc&=",
          lightUrl:
            "https://media.discordapp.net/attachments/1165269900944756776/1167010130596986991/luffy.png?ex=654c91e1&is=653a1ce1&hm=78d3d22a4f07761b59304dd0e1bb0b18326888cb9c97789634d846503a60f6dc&=",
          hideName: true,
          borderRadius: false,
          alignCenter: true,
        },
      },
      index: {
        graph: {
          enabled: true,
          lineGraph: false,
          title: "Memory Usage",
          tag: "Memory",
          max: 100,
        },
      },
   
      sweetalert: {
        errors: {},
        success: {
          login: "Successfully logged in!",
        },
      },
      preloader: {
        image:
          "https://media.discordapp.net/attachments/1165269900944756776/1167010130596986991/luffy.png?ex=654c91e1&is=653a1ce1&hm=78d3d22a4f07761b59304dd0e1bb0b18326888cb9c97789634d846503a60f6dc&=",
        spinner: false,
        text: "Page is loading",
      },
      admin: {
        pterodactyl: {
          enabled: false,
          apiKey: "apiKey",
          panelLink: "https://panel.com",
          serverUUIDs: [],
        },
      },
      footer: {
        replaceDefault: true,
        text: "Made by Mr Groot#9862"
    },
      
      commands: [
        moderation,
    ]
    }),
    settings: [

    ],
  });
  Dashboard.init();
})();

console.log(`${config.dbd.domain}:${config.dbd.port}`);

