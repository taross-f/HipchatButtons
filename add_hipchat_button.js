$(function(){
    console.log("loding...");

    setInterval(function() {
        var buttons = $(".msg-line > .hc-dropdown");

        buttons.each(function(_, element) {
            var b = $(element);
            if (b.children('.btn-addon').length) return;
            // add quote button
            var quoteButton = $("<button class='btn-addon'>quote</button>");
            quoteButton.bind("click", function () {
                setTimeout(function() { // react側でゴニョゴニョやってるので遅らせる
                    $("#hc-message-input").val("/quote " + b.next('.msg-line').text());
                }, 100);
            });
            b.append(quoteButton);

            // add Re: button
            var reButton = $("<button class='btn-addon'>Re:</button>");
            reButton.bind("click", function () {
                setTimeout(function() {
                    var name = b.parents('.hc-chat-msg').children('.sender-name').text();
                    if (!name.startsWith("@")) name = b.parents('.hc-chat-msg').children('.sender-name').attr('aria-label');
                    $("#hc-message-input").val("Re: " + b.parents('.hc-chat-msg').children('.sender-name').text() + " ");
                }, 100);
            });
            b.append(reButton);            
        }, this);

        $("#hc-message-input").focus();
    }, 5000);
});

