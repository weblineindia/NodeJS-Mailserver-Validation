const mailx = require('mailx')

function ValidateIncomingEmail(protocol, host, port, username, password) {
    var store = mailx.store(protocol, host, port, username, password)
    return new Promise((resolve, reject) => {
        const arr = []
        store.connect((err) => {
            if (err) {
                resolve(false)
            } else {
                var inbox = store.getInbox(1)
                inbox.fail(() => {
                    resolve(false)
                })
                inbox.done((status) => {
                    resolve(status)
                })
                inbox.getNextMessage((err, message) => {
                    if (err) {
                        resolve(false)
                    }
                    if (message === null) {
                        resolve(true)
                    }
                    arr.push(message.subject)
                    resolve(true)
                })
            }
        })
    }).catch(() => {
        return {
            statusCode: 400,
            message: 'Server got error.'
        }
    }).finally(() => {
        store.close()
    })
}

function ValidateOutgoingEmail(fromemail, toemail, host, port, username, password) {
    var message = mailx.message()
    message.setFrom('me', fromemail)
    message.addTo('you', toemail)
    message.setSubject('Outgoing Email Server Testing')
    message.setHtml('Outgoing Email Server Testing <b>Successful</b>')
    const transport = mailx.transport(host, port, username, password)
    return new Promise((resolve) => {
        transport.send(message, function (err, result) {
            if (err) {
                resolve(false) 
            } else {
                resolve(true) 
            }
        })
    }).catch(() => {
        return {
            statusCode: 400,
            message: 'Server got error.'
        }
    })
}

exports.ValidateIncomingEmail = ValidateIncomingEmail
exports.ValidateOutgoingEmail = ValidateOutgoingEmail