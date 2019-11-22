$(function() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.github.com/users/xdega/repos?type=owner&&sort=updated",
        "method": "GET"
    }

    // Activate Loader
    console.log("Activate Loader");
    $("#loading").show();

    $.ajax(settings).done(function (data) {
        let items = [];

        $(data).each(function(index, element) {
            let description = String(element.description);
            if(description.indexOf('#portfolio') !== -1) {

                description = description.replace('#portfolio', '');

                items.push(
                    "<div class='repo_item'><a class='repo_link' href='" +
                    element.html_url +
                    "' target='_blank'><i class='fab fa-github' aria-hidden='true'></i>" +
                    "<span class='name'>" + 
                    element.name + 
                    "</span></a><span class='description'>" +
                    description + 
                    "</span></div>"
                );

            }
        });

        // Deactivate Loader
        console.log("Deactivate Loader");
        $("#loading").hide();

        $('#github_list').append.apply($('#github_list'), items);
    });
});
