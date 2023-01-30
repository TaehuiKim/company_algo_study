const reverseList = (head) => {
  if (!head || !head.next) return head;

  let prev = null;
  while(head) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }
  return prev;
}