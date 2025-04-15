/**
 * 1. understand what to store or save : bookId
 * 2. where to store : database or localstorage
 * 3. array, list, collection : 
 * 4. check : if the book is already in the list 
 * 5. if not, then add the book to the list 
 * 6. if yes, do not add the book to the list
 */

import { toast } from "react-toastify";

const get_stored_read_list = () => {
            // getting read list 
            const stored_list_string = localStorage.getItem("read-list");
            if (stored_list_string) {
                        const stored_list = JSON.parse(stored_list_string);
                        return stored_list;
            } else {
                        return [];
            }
} 

const add_to_stored_read_list = ( id ) => {
            const stored_list = get_stored_read_list();

            if( stored_list.includes(id) ) {
                        // already exist, do not add it

                        // ideally trigger toast from the component
                        toast.error("already added to the read list")
            } else {
                        // add to the read list
                        stored_list.push(id);
                        const stored_list_string = JSON.stringify(stored_list);
                        localStorage.setItem("read-list", stored_list_string);

                        // ideally trigger toast from the component
                        toast("book added to the read list")
            }
}

export { add_to_stored_read_list, get_stored_read_list }