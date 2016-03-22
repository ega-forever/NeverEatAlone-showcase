var request = require('request'),
    messageFactory = require('../../app/factories/messageFactory'),
    messageModel = require('../../app/models/messageModel'),
    config = require('../../app/config');
    token = null;



describe('demo app test auth', function () {
    it("should respond as not authed", function (done) {
        request("http://localhost:3000/", function (error, response, body) {
            var obj = eval('(' + body + ')');
            expect(obj).toEqual(new messageModel(messageFactory.authMessages.noToken, "fail"));
            done();
        });
    });


    it("should respond as authed on right credentials", function (done) {
        request.post("http://localhost:3000/auth",
            {form: config.demoUser}
            ,function (error, response, body) {
            var obj = eval('(' + body + ')');
                token = obj.message.token;
            expect(obj.message.token).not.toBeUndefined();
            done();
        });
    });



    it("should respond as authed", function (done) {
        request("http://localhost:3000/",{
            headers: {
                'x-access-token' : token
            }
        }, function (error, response, body) {
            var obj = eval('(' + body + ')');
            expect(obj).toEqual(new messageModel(messageFactory.authMessages.authed));
            done();
        });
    });



});