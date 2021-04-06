import $ from 'jquery';

export default class ExternalClient {

    static getUsername(programId) {
        var getUsernameDeferred = $.Deferred();
        $.ajax({
            type : 'GET',
            url : 'https://jsonplaceholder.typicode.com/users/1'
        }).done(function(data) {
            getUsernameDeferred.resolve(data.name);
        }).fail(function() {
            getUsernameDeferred.reject();
        });
        return getUsernameDeferred;
    }
}