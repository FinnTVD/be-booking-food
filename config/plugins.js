module.exports = () => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: "https://be-booking-food.vercel.app/",
      apiToken: "6ws243F4tf0LwHmLze62zwHy",
      appFilter: "be-booking-food",
      teamFilter: "finnitthgmailcoms-projects",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
