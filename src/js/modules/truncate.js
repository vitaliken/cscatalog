function trancate(className, maxLength) {
    var elements = document.getElementsByClassName(className);

    for (var i = 0; i < elements.length; i++) {
        var currentElement = elements[i];

        if (currentElement.textContent) {
            var text = currentElement.textContent.trim();

            if (text.length > maxLength) {
                var trancateText = text.substring(0, maxLength) + "…";
                currentElement.textContent = trancateText;
            }
        }
    }
}

trancate("products-list-item-top__title", 53);
trancate("products-list-item__description", 133);
