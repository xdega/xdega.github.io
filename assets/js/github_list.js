$(function() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.github.com/users/xdega/repos",
        "method": "GET"
    }

    $.ajax(settings).done(function (data) {
        let items = [];

        $(data).each(function(index, element) {
            items.push($('<div/>'));
            let description = String(element.description);
            if(description.indexOf('#portfolio') !== -1) {

                description = description.replace('#portfolio', '');

                items.push(
                    "<div class='repo_item'><a class='repo_link' href='" +
                    element.html_url +
                    "'><i class='fa fa-link' aria-hidden='true'></i></a>" +
                    "<span class='name'>" + 
                    element.name + 
                    "</span><span class='desription'>" +
                    description + 
                    "</span></div>"
                );

            }
        });

        $('#github_list').append.apply($('#github_list'), items);
    });
});
