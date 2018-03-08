'use strict';

/* TODO */
module.exports = Franz => {
  const getMessages = getMessages => {
    let count = document.querySelectorAll('._5fx8:not(._569x),._1ht3:not(._569x)').length;
    const messageRequestsElement = document.querySelector('._5nxf');

    if (messageRequestsElement) {
      count += parseInt(messageRequestsElement.innerHTML, 10);
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
