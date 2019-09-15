/**
 * selectorに該当するタブを表示する
 */
const showTab = (selector) => {
// いったん（ひとまず）、すべての.tabs-menu の子要素のdivからactiveクラスを削除する
$(`.tabs-menu`).children().removeClass(`active`);
// .tabs-menu の子要素のdivのうち、selectorに該当するものにだけactiveクラスを付ける
  $(`.tabs-menu div[id="${selector}"]`).addClass(`active`);
  

console.log(selector)
//   if文で書くidに適用されたidのみを表示、それ以外を非表示

      if(selector== `tab-menu-a`){
        $(`#tabs-a`).show();
        $(`#tabs-b`).hide();
        $(`#tabs-c`).hide();
        }
    if(selector== `tab-menu-b`){
        $(`#tabs-a`).hide();
        $(`#tabs-b`).show();
        $(`#tabs-c`).hide();
         }
    if(selector== `tab-menu-c`){
        $(`#tabs-a`).hide();
        $(`#tabs-b`).hide();
        $(`#tabs-c`).show();
        
        
    }
  
 // selectorに該当するものだけを表示する
$(selector).show();
};

// タブがクリックされたらコンテンツを表示
$(`.tabs-menu div`).on(`click`,(e) => {
    e.preventDefault();

// idの値を受け取ってshowTab()関数に渡す。e.targetはクリックされたタブ（id）を表す
const selector =$(e.target).attr(`id`)

showTab(selector);


console.log(selector)
})

// 初期状態として1番目のタブを表示
showTab('#tabs-a');
$(`#tab-menu-a`).addClass("active");




