// Project Filter
//Select the filter buttons and project cards
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedFilter = button.dataset.filter;
        filterButtons.forEach((filterButton) => {
            filterButton.setAttribute(
                'aria-pressed', 
                 String(filterButton === button)
            );
    });
        console.log("Selected Filter:", selectedFilter); // Debugging line
        projectCards.forEach(card => {
            const categories = card.dataset.category.split(" ");
            const shouldShow = selectedFilter === 'all' ||
             categories.includes(selectedFilter);
            card.hidden = !shouldShow;
     });
  }); 
});
      