// dodajemy funkcję konstruującą button, która tworzy nowe przyciski
function Button(text) { // dodajemy paramter text, za pomocą którego ustawimy początkową wartość dla text w nowych obiektach.
    this.text = text || 'Hello'; // Dodajemy możliwość tworzenia obiektu bez podania argumentu, w takim przypadku domyślną wartością właściwości text naszych przycisków jest 'Hello'.
}
// Tworzymy podstawową metodę create tworzącą przycisk na stronie.
Button.prototype = {
	create: function() {
        var self = this;
        this.element = document.createElement('button'); // W polu this.element trzymamy nowo utworzony element przy wykorzystaniu API DOM.
        this.element.innerText = this.text; // Następnie ustawiamy tekst na przycisku za pomocą pola innerText
        this.element.addEventListener('click', function() {
            alert(self.text); //metoda, która po kliknięciu w przycisk wyświetla tekst na ekranie komputera.
        document.body.appendChild(this.element);
        
        });
    
    }
   
}

var btn1 = new Button('Hello!'); //tworzymy pierwsza instancję

btn1.create(); //wywołajmy metodę create w celu stworzenia elementu


