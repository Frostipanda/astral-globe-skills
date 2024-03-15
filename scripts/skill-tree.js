Hooks.on("renderActorSheet5eCharacter", (app, html, data) => {
    console.log("Astral Globe Skills module adjusting new character sheet.");

    // Check if the skill tree tab is already present
    if (!html.find(".tabs [data-tab='skillTree']").length) {
        const tabButton = $('<a class="item control" data-group="primary" data-tab="skillTree" data-tooltip="Skill Tree" aria-label="Skill Tree"><i class="fas fa-sitemap"></i></a>');
        const tabContent = $('<div class="tab" data-group="primary" data-tab="skillTree" style="display: none;">Your skill tree content here</div>');

        // Insert the new tab button and content
        html.find('.tabs[data-group="primary"]').append(tabButton);
        html.find('.sheet-body').append(tabContent); // Adjust this selector if necessary

        // Handle clicking the new tab
        tabButton.click(() => {
            html.find(".tab").hide(); // Hide all tab contents
            html.find(".tabs a").removeClass("active"); // Deactivate all tabs
            tabButton.addClass("active"); // Activate the new tab
            tabContent.show(); // Show the new tab content
        });
    }
});
