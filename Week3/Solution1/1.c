struct ListNode* reverseList(struct ListNode* head){
    if (!head) return NULL;
    if (!head->next) return head;

    struct ListNode *prev = NULL, *next;
    while(head != NULL) {
        next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }

   return prev;
}