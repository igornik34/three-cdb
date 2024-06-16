export default {
    init() {
      window.YaAuthSuggest.init(
        {
          client_id: "14e05c8220104f3294b4d65415c1c4aa",
          response_type: "token",
          redirect_uri: "https://disk.yandex.ru/client/disk",
        },
        "https://disk.yandex.ru/client/disk",
        {
          view: "button",
          parentId: "buttonContainerIdYa",
          buttonSize: "s",
          buttonView: "main",
          buttonTheme: "dark",
          buttonBorderRadius: "8",
          buttonIcon: "ya",
        }
      )
        .then(({ handler }) => handler())
        .then((data) => console.log("Сообщение с токеном", data))
        .catch((error) => console.log("Обработка ошибки", error));
    },
  };
  