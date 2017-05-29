module.exports = {
  'Demo test party-wedding' : function (client) {
    client
      .url('http://wedding.gnavi.co.jp/site/2/test05/')
      .waitForElementVisible('body', 4000)
      .assert.title('cafe de ぐるなび(カフェ ドゥ グルナビ) - の結婚式二次会ご相談受付中！ - ぐるなびウエディング')
      .click('li.navi02')
      .waitForElementVisible('body', 4000)
      .assert.title('結婚式二次会の料金・プラン：cafe de ぐるなび(カフェ ドゥ グルナビ) - の結婚式二次会ご相談受付中！ - ぐるなびウエディング')
      .end();
  }
};