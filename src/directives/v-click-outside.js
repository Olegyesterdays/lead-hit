// Определяем новую глобальную директиву
const VClickOutside = {
    beforeMount(el, binding) {
        // Определяем функцию, которая будет вызвана при клике вне элемента
        const handleClickOutside = (event) => {
            if (!el.contains(event.target) && el !== event.target) {
                binding.value();
            }
        };

        // Добавляем обработчик события клика на весь документ
        document.addEventListener('click', handleClickOutside);

        // Присваиваем обработчик клика к элементу
        el.clickOutsideEvent = handleClickOutside;
    },
    beforeUnmount(el) {
        // Удаляем обработчик клика при размонтировании компонента
        document.removeEventListener('click', el.clickOutsideEvent);
        delete el.clickOutsideEvent;
    }
}

export default VClickOutside
