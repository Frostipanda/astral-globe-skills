Hooks.on('renderActorSheet', (app, html, data) => {
  // Assuming a similar approach for adding the tab button
  if (html.find(".item[data-tab='skillTree']").length === 0) {
    const tabButtonsContainer = html.find('.sidebar .card'); // Adjust based on actual container for tabs
    const tabButton = $('<button type="button" class="item" data-tab="skillTree">Skill Tree</button>'); // Adapt button class as necessary
    tabButtonsContainer.append(tabButton); // Adjust insertion method as needed

    // For the content area
    const contentContainer = html.find('.main-content .tab-body'); // Adjust based on actual container for tab content
    const tabContent = $(`
      <div class="tab skill-tree" data-group="primary" data-tab="skillTree">
        <!-- Your Skill Tree Content Here -->
      </div>
    `);
    contentContainer.append(tabContent);

    // Tab switch logic (may need adjustment based on actual tab handling)
    tabButton.click(function() {
      html.find('.tab').hide(); // Hide all tabs
      html.find('.tab[data-tab="skillTree"]').show(); // Show skill tree tab
    });
  }
});
