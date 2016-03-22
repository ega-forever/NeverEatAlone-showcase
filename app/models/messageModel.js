/**
 * @Model message object to handle server's output
 * @param status - message status
 * @param message - message
 */
module.exports = function (message, status) {

    if (status == null) {
        this.status = "success";
    } else {
        this.status = status;
    }

    this.message = message;
}