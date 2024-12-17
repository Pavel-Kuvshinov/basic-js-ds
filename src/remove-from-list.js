const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  // Если нет head значит список пуст.
  if (!list) return null;


  // Если head должен быть удален, то делаем следующий узел новым head.
  while (list && list.value === k) {
    // Переназначаем следующий за head узел на новый head.
    list = list.next;
  }

  let currentNode = list;

  // Если следующий узел должен быть удален,
  // делаем узел через один, следующим для проверки.
  // Перебираем все узлы и удаляем их, если их значение равно указанному.

  while (currentNode.next) {
    if (currentNode.next.value === k) {
      // Перезаписываем, чтобы узел через один стал следующим узлом.
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return list;
}

module.exports = {
  removeKFromList
};
