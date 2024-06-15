export default {
  init() {
    MR.init({
      clientId: "4ae8847762e84252b324dd84f4ded062",
      onlogin: function (state) {
        if (state.user) {
          console.info("MR.login:", state);
          window.location.href = "https://cloud.mail.ru/home"
        }
      },
      onlogout: function () {
        console.info("MR.logout");
      },
    });
  },
};
