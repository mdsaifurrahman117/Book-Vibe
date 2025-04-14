/**
 * 1. understand what to store or save : bookId
 * 2. where to store : database or localstorage
 * 3. how to store : array, list, or collection
 * 4. check if the book is already exist in the wish list, do not add it
 * 5. if not, add it to the wish list
 */

// getting the wish list 
const get_wish_list = () => {
            const get_stored_wish_list = localStorage.getItem("wish-list");
            if ( get_stored_wish_list ) {
                        const stored_wish_list = JSON.parse(get_stored_wish_list);
                        return stored_wish_list;
            } else {
                        return [];
            }
}

const add_to_wish_list = (id) => {
            const stored_wish_list = get_wish_list();
            
            // checking already exist in the wish list
            if ( stored_wish_list.includes(id) ) {
                        console.log(id, "id is already exist in the wish list");
            } else {

                        stored_wish_list.push(id);
                        const wish_list = JSON.stringify(stored_wish_list);
                        localStorage.setItem("wish-list", wish_list);
            }
}

export { add_to_wish_list }