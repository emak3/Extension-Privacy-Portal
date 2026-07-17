(() => {
  const email = "contact.ext@ouma3.org";
  const product = document.querySelector(".policy-product")?.textContent.trim() || "";
  const subject = `【Extension Support】${product || "お問い合わせ"}`;
  const body = [
    `拡張機能名：${product}`,
    "ブラウザ（Chrome / Edge）とバージョン：",
    "",
    "お問い合わせ内容：",
    "",
    "問題が発生した画面と操作内容(再現手順等)：",
    "",
    "表示されたエラー内容：",
    "",
    "※パスワード、Cookie、課題ファイルなどの機密情報は記載しないでください。",
  ].join("\n");
  const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  document.querySelectorAll(`a[href^="mailto:${email}"]`).forEach((link) => {
    link.href = href;
  });
})();
