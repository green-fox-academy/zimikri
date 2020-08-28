'use strict';

function ResponseMessage(status, message, data = null) {
    this.status = status;
    this.message = message;
    if (data) this.data = data;

    if (this.status == 'ERROR') console.error(this);
}

ResponseMessage.ok = (message, data = null) => {
    return new ResponseMessage('OK', message, data);
}

ResponseMessage.error = (message, data = null) => {
    return new ResponseMessage('ERROR', message, data);
}

module.exports = ResponseMessage;
