let getMessages = (arr) => {
    try {
        let messages = {};
        arr.sort((a, b) => parseInt(a.id) - parseInt(b.id));

        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let chatId = item?.message?.chatId;
            let messageId = parseInt(item?.message?.id);

            if (!chatId || !messageId) continue;

            if (item.type == 'new') {
                if (!messages[chatId]) {
                    messages[chatId] = [item.message];
                } else {
                    messages[chatId].push(item.message);
                }
            }

            if (item.type == 'updated' && messages[chatId]) {
                let index = messages[chatId].findIndex(msg => parseInt(msg.id) == messageId);
                if (index != -1) {
                    messages[chatId][index] = item.message;
                }
            }

            if (item.type == 'deleted' && messages[chatId]) {
                messages[chatId] = messages[chatId].filter(msg => parseInt(msg.id) != messageId);
            }
        }

        Object.keys(messages).forEach(chatId => { messages[chatId].sort((a, b) => parseInt(a.id) - parseInt(b.id)); });
        // let answer = Object.fromEntries(Object.entries(messages).filter(([key, value]) => value.length > 0));

        if (typeof chat.renderMessages == 'function') {
            chat.renderMessages(messages);
        } else {
            console.error('chat.renderMessages is not a function');
        }
    } catch (err) {
        console.log(err.message);
    }
}

function callback(msg) {
    let arr = JSON.parse(localStorage.getItem("arr") || "[]");
    let messageId = parseInt(msg.id);
    let index = arr.findIndex(item => parseInt(item.id) == messageId);

    if (index == -1) {
        arr.push(msg);
    } else {
        arr[index] = msg;
    }

    localStorage.setItem("arr", JSON.stringify(arr));
    getMessages(arr);
}

const chat = new Chat(callback);

// For an inactive tab, the callback is not called, but all messages must be displayed in all tabs.
setInterval(() => {
    let arr = JSON.parse(localStorage.getItem("arr") || "[]");
    getMessages(arr);
}, 1000);