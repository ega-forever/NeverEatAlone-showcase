module.exports = function(){

    var authMessages = {
        authed: 'authed!',
        tokenFailed: 'Failed to authenticate token.',
        noToken: 'No token provided.',
        wrongCredentials: 'wrong credentials'
    };


    var actionMessages = {
        userSave: 'User saved successfully'
    };

    return {
        authMessages: authMessages,
        actionMessages: actionMessages
    }

}();