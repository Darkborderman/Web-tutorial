//for event handling

$(`#list`).click((event) => {
    event.preventDefault();
    $.ajax({
        url: 'handler',
        type: 'GET',
        data: { action: 'list' },
        error: function (xhr) {},
        success: function (response) {
            $('#studentList').html(response);
        }
    });
})

$(`#search`).click((event) => {
    event.preventDefault();

    $.ajax({
        url: 'handler',
        type: 'GET',
        data: {
            action: 'search',
            data: {
                id: $(`#search input[name=ID]`).val()
            }
        },
        error: function (xhr) {},
        success: function (response) {
            $('#searchResult').html(response);
        }
    });
});

$(`#add`).click((event) => {
    event.preventDefault();

    $.ajax({
        url: 'handler',
        type: 'GET',
        data: {
            action: 'add',
            data: {
                id: $(`#add input[name=ID]`).val(),
                name: $(`#add input[name=name]`).val()
            }
        },
        error: function (xhr) {},
        success: function (response) {
            $('#addResult').html(response);
        }
    });
});

$(`#delete`).click((event) => {
    event.preventDefault();

    $.ajax({
        url: 'handler',
        type: 'GET',
        data: {
            action: 'delete',
            data: {
                id: $(`#delete input[name=ID]`).val()
            }
        },
        error: function (xhr) {},
        success: function (response) {
            $('#deleteResult').html(response);
        }
    });
});
