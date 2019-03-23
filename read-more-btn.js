
/*
 * Read more button script, nicely working 
 */
$(document).ready(function () {
    var maxLength = 100;
    $(".read-more-less").each(function () {
        var myStr = $(this).text();
        if ($.trim(myStr).length > maxLength) {
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" class="read-more">read more...</a>');
            $(this).append('<span class="more-text">' + removedStr + "</span>");
        }
        $(".table tbody").one("click",
            ".read-more",
            function () {
                var currentRow = $(this).closest("tr");
                elem = currentRow.find("td:eq(1)");
                $(this).siblings(".more-text").contents().unwrap();
                $(this).remove();
                $(elem).clone().prependTo("#selectedItem");
            });

    });
});










//This is a script to perfect the previous one about read more button
//Tried to create and apply the read less button. some more fixes needed
/*
$(document).ready(function() {
    var contentArray = [];
    var index = "";
    var clickedIndex = "";
    var minimumLength = $('.read-more-less').attr("data-id");
    var initialContentLength = [];
    var initialContent = [];
    var readMore = "..........<br/><hr/><span class='read-more'><span> Read More</span>";
    var readLess = "..........<br/><hr/><span class='read-more'><span> Read Less</span>";
    $('.read-toggle').each(function() {
        index = $(this).attr('data-id');
        contentArray[index] = $(this).html();
        initialContentLength[index] = $(this).html().length;
        if (initialContentLength[index] > minimumLength) {
            initialContent[index] = $(this).html().substr(0,
                minimumLength);
        } else {
            initialContent[index] = $(this).html();
        }
        $(this).html(initialContent[index] + readMore);
        //console.log(initialContent[0]);  
    });
    $(document).on("click", ".read-more", function () {
        $(this).fadeOut(50, function () {
            clickedIndex = $(this).parents(".read-toggle").attr("data-id");
            $(this).parents(".read-toggle").html(contentArray[clickedIndex] + readLess);
        });
    });
    $(document).on("click", ".read-less", function () {
        $(this).fadeOut(50, function () {
            clickedIndex = $(this).parents(".read-toggle").attr("data-id");
            $(this).parents(".read-toggle").html(initialContent[clickedIndex] + readMore);
        });
    });
});
*/