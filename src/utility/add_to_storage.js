/**
 * 1. understand what to store or save : bookId
 * 2. where to store : database or localstorage
 * 3. array, list, collection : 
 * 4. check : if the book is already in the list 
 * 5. if not, then add the book to the list 
 * 6. if yes, do not add the book to the list
 */

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
                        console.log(id, "id is already exist in the list")
            } else {
                        // add to the read list
                        stored_list.push(id);
                        const stored_list_string = JSON.stringify(stored_list);
                        localStorage.setItem("read-list", stored_list_string);
            }
}

export { add_to_stored_read_list, get_stored_read_list }