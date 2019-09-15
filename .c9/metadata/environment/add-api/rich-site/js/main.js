{"filter":false,"title":"main.js","tooltip":"/add-api/rich-site/js/main.js","undoManager":{"mark":72,"position":72,"stack":[[{"start":{"row":304,"column":17},"end":{"row":304,"column":25},"action":"remove","lines":["#gallery"],"id":121},{"start":{"row":304,"column":16},"end":{"row":304,"column":18},"action":"remove","lines":["''"]}],[{"start":{"row":304,"column":16},"end":{"row":304,"column":18},"action":"insert","lines":["''"],"id":122}],[{"start":{"row":304,"column":17},"end":{"row":304,"column":18},"action":"insert","lines":["."],"id":123}],[{"start":{"row":304,"column":18},"end":{"row":304,"column":31},"action":"insert","lines":["image-gallery"],"id":124}],[{"start":{"row":256,"column":66},"end":{"row":257,"column":0},"action":"insert","lines":["",""],"id":125},{"start":{"row":257,"column":0},"end":{"row":257,"column":1},"action":"insert","lines":["c"]}],[{"start":{"row":257,"column":1},"end":{"row":257,"column":2},"action":"insert","lines":["o"],"id":126},{"start":{"row":257,"column":2},"end":{"row":257,"column":3},"action":"insert","lines":["n"]}],[{"start":{"row":257,"column":0},"end":{"row":257,"column":3},"action":"remove","lines":["con"],"id":127},{"start":{"row":257,"column":0},"end":{"row":257,"column":7},"action":"insert","lines":["console"]}],[{"start":{"row":257,"column":6},"end":{"row":257,"column":7},"action":"remove","lines":["e"],"id":128},{"start":{"row":257,"column":5},"end":{"row":257,"column":6},"action":"remove","lines":["l"]}],[{"start":{"row":257,"column":4},"end":{"row":257,"column":5},"action":"remove","lines":["o"],"id":129},{"start":{"row":257,"column":3},"end":{"row":257,"column":4},"action":"remove","lines":["s"]},{"start":{"row":257,"column":2},"end":{"row":257,"column":3},"action":"remove","lines":["n"]},{"start":{"row":257,"column":1},"end":{"row":257,"column":2},"action":"remove","lines":["o"]},{"start":{"row":257,"column":0},"end":{"row":257,"column":1},"action":"remove","lines":["c"]}],[{"start":{"row":256,"column":66},"end":{"row":257,"column":0},"action":"remove","lines":["",""],"id":130}],[{"start":{"row":258,"column":0},"end":{"row":259,"column":0},"action":"insert","lines":["",""],"id":131}],[{"start":{"row":256,"column":9},"end":{"row":256,"column":10},"action":"insert","lines":["1"],"id":132}],[{"start":{"row":257,"column":15},"end":{"row":257,"column":16},"action":"insert","lines":["1"],"id":133}],[{"start":{"row":257,"column":18},"end":{"row":258,"column":0},"action":"insert","lines":["",""],"id":134},{"start":{"row":258,"column":0},"end":{"row":259,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":259,"column":0},"end":{"row":260,"column":18},"action":"insert","lines":["const url1 = `https://api.flickr.com/services/rest/?${parameters}`;","console.log(url1);"],"id":135}],[{"start":{"row":259,"column":9},"end":{"row":259,"column":10},"action":"remove","lines":["1"],"id":136}],[{"start":{"row":259,"column":9},"end":{"row":259,"column":10},"action":"insert","lines":["2"],"id":137}],[{"start":{"row":259,"column":64},"end":{"row":259,"column":65},"action":"insert","lines":["2"],"id":138}],[{"start":{"row":256,"column":64},"end":{"row":256,"column":65},"action":"insert","lines":["2"],"id":139}],[{"start":{"row":260,"column":15},"end":{"row":260,"column":16},"action":"remove","lines":["1"],"id":140}],[{"start":{"row":260,"column":15},"end":{"row":260,"column":16},"action":"insert","lines":["2"],"id":141}],[{"start":{"row":269,"column":13},"end":{"row":269,"column":14},"action":"insert","lines":["1"],"id":142}],[{"start":{"row":312,"column":3},"end":{"row":313,"column":0},"action":"insert","lines":["",""],"id":143},{"start":{"row":313,"column":0},"end":{"row":314,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":314,"column":0},"end":{"row":357,"column":3},"action":"insert","lines":["$.getJSON(url1, (data) => {","  console.log(data);","","  // データが取得できなかった場合","  if (data.stat !== 'ok') {","    console.error('データの取得に失敗しました。');","    return;","  }","","  // 空の<div>を作る","  const $div = $('<div>');","","  // ヒット件数","  $div.append(`<div>${data.photos.total} photos in total</div>`);","","  for (let i = 0; i < data.photos.photo.length; i++) {","    const photo = data.photos.photo[i];","    const photoText = getFlickrText(photo);","","    // $divに <a href=\"...\" ...><img src=\"...\" ...></a> を追加する","    $div.append(","      $('<a>', {","        href: getFlickrPageURL(photo),","        class: 'd-inline-block',","        target: '_blank', // リンクを新規タブで開く","        'data-toggle': 'tooltip',","        'data-placement': 'bottom',","        title: photoText,","      }).append(","        $('<img>', {","          src: getFlickrImageURL(photo, 'q'),","          width: 150,","          height: 150,","          alt: photoText,","        }),","      ),","    );","  }","  // $divを#mainに追加する","  $div.appendTo('.image-gallery');","","  // BootstrapのTooltipを適用","  $('[data-toggle=\"tooltip\"]').tooltip();","});"],"id":144}],[{"start":{"row":314,"column":13},"end":{"row":314,"column":14},"action":"remove","lines":["1"],"id":145}],[{"start":{"row":314,"column":13},"end":{"row":314,"column":14},"action":"insert","lines":["2"],"id":146}],[{"start":{"row":313,"column":0},"end":{"row":314,"column":0},"action":"insert","lines":["",""],"id":147},{"start":{"row":314,"column":0},"end":{"row":315,"column":0},"action":"insert","lines":["",""]},{"start":{"row":315,"column":0},"end":{"row":316,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":316,"column":0},"end":{"row":316,"column":1},"action":"insert","lines":["i"],"id":148},{"start":{"row":316,"column":1},"end":{"row":316,"column":2},"action":"insert","lines":["n"]}],[{"start":{"row":316,"column":1},"end":{"row":316,"column":2},"action":"remove","lines":["n"],"id":149},{"start":{"row":316,"column":0},"end":{"row":316,"column":1},"action":"remove","lines":["i"]}],[{"start":{"row":316,"column":0},"end":{"row":316,"column":4},"action":"insert","lines":["犬の画像"],"id":150}],[{"start":{"row":316,"column":0},"end":{"row":316,"column":3},"action":"insert","lines":["// "],"id":151}],[{"start":{"row":358,"column":0},"end":{"row":358,"column":3},"action":"insert","lines":["// "],"id":152},{"start":{"row":359,"column":0},"end":{"row":359,"column":3},"action":"insert","lines":["// "]},{"start":{"row":360,"column":0},"end":{"row":360,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":310,"column":0},"end":{"row":310,"column":3},"action":"insert","lines":["// "],"id":153},{"start":{"row":311,"column":0},"end":{"row":311,"column":3},"action":"insert","lines":["// "]},{"start":{"row":312,"column":0},"end":{"row":312,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":358,"column":0},"end":{"row":358,"column":3},"action":"remove","lines":["// "],"id":154},{"start":{"row":359,"column":0},"end":{"row":359,"column":3},"action":"remove","lines":["// "]},{"start":{"row":360,"column":0},"end":{"row":360,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":310,"column":0},"end":{"row":310,"column":3},"action":"remove","lines":["// "],"id":155},{"start":{"row":311,"column":0},"end":{"row":311,"column":3},"action":"remove","lines":["// "]},{"start":{"row":312,"column":0},"end":{"row":312,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":358,"column":2},"end":{"row":358,"column":5},"action":"insert","lines":["// "],"id":156},{"start":{"row":359,"column":2},"end":{"row":359,"column":5},"action":"insert","lines":["// "]}],[{"start":{"row":310,"column":2},"end":{"row":310,"column":5},"action":"insert","lines":["// "],"id":157},{"start":{"row":311,"column":2},"end":{"row":311,"column":5},"action":"insert","lines":["// "]}],[{"start":{"row":310,"column":2},"end":{"row":310,"column":5},"action":"remove","lines":["// "],"id":158},{"start":{"row":311,"column":2},"end":{"row":311,"column":5},"action":"remove","lines":["// "]}],[{"start":{"row":358,"column":2},"end":{"row":358,"column":5},"action":"remove","lines":["// "],"id":159},{"start":{"row":359,"column":2},"end":{"row":359,"column":5},"action":"remove","lines":["// "]}],[{"start":{"row":256,"column":64},"end":{"row":256,"column":65},"action":"remove","lines":["2"],"id":160}],[{"start":{"row":256,"column":64},"end":{"row":256,"column":65},"action":"insert","lines":["1"],"id":161}],[{"start":{"row":247,"column":11},"end":{"row":247,"column":12},"action":"remove","lines":["g"],"id":162},{"start":{"row":247,"column":10},"end":{"row":247,"column":11},"action":"remove","lines":["o"]},{"start":{"row":247,"column":9},"end":{"row":247,"column":10},"action":"remove","lines":["b"]}],[{"start":{"row":247,"column":9},"end":{"row":247,"column":10},"action":"insert","lines":["d"],"id":163},{"start":{"row":247,"column":10},"end":{"row":247,"column":11},"action":"insert","lines":["o"]}],[{"start":{"row":247,"column":11},"end":{"row":247,"column":12},"action":"insert","lines":["g"],"id":164}],[{"start":{"row":329,"column":2},"end":{"row":329,"column":5},"action":"insert","lines":["// "],"id":165},{"start":{"row":330,"column":2},"end":{"row":330,"column":5},"action":"insert","lines":["// "]}],[{"start":{"row":281,"column":2},"end":{"row":281,"column":5},"action":"insert","lines":["// "],"id":166},{"start":{"row":282,"column":2},"end":{"row":282,"column":5},"action":"insert","lines":["// "]}],[{"start":{"row":316,"column":7},"end":{"row":316,"column":8},"action":"insert","lines":["を"],"id":167}],[{"start":{"row":316,"column":8},"end":{"row":316,"column":10},"action":"insert","lines":["検索"],"id":168}],[{"start":{"row":316,"column":10},"end":{"row":316,"column":14},"action":"insert","lines":["して表示"],"id":169}],[{"start":{"row":316,"column":14},"end":{"row":317,"column":0},"action":"insert","lines":["",""],"id":170}],[{"start":{"row":316,"column":14},"end":{"row":317,"column":0},"action":"remove","lines":["",""],"id":171}],[{"start":{"row":279,"column":22},"end":{"row":279,"column":23},"action":"insert","lines":[" "],"id":197}],[{"start":{"row":279,"column":23},"end":{"row":279,"column":49},"action":"insert","lines":["class=\"image-gallery__item"],"id":198}],[{"start":{"row":327,"column":22},"end":{"row":327,"column":23},"action":"insert","lines":[" "],"id":199}],[{"start":{"row":327,"column":23},"end":{"row":327,"column":49},"action":"insert","lines":["class=\"image-gallery__item"],"id":200}],[{"start":{"row":327,"column":2},"end":{"row":327,"column":53},"action":"remove","lines":["const $div = $('<div class=\"image-gallery__item>');"],"id":202}],[{"start":{"row":335,"column":0},"end":{"row":335,"column":51},"action":"insert","lines":["const $div = $('<div class=\"image-gallery__item>');"],"id":203}],[{"start":{"row":335,"column":0},"end":{"row":335,"column":2},"action":"insert","lines":["  "],"id":204}],[{"start":{"row":335,"column":2},"end":{"row":335,"column":4},"action":"insert","lines":["  "],"id":205}],[{"start":{"row":326,"column":1},"end":{"row":326,"column":15},"action":"remove","lines":[" // 空の<div>を作る"],"id":206}],[{"start":{"row":287,"column":0},"end":{"row":287,"column":2},"action":"insert","lines":["  "],"id":207}],[{"start":{"row":287,"column":2},"end":{"row":287,"column":4},"action":"insert","lines":["  "],"id":208}],[{"start":{"row":287,"column":4},"end":{"row":287,"column":55},"action":"insert","lines":["const $div = $('<div class=\"image-gallery__item>');"],"id":209}],[{"start":{"row":279,"column":1},"end":{"row":279,"column":53},"action":"remove","lines":[" const $div = $('<div class=\"image-gallery__item>');"],"id":210}],[{"start":{"row":278,"column":14},"end":{"row":278,"column":15},"action":"remove","lines":["る"],"id":211},{"start":{"row":278,"column":13},"end":{"row":278,"column":14},"action":"remove","lines":["作"]},{"start":{"row":278,"column":12},"end":{"row":278,"column":13},"action":"remove","lines":["を"]},{"start":{"row":278,"column":11},"end":{"row":278,"column":12},"action":"remove","lines":[">"]},{"start":{"row":278,"column":10},"end":{"row":278,"column":11},"action":"remove","lines":["v"]},{"start":{"row":278,"column":9},"end":{"row":278,"column":10},"action":"remove","lines":["i"]},{"start":{"row":278,"column":8},"end":{"row":278,"column":9},"action":"remove","lines":["d"]},{"start":{"row":278,"column":7},"end":{"row":278,"column":8},"action":"remove","lines":["<"]},{"start":{"row":278,"column":6},"end":{"row":278,"column":7},"action":"remove","lines":["の"]},{"start":{"row":278,"column":5},"end":{"row":278,"column":6},"action":"remove","lines":["空"]},{"start":{"row":278,"column":4},"end":{"row":278,"column":5},"action":"remove","lines":[" "]}],[{"start":{"row":278,"column":3},"end":{"row":278,"column":4},"action":"remove","lines":["/"],"id":212},{"start":{"row":278,"column":2},"end":{"row":278,"column":3},"action":"remove","lines":["/"]},{"start":{"row":278,"column":0},"end":{"row":278,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":355,"column":0},"end":{"row":356,"column":34},"action":"remove","lines":["  // $divを#mainに追加する","  $div.appendTo('.image-gallery');"],"id":213}],[{"start":{"row":353,"column":6},"end":{"row":354,"column":0},"action":"insert","lines":["",""],"id":214},{"start":{"row":354,"column":0},"end":{"row":354,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":354,"column":4},"end":{"row":355,"column":34},"action":"insert","lines":["  // $divを#mainに追加する","  $div.appendTo('.image-gallery');"],"id":215}],[{"start":{"row":307,"column":0},"end":{"row":309,"column":0},"action":"remove","lines":["  // $divを#mainに追加する","  $div.appendTo('.image-gallery');",""],"id":216}],[{"start":{"row":305,"column":6},"end":{"row":306,"column":0},"action":"insert","lines":["",""],"id":217},{"start":{"row":306,"column":0},"end":{"row":306,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":306,"column":4},"end":{"row":308,"column":0},"action":"insert","lines":["  // $divを#mainに追加する","  $div.appendTo('.image-gallery');",""],"id":218}],[{"start":{"row":203,"column":16},"end":{"row":203,"column":48},"action":"remove","lines":["d12bd011e02f6ef3503814ef42007db5"],"id":219}]]},"ace":{"folds":[],"scrolltop":2632,"scrollleft":0,"selection":{"start":{"row":203,"column":16},"end":{"row":203,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1568531662188,"hash":"26cd7130e14f8a6c9c81013f55faf8067239e8d9"}