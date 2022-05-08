console.log('This is ES6 version of Project 2');

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;

        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    //for displaying the message
    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"></span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ""
        }, 5000);
    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }
    e.preventDefault();
}


// //MY OWN MADE CODE
// class book {
//     constructor(namee, author, type) {
//         this.namee = namee
//         this.author = author
//         this.type = type
//     }
// }

// class display {
//     add(namee, author, type) {
//         let html = ''
//         html += `<tr>
//                     <td>${namee}</td>
//                     <td>${author}</td>
//                     <td>${type}</td>
//                 </tr>`

//         document.getElementById('tbody').innerHTML += html
//     }

//     clear() {
//         document.getElementById('form').reset()
//     }

//     validation(namee, author) {
//         if (namee.length < 2 & author.length < 2) {
//             return false
//         }
//         else {
//             return true
//         }
//     }

//     alerting() {
//         let alrting=''
//         alrting+=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
//             <strong>Sorry </strong>Cannot display it in the book list
//             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//             </button>
//         </div>`
//         document.getElementsByClassName('alerrt').innerHTML=alrting
//     }


// }

// document.getElementById('form').addEventListener('submit', (e) => {
//     let namee = document.getElementById('name').value
//     let author = document.getElementById('author').value
//     let cooking = document.getElementById('cooking')
//     let playing = document.getElementById('playing')
//     let type
//     if (cooking.checked) {
//         type = cooking.value
//     }
//     else if (playing.checked) {
//         type = playing.value
//     }
//     console.log("first")
//     let bok = new book()
//     let disp = new display()
//     if (disp.validation(namee, author, type)) {
//         disp.add(namee, author, type)
//         disp.clear()
//     }
//     else {
//         disp.alerting()
//     }
//     console.log("last")
//     e.preventDefault()

// })