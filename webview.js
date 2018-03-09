'use strict';

const SELECTOR_CHANNELS_UNREAD = '.has-unread';

module.exports = Franz => {
  const getMessages = getMessages => {
    const directMessages = document.querySelectorAll(`.people ${SELECTOR_CHANNELS_UNREAD}`).length;
    const allMessages = document.querySelectorAll(SELECTOR_CHANNELS_UNREAD).length - directMessages;

    // set Franz badge
    Franz.setBadge(directMessages, allMessages);
  };

  Franz.loop(getMessages);
};
