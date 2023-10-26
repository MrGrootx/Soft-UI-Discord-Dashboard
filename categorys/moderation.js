const array = {
  category: "Moderation",
  subTitle: "Luffy Moderation Commands",
  categoryId: "category-id", // No spaces or special characters
  image: false,
  hideAlias: true, // Optional - Default: false - Hides the alias from all commands in the category
  hideDescription: false, // Optional - Default: false - Hides the description from all commands in the category
  hideSidebarItem: false, // Optional - Default: false - Hides the category from the sidebar
  list: [
    {
      commandName: "ban",
      commandUsage: "Bans the member",
      commandDescription: "ban user from your discord using this command",
      commandAlias: "alias",
    },
    {
      commandName: "bugreportdev",
      commandUsage: "Setup the captcha system for your server",
      commandDescription:
        "like when the new user enter your server it will send a message to there dm to verify",
      commandAlias: "alias",
    },
    {
      commandName: "clear",
      commandUsage: "deleting server message",
      commandDescription: "delete channel sended message",
      commandAlias: "alias",
    },
    {
      commandName: "disconnect-all",
      commandUsage: "disconnect all members from particular vc",
      commandDescription: "disconnect all members from specified voice channel",
      commandAlias: "alias",
    },
    {
      commandName: "dm",
      commandUsage: "this command you can send dm to any user",
      commandDescription: "Make me DM a user",
      commandAlias: "alias",
    },
  ],
};

module.exports = array;
