const { Client, GatewayIntentBits } = require("discord.js");
const SoftUI = require("dbd-soft-ui");
const config = require("./config.json");
let DBD = require("discord-dashboard");



const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(config.discord.token);

const moderation = require("./categorys/moderation");


module.exports = { client };
const Handler = new DBD.Handler();
(async () => {
  await DBD.useLicense(config.dbd.license);
  DBD.Dashboard = DBD.UpdatedClass();
  const Dashboard = new DBD.Dashboard({
    port: config.dbd.port,
    client: config.discord.client,
    redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,

    domain: config.dbd.domain,
    ownerIDs: config.dbd.ownerIDs,
    useThemeMaintenance: true,
    useTheme404: true,
    bot: client,
    theme: SoftUI({
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
      
      commands: [
        // {
        //     category: "Moderation",
        //     subTitle: "Luffy Moderation Commands",
        //     categoryId: "category-id", // No spaces or special characters
        //     image: false,
        //     hideAlias: true, // Optional - Default: false - Hides the alias from all commands in the category
        //     hideDescription: false, // Optional - Default: false - Hides the description from all commands in the category
        //     hideSidebarItem: false, // Optional - Default: false - Hides the category from the sidebar
        //     list: [
        //         {
        //             commandName: "ban",
        //             commandUsage: "Bans the member",
        //             commandDescription: "ban user from your discord using this command",
        //             commandAlias: "alias"
        //         },
        //         {
        //             commandName: "bugreportdev",
        //             commandUsage: "Setup the captcha system for your server",
        //             commandDescription: "like when the new user enter your server it will send a message to there dm to verify",
        //             commandAlias: "alias"
        //         },
        //         {
        //             commandName: "clear",
        //             commandUsage: "deleting server message",
        //             commandDescription: "delete channel sended message",
        //             commandAlias: "alias"
        //         },
        //         {
        //             commandName: "disconnect-all",
        //             commandUsage: "disconnect all members from particular vc",
        //             commandDescription: "disconnect all members from specified voice channel",
        //             commandAlias: "alias"
        //         },
        //         {
        //             commandName: "dm",
        //             commandUsage: "this command you can send dm to any user",
        //             commandDescription: "Make me DM a user",
        //             commandAlias: "alias"
        //         },

        //     ]
        // }
        moderation,
    ]
    }),
    settings: [

    ],
  });
  Dashboard.init();
})();

console.log(`${config.dbd.domain}${config.dbd.redirectUri}`);
