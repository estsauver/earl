$(function(){
  $('[rel="tooltip"]').tooltip();

  if ( window.location.pathname == '/' ) {
    $('[rel="tooltip"]').hover(
      function () {
        $('.tooltip.top').addClass("home");
      }
    );
  }

  $(".tweet").tweet({
    username: 'estsauver',
    join_text: "auto",
    avatar_size: 32,
    count: 3,
    loading_text: "loading tweets...",
    auto_join_text_default: "",
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "loading tweets..."
  });

  $(".instagram").instagram({
    userId: 12845105,
    //hash: 'love',
    clientId: '8f7dfca14fdc47b5be850b7c27a8e920',
    accessToken: '12845105.8f7dfca.3add011af01c451b934ceaecd5957441',
    show: 4,
    onComplete: function(photos, data) {
      insta_next_url = data.pagination.next_url;
    }
  });
  $('#instabutton').on('click', function(){
    var button = $(this);
    var text = button.text();
    var insta_container = $(".instagram");
    button.addClass('disabled');

    if (button.text() != 'Loading…') {
      button.text('Loading…');
      insta_container.instagram({
          userId: 12845105,
          clientId: '8f7dfca14fdc47b5be850b7c27a8e920',
          accessToken: '12845105.8f7dfca.3add011af01c451b934ceaecd5957441',
          next_url : insta_next_url,
          show : 4, 
          onComplete : function(photos, data) {
            console.log(data);
            insta_next_url = data.pagination.next_url;
            button.text(text);
            button.removeClass('disabled');
          }
      });
    }
  });

});
