var page = 1;
var current_page = 1;
var articles_length = 0;
var current_page_size = 0;
var articles = new Array(0);
var converter = new showdown.Converter();
var article_list;
var article_content;
var container;
var pagination;

$(document).ready(function () {
  article_list = $('#article-list');
  article_content = $('#article-list');
  load_more_btn = $('#load-more-btn');
  container = $('#container');
  pagination = $('#pagination');
  $(".button-collapse").sideNav();
  load(false);
  write_list(1);
  var pre_page = page;
  while (true) {
    load(false);
    if (pre_page == page) break;
    pre_page = page;
  }
  articles_length = articles.length;
  current_page_size = Math.ceil(articles_length / 10);
  load_pagination();
});

function load_pagination() {
  if (articles_length == 0) {
    container.html('<h1 class="center">啥鸡掰都没有</h1>');
  }
  else {
    pagination.html('');
    pagination.append('<li onclick="previous_page()"><a href="#!"><i class="material-icons">chevron_left</i></a></li>');
    for(var i = 1; i <=current_page_size ; i++){
      if(i == current_page)
        pagination.append('<li class="waves-effect active pink accent-1" onclick="load_page('+ i +')"><a href="#!">' + i + '</a></li>');
      else 
        pagination.append('<li class="waves-effect" onclick="load_page('+ i +')"><a href="#!" >' + i + '</a></li>');
    }
    pagination.append('<li class="waves-effect" onclick="next_page()"><a href="#!"><i class="material-icons">chevron_right</i></a></li>');
  }
}

function previous_page(){
  if(current_page >= 2) {
      write_list(--current_page);
      load_pagination();
    }
  else 
    Materialize.toast("已经是第一页了阿鲁", 3000);
}

function load_page(page){
  if(page < 1 || page > current_page_size)
    Materialize.toast("你貌似来到了异次元黑洞，请刷新试试", 3000);
  else {
    write_list(page);
    load_pagination();
  }
}

function next_page(){
  if(current_page < current_page_size){
    write_list(++current_page);
    load_pagination();
  }
  else Materialize.toast("已经是最后一页了阿鲁", 3000);
}

function write_list(page){
  var start = (page - 1) * page_size;
  var end = start + page_size;
  if (end > articles.length) end = articles.length;
  article_list.html('');
  for (var i = start; i < end; i++) {
    var article = articles[i];
    var created_at = article.updated_at.split("T");
    var updated_date = article.updated_at.split("T");
    article_list.append(
      '<div class="card hoverable z-depth-2 col s12">' +
      '<div class="card-content white-text">' +
      '<a href="#article" class="card-title pink-text accent-1 article-title truncate" onclick="load_content(' + i +')">'+article.title+'</a>' +
      '<p class="grey-text text-darken-2">' + '创建时间：' + created_at[0] + " " + created_at[1].substring(0, created_at[1].length - 1) + '</p>' +
      '<p class="grey-text text-darken-2">' + '修改时间：' + updated_date[0] + " " + updated_date[1].substring(0, updated_date[1].length - 1) + '</p>' +
      '</div>' +
      '<div class="card-action" data-id="' + article.id + '">' +
      '</div>' +
      '</div>'
    );
    var labels = article.labels;
    var labels_content = $('.card-action[data-id=' + article.id + ']');
    for (var j = 0; j < labels.length; j++)
      labels_content.append('<div class="chip" style="background-color:#' + labels[j].color + ';color:#ffffff">' + labels[j].name + '</div>');
  }
  current_page = page;
}

function load(async) {
  $.ajax({
    url: "https://api.github.com/repos/" + user_name + "/" + repos_name + "/issues",
    type: "get",
    dataType: 'json',
    headers: {
      Authorization: "token " + access_token
    },
    data: ("milestone=1" + "&creator=" + user_name + "&state=open" + "&page=" + page + "&per_page=" + page_size),
    async: async,
    success: function (response) {
      var length = response.length;
      if (length > 0) {
        for (var i = 0; i < length; i++) {
          var article = response[i];
          articles.push(article);
        }
        page++;
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      Materialize.toast("未知错误", 3000);
    }
  });
}

function load_content(number) {
  var article = articles[number];
  $('.container').html(
    '<div class="card-panel row" id="article-content">' +
    converter.makeHtml(article.body) +
    '</div>' +
    '<div id="comments"></div>'
  );
  var gitment = new Gitment({
    id: article.node_id,
    owner: user_name,
    repo: repos_name,
    oauth: {
      client_id: client_id,
      client_secret: client_secret,
    },
  });
  gitment.render('comments');
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });
  $('img').addClass('col s12');
  $('h1').addClass('col s12');
  $('h2').addClass('col s12');
  $('h3').addClass('col s12');
  $('h4').addClass('col s12');
  $('h5').addClass('col s12');
  $('p').addClass('col s12');
  $('pre').addClass('col s12');
  $('code').addClass('col s12');
  $('blockquote').addClass('col s12');
  $('a').addClass('col s12');
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block);
  });
}