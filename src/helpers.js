/** choose a random item. */

// function choice(items) {
//   let idx = Math.floor(Math.random() * items.length);
//   return items[idx];
// }

const choice = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx]
}

/** return copy of array w/o first appearance of item
 *
 * If not found, return undefined.
 *
 **/

// function remove(item, items) {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i] === item) {
//       return [...items.slice(0, i), ...items.slice(i + 1)]
//     }
//   }
// }


const remove = (item, items) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      items.splice(items.indexOf(choice), 1);
			return choice;
    }
  }
}



export {choice, remove}