function search_animal() {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    if (input === '') {
        for (let i = 0; i < x.length; i++) { 
            x[i].style.display = 'none';
        }
    } else {
        for (let i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = 'none';
            } else {
                x[i].style.display = 'list-item';                 
            }
        }
    }
}
