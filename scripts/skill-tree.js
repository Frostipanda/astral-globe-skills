Hooks.on("renderActorSheet5eCharacter", (app, html, data) => {
    console.log("Astral Globe Skills module adjusting character sheet.");

    if (!html.find(".tabs [data-tab='skillTree']").length) {
        // Creating the tab button with a custom icon
        const tabButton = $(`<a class="item" data-tab="skillTree"><img src="/modules/astral-globe-skills/icons/tab.png" width="20" height="20" style="border:0;"></a>`);
        // Skill Tree tab content placeholder
        const tabContent = $(`
            <div class="tab" data-tab="skillTree" style="display: none;">
                <!-- Your Skill Tree HTML content here -->
            </div>
        `);

        // Append the new tab button
        html.find('.tabs[data-group="primary"]').append(tabButton);
        // Append the new tab content
        html.find('.sheet-body').append(tabContent);

        // Activate the new tab on click
        tabButton.click(function() {
            html.find(".tabs a.item").removeClass("active");
            html.find(".tab").hide();
            tabButton.addClass("active");
            tabContent.show();
        });
    }
});
