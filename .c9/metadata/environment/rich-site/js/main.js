{"filter":false,"title":"main.js","tooltip":"/rich-site/js/main.js","undoManager":{"mark":10,"position":10,"stack":[[{"start":{"row":198,"column":0},"end":{"row":199,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":199,"column":0},"end":{"row":200,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":200,"column":0},"end":{"row":289,"column":0},"action":"insert","lines":["// Flickr API key","const apiKey = 'ここにAPIキーを入れてください';","","// Flickr画像データのURLを返す","const getFlickrImageURL = (photo, size) => {","  let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${","    photo.secret","  }`;","  if (size) {","    // サイズ指定ありの場合","    url += `_${size}`;","  }","  url += '.jpg';","  return url;","};","","// Flickr画像の元ページのURLを返す","const getFlickrPageURL = photo => `https://www.flickr.com/photos/${photo.owner}/${photo.id}`;","","// Flickr画像のaltテキストを返す","const getFlickrText = (photo) => {","  let text = `\"${photo.title}\" by ${photo.ownername}`;","  if (photo.license === '4') {","    // Creative Commons Attribution（CC BY）ライセンス","    text += ' / CC BY';","  }","  return text;","};","","// リクエストパラメータを作る","const parameters = $.param({","  method: 'flickr.photos.search',","  api_key: apiKey,","  text: 'cat', // 検索テキスト","  sort: 'interestingness-desc', // 興味深さ順","  per_page: 12, // 取得件数","  license: '4', // Creative Commons Attributionのみ","  extras: 'owner_name,license', // 追加で取得する情報","  format: 'json', // レスポンスをJSON形式に","  nojsoncallback: 1, // レスポンスの先頭に関数呼び出しを含めない","});","const url = `https://api.flickr.com/services/rest/?${parameters}`;","console.log(url);","","// 猫の画像を検索して表示","$.getJSON(url, (data) => {","  console.log(data);","","  // データが取得できなかった場合","  if (data.stat !== 'ok') {","    console.error('データの取得に失敗しました。');","    return;","  }","","  // 空の<div>を作る","  const $div = $('<div>');","","  // ヒット件数","  $div.append(`<div>${data.photos.total} photos in total</div>`);","","  for (let i = 0; i < data.photos.photo.length; i++) {","    const photo = data.photos.photo[i];","    const photoText = getFlickrText(photo);","","    // $divに <a href=\"...\" ...><img src=\"...\" ...></a> を追加する","    $div.append(","      $('<a>', {","        href: getFlickrPageURL(photo),","        class: 'd-inline-block',","        target: '_blank', // リンクを新規タブで開く","        'data-toggle': 'tooltip',","        'data-placement': 'bottom',","        title: photoText,","      }).append(","        $('<img>', {","          src: getFlickrImageURL(photo, 'q'),","          width: 150,","          height: 150,","          alt: photoText,","        }),","      ),","    );","  }","  // $divを#mainに追加する","  $div.appendTo('#main');","","  // BootstrapのTooltipを適用","  $('[data-toggle=\"tooltip\"]').tooltip();","});",""],"id":3}],[{"start":{"row":289,"column":0},"end":{"row":290,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":290,"column":0},"end":{"row":291,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":291,"column":0},"end":{"row":296,"column":3},"action":"insert","lines":["$.getJSON(URL, (data) => {","  /**","   * リクエストが成功するとここが実行される。","   * JSONからオブジェクトに変換されたものがdataに入る。","   */","});"],"id":5}],[{"start":{"row":292,"column":2},"end":{"row":295,"column":5},"action":"remove","lines":["/**","   * リクエストが成功するとここが実行される。","   * JSONからオブジェクトに変換されたものがdataに入る。","   */"],"id":6}],[{"start":{"row":292,"column":2},"end":{"row":302,"column":30},"action":"insert","lines":[" farm: 6,","  id: \"5537278912\",","  isfamily: 0,","  isfriend: 0,","  ispublic: 1,","  license: \"4\",","  owner: \"33152876@N08\",","  ownername: \"Trish Hamme\",","  secret: \"7af1551479\",","  server: \"5211\",","  title: \"Happy Furry Friday\","],"id":7}],[{"start":{"row":237,"column":10},"end":{"row":237,"column":32},"action":"remove","lines":["'owner_name,license', "],"id":8}],[{"start":{"row":237,"column":10},"end":{"row":237,"column":32},"action":"insert","lines":["'owner_name,license', "],"id":10}],[{"start":{"row":291,"column":0},"end":{"row":303,"column":3},"action":"remove","lines":["$.getJSON(URL, (data) => {","   farm: 6,","  id: \"5537278912\",","  isfamily: 0,","  isfriend: 0,","  ispublic: 1,","  license: \"4\",","  owner: \"33152876@N08\",","  ownername: \"Trish Hamme\",","  secret: \"7af1551479\",","  server: \"5211\",","  title: \"Happy Furry Friday\",","});"],"id":11}],[{"start":{"row":201,"column":16},"end":{"row":201,"column":32},"action":"remove","lines":["ここにAPIキーを入れてください"],"id":12}],[{"start":{"row":201,"column":16},"end":{"row":201,"column":48},"action":"insert","lines":["38bbd2af654d1aed25afb9d71626f0b4"],"id":13}]]},"ace":{"folds":[],"scrolltop":2784,"scrollleft":0,"selection":{"start":{"row":201,"column":48},"end":{"row":201,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":184,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1568273852861,"hash":"73171cac2b84466eb29e5c4b9337ff2e809fcadf"}