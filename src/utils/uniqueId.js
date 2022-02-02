import { nanoid } from 'nanoid';

export const makeIds = (listLength) => {
  let ids = [];
  for (let i = 0; i < listLength; i++) {
    let fromNanoId = nanoid();
    while (ids.includes(fromNanoId)) {
      fromNanoId = nanoid();
    }
    ids.push(fromNanoId);
  }
  return ids;
};

export const getUniqueId = (idsList) => {
  let id;
  let fromNanoId = nanoid();
  while (idsList.includes(fromNanoId)) {
    fromNanoId = nanoid();
  }
  id = fromNanoId;
  return id;
};